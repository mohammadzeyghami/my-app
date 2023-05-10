import React from "react";
import Image from "next/image";
import { headphone, search, logo, bascket, person } from "../public/navbar";
import Link from "next/link";

const Navbar = ({ active }) => {
  return (
    <>
      <nav className="h-[80px] flex justify-between px-[107px] items-center bg-[#D60644]">
        <div className="flex items-center">
          <Image src={headphone} alt="headphone" className="mr-[15.5px]" />
          <div className="flex flex-col text-white text-[14px] font-semibold">
            <p>02143000450</p>
            <p>02190001638-1638</p>
          </div>
        </div>
        <div>
          <input
            type="text"
            className="relative text-[14px] w-[340px] rounded-[8px] h-[38px] pl-[45px] pr-[15px] text-right"
            placeholder="محصول مورد نظر را جستجو کنید "
          />
          <Image src={search} className="absolute z-20 mt-[-27px] ml-[19px] " />
        </div>
        <Image src={logo} />
      </nav>
      <div className="w-full flex justify-between px-[107px] my-[14px]">
        <div className="flex items-center gap-[12px]">
          <Image src={bascket} />
          <Image src={person} />
        </div>
        <div className="text-[16px] ">
          <Link href="#" className={`${active === 0 ? "active" : ""}`}>
            درباره ی ما |{" "}
          </Link>
          <Link href="#" className={`${active === 1 ? "active" : ""}`}>
            بلاگ |{" "}
          </Link>
          <Link href="#" className={`${active === 2 ? "active" : ""}`}>
            تماس با ما |{" "}
          </Link>
          <Link href="#" className={`${active === 3 ? "active" : ""}`}>
            خدمات و پشتیبانی{" "}
          </Link>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Navbar;
