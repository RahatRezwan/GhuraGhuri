import React, { useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

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
                     effect={"coverflow"}
                     navigation={{
                        nextEl: ".button-next",
                        prevEl: ".button-prev",
                     }}
                     grabCursor={true}
                     centeredSlides={true}
                     loop={true}
                     slidesPerView={3}
                     coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                     }}
                     modules={[EffectCoverflow, Navigation]}
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
         <div className="flex justify-center gap-3 absolute bottom-5 left-1/2 right-1/2">
            <button className="button-prev">
               <HiArrowCircleLeft className="text-4xl text-warning" />
            </button>
            <button className="button-next">
               <HiArrowCircleRight className="text-4xl text-warning" />
            </button>
         </div>
      </div>
   );
};

export default Header;
