import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { server } from "../../constants/config";
const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${server}/api/v1` }),
  tagTypes: ["Chat"],
  endpoints: (builder) => ({
    myChats: builder.query({
      query: () => ({
        url: "chat/my",
        method: "get",
        credentials: "include",
      }),
      providesTags: ["Chat"],
    }),
  }),
});

export default api;
export const { useMyChatsQuery } = api;
