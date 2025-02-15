"use client"

import { useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { GradientCard } from "./gradientCard"
import { motion, AnimatePresence } from "framer-motion"

const investors = [
    { id: 1, name: "Startup One", description: "Innovation in Tech" },
    { id: 2, name: "Startup Two", description: "Future of Finance" },
    { id: 3, name: "Startup Three", description: "Healthcare Solutions" },
    { id: 4, name: "Startup Four", description: "Green Energy" },
    { id: 5, name: "Startup Five", description: "AI Revolution" },
]

export default function NftSection() {
    const [activeIndex, setActiveIndex] = useState(2)
    const containerRef = useRef<HTMLDivElement>(null)

    const handlePrevious = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : investors.length - 1))
    }

    const handleNext = () => {
        setActiveIndex((prev) => (prev < investors.length - 1 ? prev + 1 : 0))
    }

    return (
        <div className="h-auto min-h-[80vh] w-full py-20"
            style={{ background: "linear-gradient(94.03deg, #652774 9.44%, #17081B 91.16%)" }}
        >
            <div className="container mx-auto px-4">
                <h1 className="text-white text-[32px] sm:text-[40px] md:text-[50px] text-center">
                    Trending Nfts
                </h1>
                <p className="text-[#E7E7E7] md:text-[20px] text-center mb-6">Discover the trending NFTs of the Startups</p>
                <div className="relative" ref={containerRef}>
                    <div className="flex items-center justify-center gap-4 overflow-hidden py-56">
                        <AnimatePresence initial={false}>
                            {investors.map((investor, index) => {
                                const isActive = index === activeIndex
                                const offset = index - activeIndex

                                return (
                                    <motion.div
                                        key={investor.id}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{
                                            scale: isActive ? 1 : 0.8,
                                            opacity: Math.abs(offset) <= 2 ? 1 : 0,
                                            x: offset * 280,
                                            zIndex: isActive ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute"
                                    >
                                        <GradientCard
                                            className={`transition-all duration-300 ${isActive ? "w-[250px] h-[400px]" : "w-[250px] h-[400px] opacity-60"
                                                }`}
                                            bgColor="linear-gradient(180deg, rgba(60, 13, 75, 0.6) 0%, rgba(77, 15, 96, 0.6) 50%, rgba(179, 39, 140, 0.6) 100%)"
                                        >
                                            <div className="p-6 flex flex-col h-full">
                                                <div className="w-full aspect-square bg-white to-transparent rounded-lg mb-4" />
                                                <h3 className="text-white text-xl font-semibold mb-2">{investor.name}</h3>
                                                <p className="text-gray-400">{investor.description}</p>
                                            </div>
                                        </GradientCard>
                                    </motion.div>
                                )
                            })}
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={handlePrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-colors"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    )
}

