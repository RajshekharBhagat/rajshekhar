import { PersonalMessageType } from "@/models/PersonalMessage.model";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import axios from "axios";


interface ApiResponse {
    status:boolean,
    message: string,
    data:PersonalMessageType[],
}

export function useGetPersonalMessage(options?: UseQueryOptions<ApiResponse,Error>) {
    return useQuery<ApiResponse,Error>({
        queryKey: ['get-personal-messages'],
        queryFn: async() => {
            const {data:response} = await axios.get<ApiResponse>('/api/message');
            return response;
        },
        ...options,
    })
}