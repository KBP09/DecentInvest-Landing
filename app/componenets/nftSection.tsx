'use client'
import React, { useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { GradientCard } from "./gradientCard";
gsap.registerPlugin(ScrollTrigger);

const Nftsection = () => {
    const rcontainer = useRef(null);


    return (
        <div
            ref={rcontainer}
            className="h-auto min-h-[80vh] w-full flex flex-col items-center justify-center px-4 py-6"
            style={{ background: "linear-gradient(94.03deg, #652774 9.44%, #17081B 91.16%)" }}
        >
            <h1 className="text-white text-[32px] sm:text-[40px] md:text-[50px] text-center mb-6">
                Top Investors
            </h1>
            <div className="sm:flex sm:flex-wrap justify-center items-center gap-6 w-full max-w-full">
                <GradientCard bgColor="linear-gradient(180deg, rgba(60, 13, 75, 0.6) 0%, rgba(77, 15, 96, 0.6) 50%, rgba(179, 39, 140, 0.6) 100%)" className="aspect-[13/20] text-white flex items-center justify-center max-w-full h-[100px] sm:h-[400px]">
                    <div className="flex flex-col items-left justify-center w-full h-full p-8 gap-4">
                        <div className="bg-white h-[50%] w-full rounded-xl">

                        </div>
                        <h2 className="text-white text-[20px]">Name of the startup</h2>
                        <p className="text-white text-[15px]">Name of the startup</p>
                        <p className="text-white text-[15px]">Name of the startup</p>
                    </div>
                </GradientCard>
                <GradientCard bgColor="linear-gradient(180deg, rgba(60, 13, 75, 0.6) 0%, rgba(77, 15, 96, 0.6) 50%, rgba(179, 39, 140, 0.6) 100%)" className="aspect-[13/20] text-white flex items-center justify-center max-w-full h-[100px] sm:h-[400px]">
                    <div className="flex flex-col items-left justify-center w-full h-full p-8 gap-4">
                        <div className="bg-white h-[50%] w-full rounded-xl">

                        </div>
                        <h2 className="text-white text-[20px]">Name of the startup</h2>
                        <p className="text-white text-[15px]">Name of the startup</p>
                        <p className="text-white text-[15px]">Name of the startup</p>
                    </div>
                </GradientCard>
                <GradientCard bgColor="linear-gradient(180deg, rgba(60, 13, 75, 0.6) 0%, rgba(77, 15, 96, 0.6) 50%, rgba(179, 39, 140, 0.6) 100%)" className="aspect-[13/20] text-white flex items-center justify-center max-w-full h-[100px] sm:h-[460px]">
                    <div className="flex flex-col items-left justify-center w-full h-full p-8 gap-4">
                        <div className="bg-white h-[50%] w-full rounded-xl">

                        </div>
                        <h2 className="text-white text-[20px]">Name of the startup</h2>
                        <p className="text-white text-[15px]">Name of the startup</p>
                        <p className="text-white text-[15px]">Name of the startup</p>
                    </div>
                </GradientCard>
                <GradientCard bgColor="linear-gradient(180deg, rgba(60, 13, 75, 0.6) 0%, rgba(77, 15, 96, 0.6) 50%, rgba(179, 39, 140, 0.6) 100%)" className="aspect-[13/20] text-white flex items-center justify-center max-w-full h-[100px] sm:h-[400px]">
                    <div className="flex flex-col items-left justify-center w-full h-full p-8 gap-4">
                        <div className="bg-white h-[50%] w-full rounded-xl">

                        </div>
                        <h2 className="text-white text-[20px]">Name of the startup</h2>
                        <p className="text-white text-[15px]">Name of the startup</p>
                        <p className="text-white text-[15px]">Name of the startup</p>
                    </div>
                </GradientCard>
                <GradientCard bgColor="linear-gradient(180deg, rgba(60, 13, 75, 0.6) 0%, rgba(77, 15, 96, 0.6) 50%, rgba(179, 39, 140, 0.6) 100%)" className="aspect-[13/20] text-white flex items-center justify-center max-w-full h-[100px] sm:h-[400px]">
                    <div className="flex flex-col items-left justify-center w-full h-full p-8 gap-4">
                        <div className="bg-white h-[50%] w-full rounded-xl">

                        </div>
                        <h2 className="text-white text-[20px]">Name of the startup</h2>
                        <p className="text-white text-[15px]">Name of the startup</p>
                        <p className="text-white text-[15px]">Name of the startup</p>
                    </div>
                </GradientCard>
            </div>
        </div>
    );
}

export default Nftsection;