import {z} from 'zod';
export const MessageSchema = z.object({
    sender: z.string().optional(),
    message: z.string().min(1, 'Message cannot be empty'),
})
export const PersonalMessageSchema = z.object({
    _id: z.string().optional(),
    name: z.string().min(1,'Name must not be empty'),
    email: z.string().email('Please enter valid email').min(1,'Email cannot be empty'),
    message: z.string().min(10,'Message must be of 10 character'),
})
export type PersonalMessageRequestType = z.infer<typeof PersonalMessageSchema>;

export const DeleteMessageSchema = z.object({
    _id: z.string(),
})

export type DeleteMessageRequestType = z.infer<typeof DeleteMessageSchema>;