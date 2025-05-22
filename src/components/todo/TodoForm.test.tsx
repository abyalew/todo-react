import { render, screen } from '@testing-library/react'
import {describe, it, expect} from "vitest";
import TodoForm from './TodoForm'
import {userEvent} from "@testing-library/user-event";

describe('TodoForm', () => {
    const localStorageMock = (() => {
        let store: Record<string, string> = {}

        return {
            getItem: vi.fn((key: string) => store[key] || null),
            setItem: vi.fn((key: string, value: string) => {
                store[key] = value
            }),
            removeItem: vi.fn((key: string) => {
                delete store[key]
            }),
            clear: vi.fn(() => {
                store = {}
            }),
        }
    })()

    beforeEach(() => {
        vi.stubGlobal('localStorage', localStorageMock)
    })

    it('validation fails when add button is clicked with empty todo name', async () => {
        const user = userEvent.setup();
        render(<TodoForm onNewTodoCreated={()=> {}}/>)
        const addButton = screen.getByRole('button');
        await user.click(addButton);
        const errorSection = screen.getByTestId('error-message');
        expect(errorSection).not.toBeNull();
    })
    it('should save to localstorage when a valid todo name is provided', async () => {
        const user = userEvent.setup();
        render(<TodoForm onNewTodoCreated={()=> {}}/>)
        const nameInput = screen.getByRole('textbox')
        const addButton = screen.getByRole('button');
        await user.type(nameInput,'new todo');
        await user.click(addButton);
        const rawData = localStorage.getItem('todos')
        expect(rawData).not.toBeNull();
        const data = JSON.parse(rawData as string);
        expect(data).toHaveLength(1);
        expect(data[0].name).to.equal('new todo');
    })
})