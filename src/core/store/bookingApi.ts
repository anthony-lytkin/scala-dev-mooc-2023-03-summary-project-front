import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  BookingRoomDetailsDTO,
  CreateBookingDTO,
  MeetingRoomDTO,
  RoomInfo,
  UserBookingDTO,
} from "../../models/BookingRoomModels";
import { userId } from "../constants/global";

export const bookingApi = createApi({
  reducerPath: "BookingApi",
  tagTypes: ["MeetingRooms", "UserBookings", "BookingDetails"],
  baseQuery: fetchBaseQuery({ baseUrl: process.env.APP_REST_API as string }),
  endpoints: (build) => ({
    getDepartmentRooms: build.query<Array<MeetingRoomDTO>, string>({
      query: (depId) => `http://localhost:8080/api/v1/department/${depId}/rooms`,
      providesTags: [{ type: "MeetingRooms", id: "LIST" }],
    }),
    getUserBookingsList: build.query<Array<UserBookingDTO>, string>({
      query: (userId) => `user/${userId}/bookingList`,
      providesTags: [{ type: "UserBookings", id: "LIST" }],
    }),
    getBookingRoomDetails: build.query<BookingRoomDetailsDTO, RoomInfo>({
      query: (RoomInfo) => `http://localhost:8080/api/v1/room/${RoomInfo.roomId}/bookingDetails/${RoomInfo.startTime}/${RoomInfo.endTime}`,
      providesTags: [{ type: "BookingDetails", id: "LIST" }],
    }),
    addUserBookingRoom: build.mutation<UserBookingDTO, { body: CreateBookingDTO; userId: string }>({
      query: ({ body, userId }) => ({
        url: `http://localhost:8080/api/v1/user/${userId}/bookRoom`,
        method: "POST",
        body: body,
      }),
    }),
    deleteUserBookingRoom: build.mutation<any, string>({
        query: (bookingId) => ({
          url: `http://localhost:8080/api/v1/booking/${bookingId}`,
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
