import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

const getHydrateQueryClient = cache(() => new QueryClient());

export default getHydrateQueryClient;
