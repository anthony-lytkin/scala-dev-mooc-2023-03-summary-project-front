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
    bookingId: string | null,
    iserId: string | null,
    bookedByUser: string | null,
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

export interface BookingBox {
    bookingId: string | null
    roomId: string
    time: number,
    isBooked: boolean,
    isBookedByUser: boolean
}

export type RoomInfo = CreateBookingDTO