import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../api";

const useServices = (limit) => {
  const url = limit ? `/services?limit=${limit}` : "/services";
  return useQuery({
    queryKey: ["services"],
    queryFn: async () => await (await axiosInstance.get(url)).data,
    refetchOnMount: false,
  });
};

export default useServices;
