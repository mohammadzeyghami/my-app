import {
  MainBanner,
  SectionProducts,
  BestSellProduct,
  SwiperProducts,
  Banner,
  LastNews,
} from "@/components";
import bannerimg from "../public/banner/screencapture-rtlr-ir-254347-2023-02-19-00_18_30 2.png";
export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <MainBanner />
      <SectionProducts />
      <BestSellProduct />
      <SwiperProducts title={"پر فروش ترین محصولات"} bg={true} />
      <Banner img={bannerimg} />
      <SwiperProducts title={"پر بازدید ترین محصولات"} />
      <LastNews title={"اخرین مقالات"} />
    </main>
  );
}
