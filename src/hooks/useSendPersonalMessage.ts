import { PersonalMessageRequestType } from "@/schema/Message.Schema";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import axios from "axios";

interface ApiResponse {
    success: boolean,
    message: string,
}

export function useSendPersonalMessage(options?: UseMutationOptions<ApiResponse,Error,PersonalMessageRequestType>) {
    return useMutation({
        mutationKey: ['send-message'],
        mutationFn: async(payload: PersonalMessageRequestType) => {
            const {data: response} = await axios.post('/api/message',payload);
            return response
        },
        ...options,
    })
}