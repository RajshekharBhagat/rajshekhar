import {z} from 'zod';
export const MessageSchema = z.object({
    sender: z.string().optional(),
    message: z.string().min(1, 'Message cannot be empty'),
})
export const PersonalMessageSchema = z.object({
    name: z.string().min(1,'Name must not be empty'),
    email: z.string().email('Please enter valid email').min(1,'Email cannot be empty'),
    message: z.string().min(10,'Message must be of 10 character'),
})
export type PersonalMessageType = z.infer<typeof PersonalMessageSchema>;