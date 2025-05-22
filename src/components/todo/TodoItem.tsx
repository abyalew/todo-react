import type { TodoItem } from "./todo.schema.ts";
import {useState} from "react";

export default function TodoItem(props : TodoItem & { onToggle: () => void }) {
    const [completed, setCompleted] = useState<boolean>(props.completed);
    const onCompletedChanged = () => {
        setCompleted(!completed);
        props.onToggle();
    }
    return <li className="list-row" data-testid="todo-item">
        <div>
            <input type="checkbox" className="checkbox" checked={completed} onChange={onCompletedChanged}/>
        </div>
        <div>
            <div>{props.name}</div>
        </div>
    </li>
}