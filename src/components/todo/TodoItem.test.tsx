import { render, screen } from '@testing-library/react'
import {describe, it, expect} from "vitest";
import TodoItem from './TodoItem'
import {userEvent} from "@testing-library/user-event";

describe('TodoItem', () => {
    it('renders the todo item name', () => {
        const name = 'test todo item';

        render(<TodoItem completed={false} name={name} onToggle={() => {}} />)
        expect(screen.getByText(name)).toBeInTheDocument();
    })
    it('renders the checkbox as unchecked when completed is false', () => {
        const completed = false;

        render(<TodoItem completed={completed} name={'test'} onToggle={() => {}} />)
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).not.toBeChecked();
    })
    it('renders the checkbox as checked when completed is true', () => {
        const completed = false;

        render(<TodoItem completed={completed} name={'test'} onToggle={() => {}} />)
        const checkbox = screen.getByRole("checkbox");
        expect(checkbox).not.toBeChecked();
    })
    it('triggers the onToggle event when the checkbox is clicked', async () => {
        const user = userEvent.setup();
        const completed = false;
        const onToggle = vi.fn();
        render(<TodoItem completed={completed} name={'test'} onToggle={onToggle} />)
        const checkbox = screen.getByRole("checkbox");
        await user.click(checkbox);
        expect(onToggle).toHaveBeenCalledTimes(1);
    })
    it('rerender checkbox as checked when the checkbox is clicked', async () => {
        const user = userEvent.setup();
        const completed = false;
        const onToggle = vi.fn();
        render(<TodoItem completed={completed} name={'test'} onToggle={onToggle} />)
        const checkbox = screen.getByRole("checkbox");
        await user.click(checkbox);
        expect(checkbox).toBeChecked();
    })
    it('rerender checkbox as unchecked when the checkbox is clicked', async () => {
        const user = userEvent.setup();
        const completed = true;
        const onToggle = vi.fn();
        render(<TodoItem completed={completed} name={'test'} onToggle={onToggle} />)
        const checkbox = screen.getByRole("checkbox");
        await user.click(checkbox);
        expect(checkbox).not.toBeChecked();
    })
})