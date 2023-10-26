//import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { api } from './settings';

export const postApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => ({
        // endpoints например роутер апишка
        url: '/posts'
      })
    }),
    getAllPostsMe: builder.query({
      query: () => ({
        // http://213.171.5.191:3002/api
        url: '/posts/user/me', // endpoint
      })
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      })
    })
  })
});

//  отравляет rootReducer -> store  -> UI 
export const { endpoints: { getAllPosts } } = postApi;