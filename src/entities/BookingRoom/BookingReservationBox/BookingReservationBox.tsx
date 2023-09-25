import React, { useEffect, useState } from "react";
import { BookingBox } from "../../../models/BookingRoomModels";
import {
  BookingReservationBoxContent,
  BookingReservationBoxInner,
} from "./styles/BookingReservationBox";
import BookingReservationButton from "./BookingReservationButton";
import {
  useAddUserBookingRoomMutation,
  useDeleteUserBookingRoomMutation,
} from "../../../core/store";
import { userId } from "../../../core/constants/global";

interface Props {
  bookingBox: BookingBox;
  onSelected?: (isBooked: boolean, time: number) => void;
  selected: boolean;
}

const delta = 60 * 60 * 1000;

const BookingReservationBox: React.FC<Props> = ({
  bookingBox,
  onSelected,
  selected,
}) => {
  const [bookingTime, setBookingTime] = useState<number>(bookingBox.time);
  const [isSelected, setSelected] = useState<boolean>(selected);
  const [forBook, setForBook] = useState<boolean>(false);
  const [bookingId, setBookingId] = useState(bookingBox.bookingId);

  const [booking] = useAddUserBookingRoomMutation();
  const [calcelBooking] = useDeleteUserBookingRoomMutation();

  const offset = new Date(bookingBox.time).getTimezoneOffset() * 60 * 1000;

  const hoursMinutes = (time: number) => {
    const zonedTime = time;
    const date = new Date(time);
    const hours =
      date.getHours() < 10
        ? `0${date.getHours().toString()}`
        : date.getHours().toString();
    const minutes = date.getMinutes() === 0 ? "00" : date.getMinutes.toString;
    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    if (onSelected) onSelected(isSelected, bookingTime);
  }, [isSelected]);

  const handleClick = () => {
    setSelected(!isSelected);
  };

  const submitAction = (forBook: boolean) => {
    if (forBook) {
      booking({
        body: {
          roomId: bookingBox.roomId,
          startTime: bookingTime,
          endTime: bookingTime + delta,
        },
        userId: userId,
      });
    } else {
      calcelBooking(bookingId || "");
    }
  };

  return (
    <BookingReservationBoxInner>
      <BookingReservationBoxContent
        isBooked={bookingBox.isBooked}
        isSelected={selected}
        onClick={handleClick}
      >
        {hoursMinutes(bookingBox.time)} -{" "}
        {hoursMinutes(bookingBox.time + delta)}
      </BookingReservationBoxContent>
      <BookingReservationButton
        bookingId={bookingBox.bookingId}
        isBooked={bookingBox.isBooked}
        isSelected={isSelected}
        handleClick={submitAction}
      ></BookingReservationButton>
    </BookingReservationBoxInner>
  );
};

export default BookingReservationBox;
