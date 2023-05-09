import "@/styles/globals.css";
import { Ads, Navbar, Footer } from "@/components";
export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col max-w-[1280px] w-full mx-auto">
      <Ads />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
