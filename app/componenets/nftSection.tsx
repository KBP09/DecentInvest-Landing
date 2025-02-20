"use client"

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GradientCard } from "./gradientCard";
import { motion, AnimatePresence } from "framer-motion";

const investors = [
    { id: 1, name: "DecentInvest", description: "Decentralized Investment Bank", image: "/logo.svg" },
    { id: 2, name: "Threaded Tales", description: "Tokenize your stories", image: "/threadedtales.svg" },
    { id: 3, name: "DecentInvest", description: "Decentralized Investment Bank", image: "/logo.svg" },
    { id: 4, name: "Zenith", description: "Track your online activity", image: "/zenith.png" },
    { id: 5, name: "HealthX360", description: "All in one medical platform", image: "/health.png" },
];

interface NftSectionProps {
    background: string;
}

export default function NftSection({ background }: NftSectionProps) {
    const [activeIndex, setActiveIndex] = useState(2);
    const containerRef = useRef<HTMLDivElement>(null);

    const handlePrevious = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : investors.length - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev < investors.length - 1 ? prev + 1 : 0));
    };

    return (
        <div className="h-auto min-h-[70vh] w-full sm:py-20 overflow-hidden" style={{ background }}>
            <div className="container mx-auto px-4">
                <div className="relative" ref={containerRef}>
                    <div className="flex items-center justify-center gap-4 overflow-hidden py-56">
                        <AnimatePresence initial={false}>
                            {investors.map((investor, index) => {
                                const isActive = index === activeIndex;
                                const offset = index - activeIndex;

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
                                            className={`transition-all duration-300 ${isActive ? "w-[220px] h-[380px] sm:w-[250px] sm:h-[400px]" : "w-[230px] h-[380px] sm:w-[250px] sm:h-[400px] opacity-60"}`}
                                            bgColor="linear-gradient(180deg, rgba(60, 13, 75, 0.6) 0%, rgba(77, 15, 96, 0.6) 50%, rgba(179, 39, 140, 0.6) 100%)"
                                        >
                                            <div className="p-6 flex flex-col h-full">
                                                <div
                                                    className="w-full aspect-square rounded-lg mb-4 bg-cover bg-center"
                                                    style={{ backgroundImage: `url(${investor.image})` }}
                                                />
                                                <h3 className="text-white text-xl font-semibold mb-2">{investor.name}</h3>
                                                <p className="text-gray-400">{investor.description}</p>
                                            </div>
                                        </GradientCard>

                                    </motion.div>
                                );
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
    );
}