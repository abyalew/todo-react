import TodoItem from "./TodoItem.tsx";
import type {Todo, TodoItem as TodoItemModel} from "./todo.schema.ts";
import {updateTodo} from "../../services/todo.service.ts";

function TodoCard({ todo, onEdit } : {todo: Todo, onEdit: ()=> void} ) {

    const onToggleComplete = (item: TodoItemModel, completed: boolean)=> {
        const items = [...todo.items];

        const index = items.findIndex(itm=> itm.id === item.id);
        if(index > -1) {
            items[index].completed = completed;
            updateTodo({...todo, items})
        }
    }
    return <div className="card w-80 bg-base-100 card-sm card-border border-gray-300">
        <div className="card-body">
            <div className="flex justify-between">
                <h2 className="card-title">{todo.name}</h2>
                <button className="btn rounded-4xl" onClick={onEdit}>
                    Edit
                </button>
            </div>
            <ul className="list">
                {
                    todo.items.map(item =>
                        <TodoItem name={item.name} completed={item.completed} onToggle={(value) => {
                            onToggleComplete(item, value)}} key={item.id}></TodoItem>)
                }
            </ul>
        </div>
    </div>
}

export default TodoCard;