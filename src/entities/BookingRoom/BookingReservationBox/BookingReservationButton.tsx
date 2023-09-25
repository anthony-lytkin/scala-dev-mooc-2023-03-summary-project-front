import React, { useState } from "react";
import { BookingReservationBoxButton } from "./styles/BookingReservationBox";

interface Props {
  bookingId: string | null;
  isBooked: boolean;
  isSelected: boolean;
  handleClick: (forBook: boolean) => void;
}

const BookingReservationButton: React.FC<Props> = ({
  isBooked,
  isSelected,
  handleClick,
}) => {
  const clickHandler = () => {
    handleClick(!isBooked);
  };

  if (isSelected) {
    if (!isBooked) {
      return (
        <BookingReservationBoxButton forBook={!isBooked} onClick={clickHandler}>
          Забронировать
        </BookingReservationBoxButton>
      );
    } else {
      return (
        <BookingReservationBoxButton forBook={isBooked} onClick={clickHandler}>
          Отменить бронирование
        </BookingReservationBoxButton>
      );
    }
  }

  return <></>;
};

export default BookingReservationButton;
