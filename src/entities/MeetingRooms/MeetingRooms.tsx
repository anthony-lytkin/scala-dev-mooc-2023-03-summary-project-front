import React, { useEffect, useState } from "react";
import { useGetDepartmentRoomsQuery } from "../../core/store/bookingApi";

import { MeetingRoomDTO } from "../../models/BookingRoomModels";
import { MeetingRoomInner } from "./styles/MeetingRooms";
import RoomBoard from "./RoomBoard";

interface Props {
  departmentId: string;
}

const MeeringRoom: React.FC<Props> = ({ departmentId }) => {
  const [roomsData, setRoomsData] = useState<Array<MeetingRoomDTO>>([]);

  const { data: response } = useGetDepartmentRoomsQuery(departmentId);

  useEffect(() => {
    if (response) {
      setRoomsData(response);
    } 
  }, [response]);

  return (
    <MeetingRoomInner>
      {roomsData.map((room) => (
        <RoomBoard key={room.id} room={room} />
      ))}
    </MeetingRoomInner>
  );
};

export default MeeringRoom;
