import {useEffect, useRef, useState} from "react";
import {type Todo, type TodoItem as TodoItemModel, todoItemSchema} from "./todo.schema.ts";
import TodoItem from "./TodoItem.tsx";
import {updateTodo} from "../../services/todo.service.ts";

export default function TodoEditDialog({ open, data, onTodoChanged, onClose }: {open: boolean, data: Todo, onTodoChanged: () => void, onClose: () => void }){
    const dialogRef = useRef<HTMLDialogElement>(null)
    useEffect(() => {
        const dialog = dialogRef.current;
        if (dialog) {
            dialog.addEventListener("close", onClose);
        }

        return () => {
            if (dialog) {
                dialog.removeEventListener("close", onClose);
            }
        };
    }, [onClose]);

    useEffect(() => {
        if (open && dialogRef.current && !dialogRef.current.open) {
            dialogRef.current.showModal();
        }
        setTodoItems(data.items)
    }, [open, data]);
    // const [todoName, setTodoName] = useState(data.name);
    const [todoItems, setTodoItems] = useState<TodoItemModel[]>(data.items);
    const [newTodoItem, setNewTodoItem] = useState<TodoItemModel>({name: '', completed: false});

    const onCompletedChanged = () => {
        setNewTodoItem({...newTodoItem, completed: !newTodoItem.completed})
    }

    const onAddNewTodoItem = () => {
        const result = todoItemSchema.safeParse(newTodoItem);
        if(!result.success){
            return;
        }
        const id = (todoItems.length | 0) + 1
        const updated: Todo = {
            id: data.id,
            name: data.name,
            items: [...todoItems, {...result.data, id: id}]
        }
        setNewTodoItem({name: '', completed: false})
        setTodoItems([...todoItems, {...result.data, id: id}]);
        updateTodo(updated);
        onTodoChanged();
    }

    return (
        <dialog ref={dialogRef} className="modal ">
            <div className="modal-box w-xl max-w-[unset]">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h2 className="card-title">{data.name}</h2>
                <ul className="list">
                    {
                        todoItems.map((item, index) =>
                            <TodoItem name={item.name} completed={item.completed} onToggle={() => {
                            }} key={index}></TodoItem>)
                    }
                    <li className="list-row items-center" data-testid="new-todo-item">
                        <input type="checkbox" className="checkbox" checked={newTodoItem.completed}
                               onChange={onCompletedChanged}/>
                        <input type="text" placeholder="Type here" className="input rounded-4xl w-sm" value={newTodoItem.name}
                               onChange={(e) => setNewTodoItem({...newTodoItem, name: e.target.value})}/>
                        <button className="btn rounded-4xl" onClick={onAddNewTodoItem}>
                            Add
                        </button>
                    </li>
                </ul>
            </div>
        </dialog>
    );
}