'use client'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { FaLock, FaChartLine } from 'react-icons/fa';

const HeroSection = () => {
  const containerRef = useRef(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } });

    // Fade & scale-in effect for the entire container
    if (containerRef.current) {
      tl.fromTo(
        containerRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1 }
      );
    }

    // Staggered fade-in effect for text elements
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.2, delay: 0.5 }
      );
    }

    // Floating animation for icons
    if (iconsRef.current) {
      gsap.fromTo(
        iconsRef.current.children,
        { y: 5 },
        { y: -5, repeat: -1, yoyo: true, duration: 1.5, ease: 'power1.inOut' }
      );
    }

    // Bounce effect on the button
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: 'power1.inOut',
      });
    }
  }, []);

  return (
    <div className="h-[65vh] sm:h-screen w-full flex items-center justify-center flex-col relative mb-8 sm:mb-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="./homebg.svg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      {/* Animated Card */}
      <div
        ref={containerRef}
        className="mt-24 h-[80vh] w-[80vw] flex flex-col items-center justify-center relative z-10 rounded-[48px] shadow-lg p-6 sm:p-10 border-4 border-white backdrop-blur-md"
      >
        <div className="text-center">
          <h1 className="text-white text-[35px] sm:text-[64px] md:text-[100px] xl:text-[100px] font-extrabold mb-2 sm:mt-0 leading-tight tracking-wide drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
            DecentInvest
          </h1>
          <div className="flex flex-col gap-3">
            <h2 className="text-[#FFD700] text-[12px] md:text-[30px] xl:text-[40px] font-semibold flex items-center justify-center gap-2">
              <FaChartLine className="text-yellow-400" />
              Invest Decently, Invest Decentrally
            </h2>
            <h2 className="text-gray-300 text-[10px] md:text-[18px] xl:text-[25px] italic flex items-center justify-center gap-2">
              <FaLock className="text-green-400" />
              Secure, Transparent, and Fair Investments
            </h2>
          </div>
        </div>

        {/* Animated Button */}
        <button
          ref={buttonRef}
          className="bg-[#FFB200] text-black font-medium w-[120px] h-[30px] sm:h-[60px] sm:w-[230px] rounded-3xl hover:bg-yellow-500 transition-all duration-300 sm:text-[25px] mt-8 shadow-md transform hover:scale-105"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
