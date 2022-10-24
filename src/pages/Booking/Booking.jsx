import React from "react";
import { useLoaderData } from "react-router-dom";

const Booking = () => {
   const place = useLoaderData();
   console.log(place);
   return <div>This is booking page</div>;
};

export default Booking;
