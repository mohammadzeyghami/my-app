import React from "react";
import Image from "next/image";
import news from "../public/news/81XuGR22QnL 1.png";
import News from "./News";

const LastNews = ({ title }) => {
  return (
    <div className="w-[1280px] mx-auto flex flex-col rounded-[8px] mb-[100px] items-center">
      <div className="  mb-[50px]  items-center ">
        <h2 className="z-20 mb-[10px] mt-[28px] text-[24px] font-bold border-b-4 border-[#D606448A]">
          {title}
        </h2>
      </div>
      <div className="flex w-full justify-center flex-wrap gap-[16px] ">
        <News img={news} />
        <News img={news} />
        <News img={news} />
        <News img={news} />
        <News img={news} />
        <News img={news} />
      </div>
      <div className="bg-[#D60644] cursor-pointer rounded-[6px] text-[white] font-bold w-[121px] h-[36px] flex self-start ml-[110px] mt-[10px]  items-center justify-center">
        مشاهده ی همه
      </div>
    </div>
  );
};

export default LastNews;
