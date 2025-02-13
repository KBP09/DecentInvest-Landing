'use client'
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {

  return (
    <div className="h-[65vh] sm:h-screen w-full relative flex items-center justify-center flex-col mb-8 sm:mb-0">
      <div className="absolute inset-0 z-0">
        <Image
          src="./homebg.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="min-h-screen w-full overflow-hidden flex items-center justify-center flex-col z-10">
        <div className="mt-16 absolute inset-0 z-0 hidden lg:flex sm:h-screen lg:h-auto bg-cover bg-center"
          style={{
            backgroundImage: 'url("rectbg.svg")',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "85% 85%",
          }}
        />
        <div className="absolute inset-0 z-0 flex lg:hidden sm:h-screen lg:h-auto bg-cover bg-center"
          style={{
            backgroundImage: 'url("rectmob.svg")',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "90% 90%",
          }}
        />
        <h1 className="z-10 text-white text-[40px] sm:text-[60px] md:text-[100px] xl:text-[130px] font-bold mb-2 sm:mt-0">
          DecentInvest
        </h1>
        <h2 className="z-10 text-white text-[16px] md:text-[25px] xl:text-[40px] mb-2 sm:mb-0">
          Invest Decently, Invest Decentrally
        </h2>
        <h2 className="z-10 text-white text-[12px] md:text-[15px] xl:text-[30px] sm:mb-0">
          Secure, transparent, and fair investments
        </h2>
        <button className="z-10 bg-[#FFB200] text-black font-medium w-[130px] h-[42px] sm:h-[54px] sm:w-[220px] rounded-3xl hover:bg-yellow-500 transition-colors duration-300 text-[16px] sm:text-[25px] mt-8 ">
          <Link href='/business'>
              Get Started
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
