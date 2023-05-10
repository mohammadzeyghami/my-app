import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { ItemSwiper } from "./";
import { Swiper1, Swiper2, Swiper3, Swiper4 } from "@/public/swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { Swipear1, bgSwipear } from "@/public/swiper";

const SwiperProducts = ({ bg, title }) => {
  return (
    <div className="relative w-[1280px] flex flex-col h-[510px] mb-[50px]  items-center rounded-[8px]">
      <h2 className="z-20 mb-[40px] mt-[28px] text-[24px] font-bold border-b-4 border-[#D606448A]">
        {title}
      </h2>
      <div className="w-full">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className="mySwiper "
        >
          <SwiperSlide>
            <ItemSwiper
              title={"مانیتور مخصوص بازی"}
              img={Swiper1}
              price={"108,000,000"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ItemSwiper
              title={"مینی کیبورد"}
              img={Swiper2}
              price={"4,190,000"}
              offerPrice={"4,400,000"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ItemSwiper
              title={"کامپیوتر بازی"}
              img={Swiper3}
              price={"108,000,000"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ItemSwiper
              title={"کامپیوتر همه کاره"}
              img={Swiper4}
              price={"108,000,000"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ItemSwiper
              title={"مانیتور مخصوص بازی"}
              img={Swiper1}
              price={"108,000,000"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {bg && (
        <Image
          src={bgSwipear}
          className="absolute w-full h-full top-0 left-0"
        />
      )}
    </div>
  );
};

export default SwiperProducts;
