import TodoItem from "./TodoItem.tsx";
import type {Todo} from "./todo.schema.ts";

function TodoCard({ todo } : {todo: Todo} ) {
    return <div className="card w-80 bg-base-100 card-sm card-border border-gray-300">
        <div className="card-body">
            <h2 className="card-title">{todo.name}</h2>
            <ul className="list">
                {
                    todo.items.map(item=>
                    <TodoItem name={ item.name } completed={item.completed} onToggle={ ()=> {} } key={item.id}></TodoItem>)
                }
            </ul>
        </div>
    </div>
}

export default TodoCard;