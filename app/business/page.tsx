'use client'
import React from "react";
import { GradientCard } from "../componenets/gradientCard";
import BusinessCards from "../componenets/businessCards";
import Image from "next/image";

const Page = () => {
    const handleClick = () => {
        window.open("https://calendly.com/your-link", "_blank");
    };

    return (
        <>
            <div className="mb-32 pt-32 flex justify-center">
                <GradientCard className="aspect-[100/14] flex justify-center items-center max-w-[85%] h-[300px]">
                    <div className="flex justify-center items-center h-full">
                        <h1 className="text-white text-[30px] md:text-[40px] font-bold leading-tight text-center">
                            Our exclusive enterprise features for your business need
                        </h1>
                    </div>
                </GradientCard>
            </div>
            <BusinessCards />
            <div className="mb-32 pt-32 flex justify-center">
                <GradientCard
                    className="aspect-[100/14] flex justify-center items-center max-w-[85%]  h-[300px] cursor-pointer"
                >
                    <div className="flex justify-center items-center h-full p-4" onClick={handleClick}>
                        <div className="flex flex-col">
                            <h2 className="text-white text-[20px] md:text-[30px] font-bold leading-tight">
                                Want to know more about us?
                            </h2>
                            <h2 className="text-white text-[20px] md:text-[45px] font-bold leading-tight">
                                Book a meeting with us on Calendly
                            </h2>
                        </div>
                        <Image
                            src="/calender.svg"
                            alt="Marketplace illustration"
                            width={500}
                            height={500}
                            className="w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px]"
                        />
                    </div>
                </GradientCard>
            </div>
        </>
    )
}

export default Page;