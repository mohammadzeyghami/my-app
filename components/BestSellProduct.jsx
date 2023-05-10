import React from "react";
import Image from "next/image";
import { bestSellProducts } from "@/public/datas";
import { useState } from "react";
import { bestSellProductMain, sum } from "@/public/bestProductSell";

const BestSellProduct = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="px-[108px] mb-[112px] ">
      <div className="bg-[#F5F5F5] flex w-full h-[510px] rounded-[8px] ">
        <div className="flex flex-col  ml-[25px]">
          {bestSellProducts.map((item, index) => (
            <Image
              src={item.img}
              onClick={() => setActive(index)}
              alt="items"
              className="w-[80px] object-cover h-[80px] my-[25px]"
              key={index}
            />
          ))}
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center mt-[30px]">
            <h3 className="18px font-bold">
              مانیتور مخصوص بازی سامسونگ مدل LS22A330NH-M سایز 22 اینچ
            </h3>
            <Image
              src={sum}
              className="w-[70px] h-[47px] ml-[16px] "
              alt="sum"
            />
          </div>
          <div className="flex items-center">
            <div className="flex flex-col text-end w-[344px] mt-[-40px]">
              <p className="14px">
                اگر به دنبال خرید یک مانیتور مقرون‌به‌صرفه اما با کیفیت هستید؛
                می توانید روی محصول بسیار محبوب سامسونگ یعنی مانیتور
                LS22A330NH-M حساب باز کنید. این مانیتور به پنل VN مجهز شده است
                که شفافیت تصویر بالایی را به نمایش می‌گذارد.{" "}
              </p>
              <div className="flex gap-[16px] text-[20px] w-full justify-end mt-[50px] ">
                <p className="line-through text-[#909090]">4,400,000</p>
                <p className="text-[#FF0000]">4,190,000</p>
              </div>
              <div className="mt-[30px] w-full flex justify-end">
                <div className=" text-[16px] cursor-pointer text-[white] h-[55px] flex items-center justify-center w-[201px] bg-[#D60644] rounded-[8px]">
                  اضافه کرده به سبد خرید
                </div>
              </div>
            </div>
            <div>
              <Image
                src={bestSellProductMain}
                className="w-[363px] h-[363px]"
              />
            </div>
          </div>
        </div>
        <div className="w-[190px] h-full text-[white] bg-[#D60644] flex text-[30px] justify-start items-center flex-col">
          <div className="flex text-center pb-[10px] w-[93px] flex-col border-b-[2px] border-white">
            <p className=" mt-[20px] ">5</p>
            <p>روز</p>
          </div>
          <div className="flex text-center w-[93px] pb-[10px] flex-col border-b-[2px] border-white">
            <p className=" mt-[20px]">10</p>
            <p>ساعت</p>
          </div>
          <div className="flex text-center w-[93px] pb-[10px] flex-col border-b-[2px] border-white">
            <p className=" mt-[20px]">23</p>
            <p>دقیقه</p>
          </div>
          <div className="flex text-center  w-[93px] pb-[10px] flex-col ">
            <p className=" mt-[20px]">5</p>
            <p>ثانیه</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellProduct;
