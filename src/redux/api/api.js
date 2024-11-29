import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { server } from "../../constants/config";
const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${server}/api/v1`,
    credentials: "include",
  }),
  tagTypes: ["Chat", "User"],
  keepUnusedDataFor: 50,
  endpoints: (builder) => ({
    myChats: builder.query({
      query: () => ({
        url: "chat/my",
        method: "get",
      }),
      providesTags: ["Chat"],
    }),
    searchUser: builder.query({
      query: (name) => ({
        url: `user/search?name=${name}`,
        method: "get",
      }),
    }),
  }),
});

export default api;
export const { useMyChatsQuery, useSearchUserQuery } = api;
