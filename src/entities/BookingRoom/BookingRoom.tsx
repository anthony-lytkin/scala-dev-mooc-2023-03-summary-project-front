import React, { useEffect, useState } from "react";
import { useGetBookingRoomDetailsQuery } from "../../core/store";
import {
  BookingBox,
  BookingDTO,
  BookingRoomDetailsDTO,
} from "../../models/BookingRoomModels";
import { BookingRoomArea, BookingRoomInner } from "./styles/BookingRoom";
import RoomDetails from "./RoomDetails/RoomDetails";
import BookingReservationBox from "./BookingReservationBox/BookingReservationBox";
import { userId } from "../../core/constants/global";

interface Props {
  roomId: string;
}

const BookingRoom: React.FC<Props> = ({ roomId }) => {
  const [roomDetails, setRoomDetails] = useState<BookingRoomDetailsDTO>();
  const [bookingTime, setBookingTime] = useState<number>(0);
  const [isSelected, setSelected] = useState<boolean>(false);

  const today = new Date();

  const startOfDay =
    Math.floor(today.getTime() / 86400000) * 86400000 - 3 * 60 * 60 * 1000;
  const endOfDay = startOfDay + 86400000;

  const delta: number = 60 * 60 * 1000;

  const workingDayStartTime: number = startOfDay + 9 * 60 * 60 * 1000;
  const workingDayEndTime: number = endOfDay - 6 * 60 * 60 * 1000;

  const userBookings: Array<BookingDTO> | undefined =
    roomDetails?.bookings.filter((booking) => booking.iserId == userId);
  let bookingBoxes: Array<BookingBox> = [];

  function findBookingId(time: number) {
    const booking =  roomDetails?.bookings.find(b => (b.startTime === time && b.endTime === time))
    return booking ? booking.bookingId : null
  }

  function isBooked(time: number) {
    return roomDetails?.bookings.find((b) => b.startTime === time) &&
      roomDetails.bookings.find((b) => b.endTime === time + delta)
      ? true
      : false;
  }

  function isBookedByUser(time: number) {
    return userBookings?.filter(
      (booking) =>
        booking.startTime == time &&
        booking.endTime == time &&
        booking.bookingId === userId
    )
      ? true
      : false;
  }

  for (
    let time: number = workingDayStartTime;
    time < workingDayEndTime;
    time += delta
  ) {
    bookingBoxes.push({
      bookingId: findBookingId(time),
      roomId: roomId,
      time: time,
      isBooked: isBooked(time),
      isBookedByUser: isBookedByUser(time),
    });
  }

  const { data: response } = useGetBookingRoomDetailsQuery({
    roomId: roomId,
    startTime: startOfDay,
    endTime: endOfDay,
  });

  const onSelected = (selected: boolean, time: number) => {
    setSelected(selected);
    if (selected) {
      setBookingTime(time);
    }
  };

  useEffect(() => {
    if (response) {
      setRoomDetails(response);
    }
  }, [response]);

  return (
    <BookingRoomInner>
      <RoomDetails
        roomName={roomDetails?.name}
        roomLocation={roomDetails?.floor}
        roomPersonNumber={roomDetails?.personNumber}
      ></RoomDetails>
      <BookingRoomArea>
        Доступное время для бронирования на{" "}
        {new Date(workingDayStartTime).toLocaleDateString()}:
      </BookingRoomArea>
      <>
        {bookingBoxes.map((box) => (
          <BookingReservationBox
            key={box.time}
            bookingBox={box}
            onSelected={onSelected}
            selected={isSelected && bookingTime === box.time}
          ></BookingReservationBox>
        ))}
      </>
    </BookingRoomInner>
  );
};

export default BookingRoom;
