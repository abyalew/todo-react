import {type Todo, todoSchema} from "./todo.schema.ts";
import {useState} from "react";
import { saveTodo  } from "../../services/todo.service.ts";

export default function TodoForm({ onNewTodoCreated } : { onNewTodoCreated: (todo: Todo) => void }) {
    const [ name, setName ] = useState("");
    const [ validationErrors, setValidationErrors ] = useState<string[]>([]);
    const addTodo = () => {
        const result = todoSchema.safeParse({name, items: []}); // throws error if invalid

        if(!result.success) {
            const errors: string[] = [];
            result.error.issues.forEach((err) => {
                errors.push(err.message);
            });
            setValidationErrors(errors);
            return;
        }
        setValidationErrors([]);
        saveTodo(result.data);
        onNewTodoCreated(result.data);
    }

    return (
        <div className="flex gap-5">
            <fieldset className="fieldset">
                <input type="text" placeholder="Type here" className="input rounded-4xl w-md" onChange={(e)=>setName(e.target.value)}/>
                {validationErrors.map((err) =>
                    <p className="label text-red-500" data-testid="error-message" key={err}>{err}</p>
                )}
            </fieldset>
            <button className="btn btn-primary rounded-4xl w-40" onClick={addTodo}>Add</button>
        </div>
    )
}