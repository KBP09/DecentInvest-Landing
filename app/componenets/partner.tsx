'use client'
import React, { useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Partner = () => {
	const rcontainer = useRef(null);


	return (
		<div
  ref={rcontainer}
  className="h-auto min-h-[50vh] w-full flex flex-col items-center justify-center px-4 py-6"
  style={{ background: "linear-gradient(94.03deg, #652774 9.44%, #17081B 91.16%)" }}
>
  {/* <h1 className="text-white text-[32px] sm:text-[40px] md:text-[50px] text-center mb-6">
    Coming Soon On
  </h1> */}
  <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-6 w-full max-w-[900px]">
    {/* <div className="flex justify-center items-center w-full max-w-[160px] sm:max-w-[200px] mx-auto">
      <Image
        src={"/pol.webp"}
        alt="Polygon"
        width={160}
        height={80}
        className="w-full h-auto max-h-[80px] object-contain"
      />
    </div>
    <div className="flex justify-center items-center w-full max-w-[160px] sm:max-w-[200px] mx-auto">
      <Image
        src={"/base.png"}
        alt="Base"
        width={160}
        height={80}
        className="w-full h-auto max-h-[80px] object-contain"
      />
    </div>
    <div className="flex justify-center items-center w-full max-w-[160px] sm:max-w-[200px] mx-auto">
      <Image
        src={"/arb.png"}
        alt="Arbitrum"
        width={160}
        height={80}
        className="w-full h-auto max-h-[80px] object-contain"
      />
    </div>
    <div className="flex justify-center items-center w-full max-w-[160px] sm:max-w-[200px] mx-auto">
      <Image
        src={"/op.webp"}
        alt="Optimism"
        width={160}
        height={80}
        className="w-full h-auto max-h-[80px] object-contain"
      />
    </div> */}
  </div>
</div>


	);
}

export default Partner;