export interface MeetingRoomDTO {
    id: string,
    name: string,
    floor: string,
    personNumber: number,
}

export interface UserBookingDTO {
    id: string,
    roomName: string,
    floor: string,
    startTime: number,
    endTime: number,
}

export interface BookingDTO {
    roomId: string,
    bookedByUser: string | undefined,
    startTime: number,
    endTime: number,
}

export interface BookingRoomDetailsDTO {
    id: string,
    name: string,
    floor: string,
    personNumber: number,
    bookings: Array<BookingDTO>,
}

export interface CreateBookingDTO {
    roomId: string,
    startTime: number,
    endTime: number,
}