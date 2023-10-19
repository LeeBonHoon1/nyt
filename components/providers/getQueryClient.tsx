import { QueryClient } from "@tanstack/react-query";
import { queryOption } from "@/common/constants";
const queryClient = new QueryClient(queryOption);
const getQueryClient = () => queryClient;

export default getQueryClient;
