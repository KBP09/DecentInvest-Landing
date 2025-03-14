"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client
  }, []);

  return (
    <div className="h-[70vh] sm:h-screen w-full flex items-center justify-center flex-col relative mb-8 sm:mb-0 overflow-hidden">
      {isClient && (
        <Image
          src="/homebg.svg"
          alt="Marketplace illustration"
          fill
          className="absolute inset-0 w-full h-full object-cover object-center"
          priority
        />
      )}

      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="mt-24 h-[50vh] sm:h-[80vh] backdrop-blur-lg border-4 w-[90vw] sm:w-[80vw] max-w-[1500px] flex flex-col items-center justify-center relative z-10 rounded-[48px] shadow-lg p-6 sm:p-10">
        <div className="text-center">
          <h1
            className="text-white font-extrabold mb-2 sm:mt-0 leading-tight uppercase tracking-wide drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
            style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
          >
            DecentInvest
          </h1>

          <div className="flex flex-col gap-3">
            <h2
              className="text-white flex flex-col items-center justify-center gap-2 text-center"
              style={{ fontSize: "clamp(1rem, 2.5vw, 2.2rem)" }}
            >
              Invest Decently, Invest Decentrally
            </h2>

            <h2
              className="text-gray-300 flex items-center justify-center gap-2 text-center"
              style={{ fontSize: "clamp(0.75rem, 1.8vw, 1.4rem)" }}
            >
              Tokenized Equity. Transparent Growth. Decentralized Wealth.
            </h2>
          </div>
        </div>

        <button className="bg-[#FFB200] text-black font-medium w-[120px] h-[30px] sm:h-[52px] sm:w-[200px] rounded-3xl hover:bg-yellow-500 transition-all duration-300 sm:text-[23px] mt-8 shadow-md transform hover:scale-105">
          <Link href={"/business/#contactUs"}>Contact Us</Link>
        </button>
      </div>
    </div>
  );
}
