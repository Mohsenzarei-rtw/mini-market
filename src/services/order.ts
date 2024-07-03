import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { OrderParams } from "@/types/order";

export const orderService = createApi({
	reducerPath: "orderService",
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL + "/order" }),
	endpoints: (builder) => ({
		sellOrder: builder.mutation<string, OrderParams>({
			query: (params) => ({
				url: "sell",
				method: "POST",
				body: params,
			}),
		}),
		buyOrder: builder.mutation<string, OrderParams>({
			query: (params) => ({
				url: "buy",
				method: "POST",
				body: params,
			}),
		}),
	}),
});

export const { useSellOrderMutation: useSellOrder, useBuyOrderMutation: useBuyOrder } = orderService;
