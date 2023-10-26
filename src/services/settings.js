import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://213.171.5.191:3002/api",
  prepareHeaders: (headers, { getState }) => {
    const token = Cookies.get('token-dastan')
    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

// создаем api const потом от нее запрос сделаем настройка
export const api = createApi({
  // называния любого 
  reducerPath: "api",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});