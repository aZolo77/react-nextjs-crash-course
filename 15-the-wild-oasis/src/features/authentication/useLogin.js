import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { login as loginApi } from "../../services/apiAuth";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationKey: [],
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      // _ Manually set data in a React Query Cash
      queryClient.setQueryData(["user"], user.user);
      // console.log(user);
      navigate("/dashboard", { replace: true });
    },
    onError: (error) => {
      console.error("ERROR:", error);
      toast.error(`Provided email or password are incorrect`);
    },
  });

  return { login, isLoading };
}
