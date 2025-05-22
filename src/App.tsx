import './App.css'
import TodoCard from "./components/todo/TodoCard.tsx";
import TodoForm from "./components/todo/TodoForm.tsx";
import type {Todo} from "./components/todo/todo.schema.ts";
import {useEffect, useState} from "react";
import { getAllTodo } from "./services/todo.service.ts"
import TodoEditDialog from "./components/todo/TodoEditDialog.tsx";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [dataOnEdit, setDataOnEdit] = useState<Todo>({ name: "", items: [] });
    const [openEditDialog, setOpenEditDialog] = useState<boolean>(false);
    useEffect(()=>{
        loadData();
    },[])

    const loadData = () => {
        setTodos(getAllTodo());
        console.log('data loaded');
    }

    const onNewTodo = (todo: Todo) => {
        setTodos([...todos, todo])
        setDataOnEdit(todo);
        setOpenEditDialog(true);
    }

    const onEditTodo = (todo: Todo)=> {
        console.log('on edit');
        console.log(todo)
        setDataOnEdit(todo);
        setOpenEditDialog(true);
    }

  return (
      <>
          <div className="p-10">
              <div className="flex justify-center m-5">
                  <TodoForm onNewTodoCreated={onNewTodo}></TodoForm>
              </div>
              <div className="flex flex-row flex-wrap gap-5">
                  {todos.map(todo => <TodoCard todo={todo} key={todo.id} onEdit={() => onEditTodo(todo)}/>)}
              </div>
              <TodoEditDialog open={openEditDialog} data={dataOnEdit} onTodoChanged={loadData}
                              onClose={() => setOpenEditDialog(false)}/>
          </div>
      </>
  )
}

export default App
