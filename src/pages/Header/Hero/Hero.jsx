import React from "react";
import { useSwiperSlide } from "swiper/react";

const Hero = ({ place, setCurrentPlace }) => {
   const swiperSlide = useSwiperSlide();
   const { name, imgPortrait } = place;
   if (swiperSlide.isActive) {
      setCurrentPlace(place);
   }
   return (
      <div
         className={`w-full h-[416px] bg-cover bg-center bg-no-repeat relative rounded lg ${
            swiperSlide.isActive && "border-4 border-warning"
         }`}
         style={{
            backgroundImage: `url(${imgPortrait})`,
         }}
      >
         <h3 className="text-3xl font-bold text-white absolute left-3 bottom-5">
            {swiperSlide.isActive && name}
         </h3>
      </div>
   );
};

export default Hero;
