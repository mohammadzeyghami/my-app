import React from "react";
import Image from "next/image";
const Banner = ({ img }) => {
  return (
    <Image
      src={img}
      className="w-[1065px] my-[100px] mx-auto h-[304px] rounded-[8px]"
    />
  );
};

export default Banner;
