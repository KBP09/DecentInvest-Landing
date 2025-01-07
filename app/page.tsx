import Navbar from "./componenets/navbar";
import Footer from "./componenets/footer";
import FooterMobile from "./componenets/footerMobile";
import AboutUsCards from "./componenets/aboutUsCards";
import HeroSection from "./componenets/heroSection";
import Partner from "./componenets/partner";

export default function Home() {


  return (
    <>
      <Navbar />
      <HeroSection />
      <Partner/>
      <AboutUsCards />
      <Footer />
      <FooterMobile />
    </>
  );
}
