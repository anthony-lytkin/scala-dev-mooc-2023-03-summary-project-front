import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { UserAuthDTO, UserDTO } from '../../models/UserModels';

export const authApi = createApi({
    reducerPath: 'AuthorizationApi',
    tagTypes: ['Authorization'],
    baseQuery: fetchBaseQuery({baseUrl: process.env.APP_REST_API as string}),
    endpoints: (build) => ({
        userAuthorization: build.mutation<UserDTO, UserAuthDTO>({
            query: (body: UserAuthDTO) => ({
                url: 'authorize',
                method: 'POST',
                body: {
                    login: body
                },
            }),
            invalidatesTags: [{type: 'Authorization', id: 'LIST'}]
        }),
    }),
})

export const { useUserAuthorizationMutation } = authApi;