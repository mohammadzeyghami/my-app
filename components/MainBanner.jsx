import { banner1 } from "@/public/main";
import React from "react";
import Image from "next/image";
const MainBanner = () => {
  return (
    <Image
      src={banner1}
      alt="mainBanner"
      className=" w-full h-[200px] object-right "
    />
  );
};

export default MainBanner;
