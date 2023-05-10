import React from "react";
import Image from "next/image";
import {
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
} from "@/public/main";

const SectionProducts = () => {
  return (
    <div className="w-full flex flex-col px-[141px] my-[100px] ">
      <div className="flex w-full ">
        <div
          className="bg-[#4892D6] w-[370px] h-[470px] rounded-[8px] flex px-[22px]
        flex-col  justify-center items-center"
        >
          <Image src={product2} className="w-[344px] h-[344px]" />
          <h3 className="text-[18px] text-white w-full flex justify-end font-bold mt-[38px] ">
            کامپیوتر
          </h3>
        </div>
        <div className="flex flex-col ml-[33px]">
          <div className=" w-[662px] bg-[#25B489] h-[233px] rounded-[8px] flex flex-col items-center justify-center relative">
            <Image src={product1} className="w-[541px] h-[346px]" />
            <h3 className=" text-white z-30 font-bold absolute bottom-4 right-4 text-[18px] ">
              لوازم جانبی
            </h3>
          </div>
          <div className="flex mt-[26px]">
            <div
              className=" mr-[31px]  bg-[#E45757] w-[315px] 
            flex flex-col items-center justify-center
             h-[205px] rounded-[8px]"
            >
              <Image src={product3} />
              <h2 className="w-full flex justify-end font-bold mr-[20px] text-[white]">
                لپ تاپ، تبلت و موبایل
              </h2>
            </div>
            <div className=" w-[315px] flex justify-center items-center flex-col  bg-[#FFD45B] h-[205px] rounded-[8px]">
              <Image src={product4} />
              <h2 className="w-full mt-[-30px] flex justify-end font-bold mr-[20px] text-[white]">
                شبکه
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[34px]">
        <div className="w-[514px] flex flex-col justify-center items-center h-[205px] bg-[#7BA591] mr-[38px] rounded-[8px]">
          {" "}
          <Image src={product5} />
          <h2 className="w-full mt-[-30px] flex justify-end text-[18px] font-bold mr-[25px] text-[white]">
            بازی
          </h2>
        </div>
        <div className="w-[514px] justify-center flex flex-col items-center h-[205px] bg-[#4A80B2] rounded-[8px]">
          <Image src={product6} />
          <h2 className="18px flex w-full justify-end font-bold text-[white]">
            دوربین مداربسته
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SectionProducts;
