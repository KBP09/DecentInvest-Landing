import AboutUsCards from "./componenets/aboutUsCards";
import HeroSection from "./componenets/heroSection";
import Partner from "./componenets/partner";
import NftSection from "./componenets/nftSection";
import InvestorSection from "./componenets/investorSection";
export default function Home() {


  return (
    <>
      <HeroSection />
      <Partner/>
      <AboutUsCards />
      <NftSection/>
      <InvestorSection/>
    </>
  );
}
