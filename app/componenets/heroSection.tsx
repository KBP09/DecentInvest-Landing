'use client'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const HeroSection = () => {
  const containerRef = useRef(null);
  const textRef = useRef<HTMLDivElement>(null); // Explicitly typed as an HTMLDivElement
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

    // Fade-in & Scale-up Effect for Card
    if (containerRef.current) {
      tl.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2 }
      );
    }

    // Slide-in from Bottom for Text (Ensuring textRef exists)
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.3, delay: 0.5, duration: 1, ease: 'power3.out' }
      );
    }

    // Button Hover Scale Effect
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: 'power1.inOut'
      });
    }
  }, []);

  return (
    <div className="h-[65vh] sm:h-screen w-full relative flex items-center justify-center flex-col mb-8 sm:mb-0">
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
        className="mt-24 h-[80vh] w-[80vw] backdrop-blur-md border-4 border-[#FFB200] overflow-hidden flex items-center justify-center flex-col relative z-10 rounded-[48px] will-change-auto"
      >

        <div ref={textRef} className="text-center">
          <h1 className="text-white text-[40px] sm:text-[60px] md:text-[100px] xl:text-[120px] font-bold mb-2 sm:mt-0">
            DecentInvest
          </h1>
          <h2 className="text-white text-[18px] p-4 md:text-[25px] xl:text-[40px] mb-2 sm:mb-0">
            Invest Decently, Invest Decentrally
          </h2>
          <h2 className="text-white text-[12px] md:text-[15px] xl:text-[30px] mb-2 sm:mb-0">
            Secure, transparent, and fair investments
          </h2>
        </div>

        {/* Animated Button */}
        <button
          ref={buttonRef}
          className="bg-[#FFB200] text-black font-medium w-[147px] h-[35px] sm:h-[54px] sm:w-[220px] rounded-3xl hover:bg-yellow-500 transition-colors duration-300 sm:text-[25px] mt-8"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
