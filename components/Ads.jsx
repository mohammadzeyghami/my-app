import React from "react";
import ads from "../public/ads/Screenshot 2023-02-19 000416 1.png";
import Image from "next/image";
const Ads = () => {
  return (
    <div className="w-full h-[34px]">
      <Image src={ads} />
    </div>
  );
};

export default Ads;
