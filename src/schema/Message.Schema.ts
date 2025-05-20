import {z} from 'zod';
export const MessageSchema = z.object({
    sender: z.string().optional(),
    message: z.string().min(1, 'Message cannot be empty'),
})