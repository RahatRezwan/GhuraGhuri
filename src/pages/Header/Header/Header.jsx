import React, { useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Header = () => {
   const [places, setPlaces] = useState([]);
   const [currentPlace, setCurrentPlace] = useState({});
   useEffect(() => {
      fetch("http://localhost:5000/places")
         .then((res) => res.json())
         .then((data) => setPlaces(data));
   }, []);

   const { imgLandscape, name, description, id } = currentPlace;

   return (
      <div
         className="bg-cover bg-no-repeat bg-center h-[100vh] flex flex-col justify-center relative"
         style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.78) 0%, rgba(70, 70, 70, 0.63) 100%), url(${imgLandscape})`,
         }}
      >
         <div className="flex justify-between items-center">
            <div className="w-[45%] pl-[6rem]">
               <h2 className="text-5xl font-extrabold mb-4 text-white">{name}</h2>
               <p className="text-white mb-4">
                  {description?.length > 250 ? (
                     <>{description.slice(0, 250) + "..."}</>
                  ) : (
                     <>{description}</>
                  )}
               </p>
               <Link to={`/booking/${id}`}>
                  <button className="btn btn-outline btn-warning">Book Now</button>
               </Link>
            </div>
            <div className="w-[55%]">
               {
                  <Swiper
                     swiper
                     effect={"coverflow"}
                     grabCursor={true}
                     centeredSlides={true}
                     pagination={true}
                     slidesPerView={3}
                     coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                     }}
                     modules={[EffectCoverflow, Pagination, Navigation]}
                     className="mySwiper"
                  >
                     {places.map((place, index) => (
                        <SwiperSlide>
                           <Hero key={place.id} place={place} setCurrentPlace={setCurrentPlace} />
                        </SwiperSlide>
                     ))}
                  </Swiper>
               }
            </div>
         </div>
      </div>
   );
};

export default Header;
