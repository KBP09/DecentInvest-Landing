'use client'
import React, { useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const logos = [
// 	{ src: "/solana_logo.svg", alt: "Solana", width: 200, height: 28 },
// 	{ src: "/zora_logo.svg", alt: "Zora", width: 150, height: 28 },
// 	{ src: "/decent_logo.svg", alt: "Decent", width: 200, height: 28 },
// 	{ src: "/gcp_logo.svg", alt: "Google Cloud", width: 250, height: 28 },
// 	{
// 		src: "/backdropbuild_logo.svg",
// 		alt: "Backdrop Build",
// 		width: 230,
// 		height: 28,
// 	},
// ];


const Partner = () => {
    const rcontainer = useRef(null);
    // const txt2 = useRef(null);
    // const logosRef = useRef(null);

    return (
        <div ref={rcontainer} className="bg-[#1A1A1D] h-[50vh] w-full flex flex-col items-center justify-center">
            {/* <div ref={txt2} className="flex flex-col">
                <h6 className="text-lg md:text-5xl font-semibold">
                    Our Partners
                </h6>
            </div>

            <div
				ref={logosRef}
				className="logos-container flex items-center space-x-6 md:space-x-10 lg:space-x-20 overflow-hidden h-14 md:h-16"
			>
				<div className="flex animate-scroll gap-x-6 md:gap-x-10 lg:gap-x-20">
					{logos.map((logo, index) => (
						<Image
							key={index}
							src={logo.src}
							alt={logo.alt}
							width={logo.width}
							height={logo.height}
							className="w-2/5 md:h-2/3 md:w-fit"
						/>
					))}
					
					{logos.map((logo, index) => (
						<Image
							key={index + logos.length}
							src={logo.src}
							alt={logo.alt}
							width={logo.width}
							height={logo.height}
							className="w-2/5 md:h-2/3 md:w-fit"
						/>
					))}
				</div>
			</div> */}
        </div>
    );
}

export default Partner;