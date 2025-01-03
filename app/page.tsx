import Navbar from "./componenets/navbar";
import Footer from "./componenets/footer";
import FooterMobile from "./componenets/footerMobile";
import AboutUsCards from "./componenets/aboutUsCards";
import HeroSection from "./componenets/heroSection";

export default function Home() {


  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="bg-[#1A1A1D] h-[500px] w-full">
      </div>
      <AboutUsCards />
      <Footer />
      <FooterMobile />
    </>
  );
}
