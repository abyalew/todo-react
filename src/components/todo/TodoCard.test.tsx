import { render, screen } from '@testing-library/react'
import {describe, it, expect} from "vitest";
import TodoCard from './TodoCard'
import type {Todo} from "./todo.schema.ts";

describe('TodoCard', () => {
    it('renders the todo name', () => {
        const todo: Todo = { name: 'test todo', items: []};

        render(<TodoCard todo={todo} />)
        expect(screen.getByText(todo.name)).toBeInTheDocument();
    })
    it('renders all todo items', () => {
        const todo : Todo = {
            name: 'test todo',
            items: [
                { name: 'todo item 1', completed: true },
                { name: 'todo item 2', completed: true },
                { name: 'todo item 3', completed: true }
            ]
        };

        render(<TodoCard todo={todo}/>);
        const todoItems = screen.getAllByTestId('todo-item')
        expect(todoItems).toHaveLength(3);
    })
})