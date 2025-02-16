import AboutUsCards from "./componenets/aboutUsCards";
import HeroSection from "./componenets/heroSection";
import Partner from "./componenets/partner";
import NftSection from "./componenets/nftSection";
import InvestorSection from "./componenets/investorSection";
export default function Home() {


  return (
    <>
      <HeroSection />
      <Partner />
      <AboutUsCards />
      <div className="mt-16">
        <h1 className="text-white text-[32px] sm:text-[40px] md:text-[50px] text-center">
          Trending Nfts
        </h1>
        <p className="text-[#E7E7E7] md:text-[20px] text-center mb-6">Discover the trending NFTs of the Startups</p>
        <NftSection background="linear-gradient(360deg, #652774 9.44%,#000000 91.16%)" />
      </div>
      <InvestorSection />
    </>
  );
}
