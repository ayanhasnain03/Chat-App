import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { server } from "../../constants/config";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${server}/api/v1/`,
    credentials: "include",
  }),
  tagTypes: ["Chat", "User"],
  keepUnusedDataFor: 50,
  endpoints: (builder) => ({
    myChats: builder.query({
      query: () => "chat/my",
      method: "GET",
      providesTags: ["Chat"],
    }),
    searchUser: builder.query({
      query: (name) => `user/search?name=${name}`,
      method: "GET",
      providesTags: ["User"],
    }),
    sendFriendRequest:builder.mutation({
      query:(data)=>({
        url:"/user/sendrequest",
        method:"PUT",
        body:data
      }),
      invalidatesTags:["User"]
    })
  }),
});

export default api;
export const { useMyChatsQuery, useSearchUserQuery ,useSendFriendRequestMutation} = api;
