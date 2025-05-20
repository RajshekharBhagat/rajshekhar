import { MessageDeleteRequestType } from "@/validators/messageDeleteValidator";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export const useDeleteMessage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: MessageDeleteRequestType) => {
      if (!id) return;
      const { data: response } = await axios.delete(`/api/guestbook/${id}`);
      return response;
    },
    onSuccess: (response) => {
      toast(response.message, {
        description: "",
      });
      queryClient.invalidateQueries({ queryKey: ["fetchMessages"] });
    },
    onError: (error) => {
      toast(error.message);
    },
  });
};
