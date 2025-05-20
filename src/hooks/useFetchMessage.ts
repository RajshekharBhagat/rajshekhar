import { Message } from "@/models/Message.model"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useFetchMessage = () => {
    return useQuery<Message[]>({
        queryKey: ['fetchMessages'],
        queryFn: async() => {
            const res = await axios.get('/api/guestbook');
            return res.data.messages;
        }
    })
}