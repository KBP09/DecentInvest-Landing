'use client'
import { useRef} from "react";
import Image from "next/image";

export default function Home() {
  const containerRef = useRef(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef(null);

  return (
    <div className="h-[65vh] sm:h-screen w-full flex items-center justify-center flex-col relative mb-8 sm:mb-0 overflow-hidden">
      
      <Image
        src="/homebg.svg"
        alt="Marketplace illustration"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="absolute inset-0 w-full h-full"
        priority
        loading="eager"
      />

      
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div
        ref={containerRef}
        className="mt-24 h-[50vh] sm:h-[80vh] backdrop-blur-lg border-4 w-[90vw] sm:w-[80vw] max-w-[1500px] flex flex-col items-center justify-center relative z-10 rounded-[48px] shadow-lg p-6 sm:p-10 "
      >
        <div ref={textRef} className="text-center">
          <h1 className="text-white text-[30px] sm:text-[50px] md:text-[70px] font-extrabold mb-2 sm:mt-0 leading-tight uppercase tracking-wide drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
            DecentInvest
          </h1>
          <div className="flex flex-col gap-3">
            <h2 className="text-white text-[14px] md:text-[25px] xl:text-[35px] flex flex-col items-center justify-center gap-2 text-center">
              Invest Decently, Invest Decentrally
            </h2>

            <h2 className="text-gray-300 text-[12px] md:text-[15px] xl:text-[23px] flex items-center justify-center gap-2">
              Tokenized Equity. Transparent Growth. Decentralized Wealth.
            </h2>
          </div>
        </div>


        <button
          ref={buttonRef}
          className="bg-[#FFB200] text-black font-medium w-[120px] h-[30px] sm:h-[56px] sm:w-[210px] rounded-3xl hover:bg-yellow-500 transition-all duration-300 sm:text-[25px] mt-8 shadow-md transform hover:scale-105"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
