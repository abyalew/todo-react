import { z } from 'zod'

export const todoItemSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(5, "Todo name must be at least 5 characters"),
    completed: z.boolean().default(false),
})

export const todoSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(5),
    items: z.array(todoItemSchema)
})

export type Todo = z.infer<typeof todoSchema>;
export type TodoItem = z.infer<typeof todoItemSchema>;