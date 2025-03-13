"use client"

import { GradientCard } from "./gradientCard"
import Image from "next/image"
import Link from "next/link"

const investors = [
    { id: 1, name: "Anushka Gupta", description: "DecentInvest", AmountInvested: "1000$", image: "/akg.jpg",link:"/anushkagupta" },
    { id: 2, name: "Kanak B Pandey", description: "DecentInvest", AmountInvested: "1000$", image: "/kbp.jpg",link:"/kanakbpandey"},
]

export default function InvestorSection() {
    return (
        <div className="h-auto min-h-[70vh] w-full py-20 bg-black bg-[url('../public/BG1.svg')] bg-cover bg-center">
            <div className="container mx-auto px-4">
                <h1 className="text-white text-[32px] sm:text-[40px] md:text-[45px] text-center">
                    Top Investors
                </h1>
                <div className="flex sm:flex-row flex-col items-center w-full justify-center gap-8 mt-8">
                    {investors.map((investor) => (
                        <Link key={investor.id} href={investor.link} passHref>
                            <GradientCard className="w-[250px] h-[350px] sm:w-[270px] sm:h-[370px] flex flex-col items-center justify-center gap-4 cursor-pointer transition-transform transform hover:scale-105" bgColor="rgba(37, 29, 39, 1)">
                                <div className="w-full h-full flex flex-col items-center justify-center gap-4 relative bg-[#1A1A1A] rounded-2xl p-4 shadow-lg">
                                    <div
                                        className="absolute top-8 left-1/2 w-full h-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                                        style={{
                                            background: "linear-gradient(180deg, #3C0D4B 0%, #4D0F60 50%, #B3278C 100%)",
                                            zIndex: 1
                                        }}
                                    ></div>

                                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-yellow-400 relative z-10">
                                        <Image
                                            src={investor.image}
                                            alt={investor.name}
                                            fill
                                            sizes="(max-width: 640px) 300px, (max-width: 1024px) 350px, 300px"
                                            style={{ objectFit: "cover", objectPosition: "center" }}
                                            className="rounded-full"
                                        />
                                    </div>

                                    <h2 className="text-white text-lg sm:text-xl font-bold text-center">{investor.name}</h2>
                                    <p className="text-gray-300 text-sm sm:text-lg">{investor.description}</p>
                                </div>
                            </GradientCard>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )  
}
