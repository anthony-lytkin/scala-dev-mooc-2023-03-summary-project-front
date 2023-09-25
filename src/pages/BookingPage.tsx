import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import BookingRoom from "../entities/BookingRoom/BookingRoom";
import { useParams } from "react-router-dom";



const BookingPage: React.FC = () => {

    const{roomId} = useParams()

    return (
        <Layout child={<BookingRoom roomId={roomId as string}></BookingRoom>}></Layout>
    )

}

export default BookingPage