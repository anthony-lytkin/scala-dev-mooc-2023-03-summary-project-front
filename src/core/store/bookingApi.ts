import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  BookingRoomDetailsDTO,
  CreateBookingDTO,
  MeetingRoomDTO,
  UserBookingDTO,
} from "../../models/BookingRoomModels";

export const bookingApi = createApi({
  reducerPath: "BookingApi",
  tagTypes: ["MeetingRooms", "UserBookings", "BookingDetails"],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.APP_REST_API as string }),
  endpoints: (build) => ({
    getDepartmentRooms: build.query<Array<MeetingRoomDTO>, string>({
      query: (depId) => `department/${depId}/rooms`,
      providesTags: [{ type: "MeetingRooms", id: "LIST" }],
    }),
    getUserBookingsList: build.query<Array<UserBookingDTO>, string>({
      query: (userId) => `user/${userId}/bookingList`,
      providesTags: [{ type: "UserBookings", id: "LIST" }],
    }),
    getBookingRoomDetails: build.query<Array<BookingRoomDetailsDTO>, string>({
      query: (roomId) => `room/${roomId}/bookingDetails`,
      providesTags: [{ type: "BookingDetails", id: "LIST" }],
    }),
    addUserBookingRoom: build.mutation<UserBookingDTO, { data: CreateBookingDTO; roomId: string }>({
      query: ({ data, roomId }) => ({
        url: `user/${roomId}/bookRoom`,
        method: "POST",
        body: data,
      }),
    }),
    deleteUserBookingRoom: build.mutation<any, string>({
        query: (bookingId) => ({
          url: `booking/${bookingId}`,
          method: "DELETE",
        }),
        invalidatesTags: [{type: 'UserBookings', id: 'LIST'}]
      }),
  }),
});

export const {
  useGetDepartmentRoomsQuery,
  useGetUserBookingsListQuery,
  useGetBookingRoomDetailsQuery,
  useAddUserBookingRoomMutation,
  useDeleteUserBookingRoomMutation,
} = bookingApi;
