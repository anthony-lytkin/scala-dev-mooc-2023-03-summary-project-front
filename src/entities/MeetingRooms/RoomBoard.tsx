import React from "react";
import { Link } from "react-router-dom";
import { bookingRoute } from "../../core/routes";
import { MeetingRoomDTO } from "../../models/BookingRoomModels";
import {
  RoomBoardInner,
  RoomBoardName,
  RoomBoardOtherInfo,
} from "./styles/MeetingRooms";

interface Props {
  room: MeetingRoomDTO;
}

const RoomBoard: React.FC<Props> = ({ room }) => {
  const linkTo = bookingRoute(room.id);

  return (
    <Link to={linkTo}>
      <RoomBoardInner>
        <RoomBoardName>{room.name}</RoomBoardName>
        <RoomBoardOtherInfo>Локация: {room.floor} этаж</RoomBoardOtherInfo>
        <RoomBoardOtherInfo>
          Вместительность: {room.personNumber} человек
        </RoomBoardOtherInfo>
      </RoomBoardInner>
    </Link>
  );
};

export default RoomBoard;
