import React from "react";
import Image from "next/image";
import {
  footer,
  footer1,
  footer2,
  footer3,
  footer4,
  footer5,
  footerkasbokar,
  footerrezi,
} from "../public/footer";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col w-full relative ">
        <Image src={footer} className="absolute h-[272px]" />
        <div className="flex h-full  pt-[41px] text-[white] border-b-[1px] border-[white] max-w-[1065px] mx-auto z-20 w-full">
          <div className="flex mt-[40px] mr-[17px]">
            <div className="w-[86px] h-[86px] bg-white rounded-[3px] mx-[9px]">
              <Image src={footerrezi} className="object-cover" />
            </div>
            <div className="w-[86px] h-[86px] bg-white rounded-[3px]">
              <Image src={footerrezi} className="object-cover" />
            </div>
          </div>
          <div className="flex flex-col text-end text-white">
            <h3 className="text-[16px] mb-[12px]">تماس با ما</h3>
            <p className="max-w-[297px] mb-[11px]">
              دفتر مرکزی: تهران، خیابان فلسطین، بالاتر از میدان فلسطین، کوی
              نوبخت، پلاک ۵، ساختمان فراز
            </p>
            <p className="mb-[22px]">تلفن: 02143000450 – 90001638 – 1638</p>

            <div>
              <div className="flex w-full justify-end gap-[4px]">
                <Image src={footer1} />
                <Image src={footer2} />
                <Image src={footer3} />
                <Image src={footer4} />
                <Image src={footer5} />
              </div>
            </div>
          </div>
          <div className="flex flex-col   mr-[135px] text-end  ml-[63px]">
            <h3 className="mb-[16px]">دسترسی سریع</h3>
            <Link href="#">محصولات</Link>
            <Link href="#">درباره ی ما</Link>
            <Link href="#">بلاگ</Link>
            <Link href="#">تماس با ما</Link>
            <Link href="#">خدمات و پشتیبانی</Link>
          </div>
          <div className="max-w-[276px] text-end ">
            <h3>درباره‌ی ما</h3>
            <p className="text-[14px]">
              فرازسیستم یکی از فروشگاه‌های اینترنتی نو در زمینه فروش انواع لوازم
              و تجهیزات کامپیوتری با تنوع کالایی برای تمامی اقشار جامعه با هر
              حوزه کاری و در هر گروه سنی است. فرازسیستم تلاش می‌کند با تضمین بر
              اصل بودن کالا و بهترین قیمت تجربه‌ای لذتبخش از یک خرید اینترنتی را
              برای کاربرانش به وجود آورد.
            </p>

            <p className="mt-[11px] mb-[22px]"></p>
          </div>
        </div>
        <div className="w-full mt-[9px] flex  justify-between text-[white] max-w-[1065px] mx-auto z-20">
          <p className="text-[#F8F7F7]">
            Copyright © 2023 faraz-system.com, All rights reserved
          </p>
          <p>طراحی سایت و سئو توسط</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
