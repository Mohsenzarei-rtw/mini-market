import { configureStore } from "@reduxjs/toolkit";
import { orderService } from "src/services/order";

export const store = configureStore({
	reducer: {
		[orderService.reducerPath]: orderService.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(orderService.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
