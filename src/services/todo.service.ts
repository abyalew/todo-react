import type {Todo} from "../components/todo/todo.schema.ts";

export const getAllTodo = () => {
    const rawTodos = localStorage.getItem('todos');
    let todos = [];
    if(rawTodos) {
        todos = JSON.parse(rawTodos);
    }
    return todos;
}
export const saveTodo = (todo:Todo) => {
    const rawTodos = localStorage.getItem('todos');
    let todos = [];
    if(rawTodos){
        todos = JSON.parse(rawTodos);
    }
    todo.id = todos.length +1;
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}
export const updateTodo = (todo: Todo) => {
    const todos = getAllTodo();
    const index = todos.findIndex((todoOld: Todo) => todoOld.id === todo.id);
    if(index > -1) {
        todos[index] = { ...todo };
        localStorage.setItem('todos', JSON.stringify(todos))
    }
}