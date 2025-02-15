"use client"

import { GradientCard } from "./gradientCard"
import Image from "next/image"

const investors = [
    { id: 1, name: "Anushka Gupta", description: "DecentInvest", AmountInvested: "1000$", image: "/akg.jpg" },
    { id: 2, name: "Kanak B Pandey", description: "DecentInvest", AmountInvested: "1000$", image: "/kbp.jpg"},
]

export default function InvestorSection() {

    return (
        <div className="h-auto min-h-[80vh] w-full py-20 bg-black bg-[url('../public/BG1.svg')] bg-cover bg-center">
            <div className="container mx-auto px-4">
                <h1 className="text-white text-[32px] sm:text-[40px] md:text-[50px] text-center">
                    Top Investors
                </h1>
                <div className="flex sm:flex-row flex-col items-center w-full justify-center gap-8 mt-8">
                    {investors.map((investor) => (
                        <GradientCard key={investor.id} className="w-[300px] h-[400px] flex flex-col items-center justify-center gap-4" bgColor="rgba(37, 29, 39, 1)">
                            <div className="w-full h-full flex flex-col items-center justify-center gap-4 relative bg-[#1A1A1A] rounded-2xl p-4 shadow-lg">
                                <div
                                    className="absolute top-8 left-1/2 w-full h-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full"
                                    style={{
                                        background: "linear-gradient(180deg, #3C0D4B 0%, #4D0F60 50%, #B3278C 100%)",
                                        zIndex: 1
                                    }}
                                ></div>

                                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-yellow-400 relative z-10">
                                    <Image
                                        src={investor.image}
                                        alt={investor.name}
                                        objectFit="cover"
                                        layout="fill"
                                        className="rounded-full"
                                    />
                                </div>

                                <h2 className="text-white text-xl font-bold text-center">{investor.name}</h2>
                                <p className="text-gray-300 text-lg">{investor.description}</p>
                                <p className="text-gray-400 text-lg font-semibold">Amount Invested: {investor.AmountInvested}</p>
                            </div>

                        </GradientCard>
                    ))}
                </div>
            </div>
        </div>
    )
}
