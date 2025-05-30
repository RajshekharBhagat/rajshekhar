import { DeleteMessageRequestType } from "@/schema/Message.Schema";
import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import axios from "axios";


interface ApiResponse {
    success: boolean,
    message: string,
}

export function useDeletePersonalMessage(options?: UseMutationOptions<ApiResponse,Error,DeleteMessageRequestType>) {
    return useMutation({
        mutationKey:['delete-personal-message'],
        mutationFn: async(payload:DeleteMessageRequestType) => {
            const {data:response} = await axios.delete<ApiResponse>('/api/message',{data:payload});
            return response
        },

        ...options,
    })
}