import React from "react";
import { RoomDetailsInner, RoomDetailsName, RoomDetailsOther } from "./styles/RoomDetails";

interface Props {
    roomName?: string
    roomLocation?: string
    roomPersonNumber?: number
}

const RoomDetails: React.FC<Props> = ({roomName, roomLocation, roomPersonNumber}) => {

    if (roomName && roomLocation && roomPersonNumber) {
        return (
            <RoomDetailsInner>
                <RoomDetailsName>{roomName}</RoomDetailsName>
                <RoomDetailsOther>Локация: {roomLocation} этаж</RoomDetailsOther>
                <RoomDetailsOther>Количество человек: {roomPersonNumber}</RoomDetailsOther>
            </RoomDetailsInner>
        )
    }

    return <></>

}

export default RoomDetails