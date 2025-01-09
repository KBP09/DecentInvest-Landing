'use client'
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="h-[75vh] sm:h-screen w-full relative flex items-center justify-center flex-col mb-8 sm:mb-0">
      <div className="absolute inset-0 z-0">
        <Image
          src="./homebg.svg"
          alt="Background Image"
          layout="fill" 
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="mt-24 h-[80vh] w-[80vw] bg-[#D9D9D91A] backdrop-blur-md border-4 overflow-hidden flex items-center justify-center flex-col relative z-10 rounded-[48px]">
        <h1 className="text-white text-[40px] sm:text-[60px] md:text-[100px] xl:text-[130px] font-bold mb-2 sm:mt-0">
          DecentInvest
        </h1>
        <h2 className="text-white text-[18px] md:text-[25px] xl:text-[40px] mb-2 sm:mb-0">
          Invest Decently, Invest Decentrally
        </h2>
        <h2 className="text-white text-[12px] md:text-[15px] xl:text-[30px] mb-2 sm:mb-0">
          Secure, transparent, and fair investments
        </h2>
        <button className="bg-[#FFB200] text-black font-medium w-[155px] h-[42px] sm:h-[54px] sm:w-[220px] rounded-2xl hover:bg-yellow-500 transition-colors duration-300 text-[25px] mt-8 ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
