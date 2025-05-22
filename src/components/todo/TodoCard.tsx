import TodoItem from "./TodoItem.tsx";
import type {Todo} from "./todo.schema.ts";

function TodoCard({ todo, onEdit } : {todo: Todo, onEdit: ()=> void} ) {
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
                        <TodoItem name={item.name} completed={item.completed} onToggle={() => {
                        }} key={item.id}></TodoItem>)
                }
            </ul>
        </div>
    </div>
}

export default TodoCard;