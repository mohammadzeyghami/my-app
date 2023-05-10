import { favorite, line, search, star } from "@/public/swiper";
import React from "react";
import Image from "next/image";
import { BsHandbag } from "react-icons/bs";

const ItemSwiper = ({ title, offerPrice, price, img }) => {
  return (
    <>
      <div className="flex flex-col items-center  rounded-[8px] hover:border-[#D60644] border-[1px] bg-white border-gray-300 h-[321px] w-[221px] cursor-pointer">
        <Image src={img} className=" mt-[12px] mx-auto h-[164.3px]" />

        <div className="flex justify-center w-full mt-[25px]  ">
          <Image src={star} className="w-[22px] h-[22px] object-contain" />
          <Image src={star} className="w-[22px] h-[22px] object-contain" />
          <Image src={star} className="w-[22px] h-[22px] object-contain" />
          <Image src={star} className="w-[22px] h-[22px] object-contain" />
          <Image src={star} className="w-[22px] h-[22px] object-contain" />
        </div>
        <h3 className="text-[14.47px]">{title}</h3>
        <div className="flex justify-center text-[16px]">
          <p className="text-[#D60644] mr-[5px]">{price} تومان</p>
          <p className="line-through text-gray-500">
            {offerPrice ? `${offerPrice} تومان` : ``}
          </p>
        </div>
      </div>
      <div className=" mx-auto rounded-[8px] justify-center hover:bg-[#D60644] w-[130px] bg-white mt-[-20px]   flex  items-center  h-[41px]">
        <BsHandbag className="text-[black] text-[14px]  hover:text-white " />
        <p className="text-[16px] cursor-pointer ">اضافه کرده به سبد </p>
      </div>
    </>
  );
};

export default ItemSwiper;
