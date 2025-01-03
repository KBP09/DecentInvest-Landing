import Navbar from "./componenets/navbar";
import Footer from "./componenets/footer";
import FooterMobile from "./componenets/footerMobile";
import AboutUsCards from "./componenets/aboutUsCards";


export default function Home() {


  return (
    <>
      <Navbar />
      <div className="h-screen sm:h-screen w-full bg-cover bg-center relative flex items-center justify-center flex-col">
        <div
          className="absolute inset-0 bg-cover bg-center bg-[url('../public/homebg.svg')] "
        />
        <div
          className="mt-16 h-[80vh] w-[80vw] bg-[#D9D9D91A] border-4 overflow-hidden flex items-center justify-center flex-col relative z-10 border-gradient"
        >
          <h1 className="text-[40px] sm:text-[100px] xl:text-[130px] font-bold mb-8 sm:mb-0">DecentInvest</h1>
          <h2 className="text-[18px] xl:text-[40px] mb-8 sm:mb-0">Invest Decently, Invest Decentrally</h2>
          <h2 className=" text-[12px] xl:text-[30px]  mb-8 sm:mb-0">Secure, transparent, and fair investments</h2>
          <button className="bg-[#FFB200] text-black font-medium  w-[147px] h-[35px] sm:h-[54px] sm:w-[220px] rounded-2xl hover:bg-yellow-500 transition-colors duration-300 text-[25px] mt-8 ">
            Get Started
          </button>
        </div>
      </div>
      <div className="bg-[#1A1A1D] h-[500px] w-full">

      </div>
      <div className="min-h-screen bg-black bg-[url('../public/BG1.svg')] bg-cover bg-center p-6 md:p-8 flex items-center justify-center flex-col">
        <h1 className="text-[80px] mt-16 text-center mb-8">About Us</h1>
        <AboutUsCards/>
      </div>
      <Footer/>
      <FooterMobile/>
    </>
  );
}
