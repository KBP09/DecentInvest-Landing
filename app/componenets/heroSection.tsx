'use client'
import { useRef, useEffect } from "react";
import gsap from 'gsap';
import Image from 'next/image';
import { FaLock, FaChartLine } from 'react-icons/fa';


export default function Home() {
  const containerRef = useRef(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 9) {
        video.pause();
        video.currentTime = 9;
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div className="h-[65vh] sm:h-screen w-full flex items-center justify-center flex-col relative mb-8 sm:mb-0 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/homebg3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div
        ref={containerRef}
        className="mt-24 h-[80vh] w-[80vw] max-w-[1500px] flex flex-col items-center justify-center relative z-10 rounded-[48px] shadow-lg p-6 sm:p-10 "
      >
        <div ref={textRef} className="text-center">
          <h1 className="text-white text-[35px] sm:text-[64px] md:text-[95px] font-extrabold mb-2 sm:mt-0 leading-tight uppercase tracking-wide drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
            DecentInvest
          </h1>
          <div className="flex flex-col gap-3">
            <h2 className="text-[#FFD700] text-[14px] md:text-[32px] xl:text-[42px] font-bold flex flex-col items-center justify-center gap-2 text-center">
              Powering The Future <br /> Of Startup Investments
            </h2>

            <h2 className="text-gray-300 text-[12px] md:text-[20px] xl:text-[28px] italic flex items-center justify-center gap-2">
              Tokenized Equity. Transparent Growth. Decentralized Wealth.
            </h2>
          </div>
        </div>


        <button
          ref={buttonRef}
          className="bg-[#FFB200] text-black font-medium w-[120px] h-[30px] sm:h-[60px] sm:w-[230px] rounded-3xl hover:bg-yellow-500 transition-all duration-300 sm:text-[25px] mt-8 shadow-md transform hover:scale-105"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
