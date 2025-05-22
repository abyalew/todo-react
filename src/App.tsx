import './App.css'
import TodoCard from "./components/todo/TodoCard.tsx";
import TodoForm from "./components/todo/TodoForm.tsx";
import type {Todo} from "./components/todo/todo.schema.ts";

function App() {

    const todos: Todo[] = [
        {id: 1, name: 'test 1', items: [{id:1,name: "test item 1", completed: true}]},
        {id: 2,name: 'test 2', items: [{id:2,name: "test item 2", completed: false}]},
        {id: 3,name: 'test 3', items: [{id:3,name: "test item 4", completed: true}]}
    ];
  return (
      <>
          <div className="flex justify-center m-5">
              <TodoForm></TodoForm>
          </div>
          <div className="flex flex-row flex-wrap gap-5">
              {todos.map(todo=> <TodoCard todo={todo} key={todo.id}/>)}
          </div>
      </>
  )
}

export default App
