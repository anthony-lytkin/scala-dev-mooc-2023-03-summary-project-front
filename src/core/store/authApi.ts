import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'AuthorizationApi',
    tagTypes: ['Authorization'],
    baseQuery: fetchBaseQuery({baseUrl: process.env.APP_REST_API as string}),
    endpoints: (build) => ({
        userAuthorization: build.mutation<any, string>({
            query: (login: string) => ({
                url: 'authorize',
                method: 'POST',
                body: {
                    login: login
                },
            }),
            invalidatesTags: [{type: 'Authorization', id: 'LIST'}]
        }),
    }),
})

export const {useUserAuthorizationMutation} = authApi;