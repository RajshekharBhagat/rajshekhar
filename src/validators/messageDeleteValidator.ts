import { z } from "zod";

export const messageDeleteValidator = z.string({required_error: 'Id is required to delete a message'})

export type MessageDeleteRequestType = z.infer<typeof messageDeleteValidator>;