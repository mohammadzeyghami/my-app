import React from "react";
import Image from "next/image";
const News = ({ img }) => {
  return (
    <div className="w-[343px] cursor-pointer bg-[#F8F7F7] h-[102px] rounded-[8px] flex ">
      <div className="flex flex-col justify-around px-[15px]">
        <h4 className="mb-[15px] text-[14px] font-bold">
          جدید ترین گوشی سامسونگ وارد بازار شد{" "}
        </h4>
        <div className="flex gap-[10px] text-[13px] ">
          <p>3</p>
          <p>127</p>
          <p>3 دیدگاه</p>
          <p>1401/11/14</p>
        </div>
      </div>
      <Image src={img} className="w-[83px] h-[83px]" />
    </div>
  );
};

export default News;
