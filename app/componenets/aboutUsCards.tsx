'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface CardData {
    id: number
    title: string
    imageSrc: string
    imageAlt: string
    imageWidth: number
    imageHeight: number
    imageClassName: string
    expandedContent: string
}

const cardData: CardData[] = [
    {
        id: 1,
        title: "Marketplace for startups and investors",
        imageSrc: "/Bitcoin.svg",
        imageAlt: "Marketplace illustration",
        imageWidth: 220,
        imageHeight: 220,
        imageClassName: "",
        expandedContent: "Our marketplace brings together innovative startups and visionary investors, creating a dynamic ecosystem for growth and collaboration. Discover unique opportunities and forge powerful partnerships that drive success in the startup world."
    },
    {
        id: 2,
        title: "Connecting startups with investors seamlessly",
        imageSrc: "/startups.svg",
        imageAlt: "Startups illustration",
        imageWidth: 200,
        imageHeight: 200,
        imageClassName: "w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[220px] lg:h-[220px]",
        expandedContent: "We've created a centralized hub where startups and investors can easily find each other. This streamlined approach saves time and resources, allowing for more efficient connections and collaborations in the entrepreneurial ecosystem."
    },
    {
        id: 3,
        title: "NFT for your startups",
        imageSrc: "/nfts.svg",
        imageAlt: "NFT illustration",
        imageWidth: 280,
        imageHeight: 280,
        imageClassName: "w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px]",
        expandedContent: "Leverage the power of NFTs to tokenize your startup's assets, intellectual property, or even equity. This innovative approach opens up new avenues for funding, engagement, and value creation in the digital age."
    },
    {
        id: 4,
        title: "Tailored matches for startups and investors",
        imageSrc: "/people.svg",
        imageAlt: "Customised search illustration",
        imageWidth: 200,
        imageHeight: 200,
        imageClassName: "w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] lg:w-[250px] lg:h-[250px]",
        expandedContent: "Our advanced matching algorithm ensures that you find the perfect fit, whether you're a startup seeking specific expertise or an investor looking for opportunities in niche markets. Tailored connections lead to stronger partnerships and better outcomes."
    },
    {
        id: 5,
        title: "Easy transactions",
        imageSrc: "/transactions.svg",
        imageAlt: "Transactions illustration",
        imageWidth: 280,
        imageHeight: 280,
        imageClassName: "w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px]",
        expandedContent: "We've simplified the investment process with our secure and user-friendly transaction system. From initial interest to final agreement, our platform facilitates smooth, transparent, and efficient financial interactions between startups and investors."
    },
    {
        id: 6,
        title: "Grants and investments",
        imageSrc: "/grants.svg",
        imageAlt: "Grants illustration",
        imageWidth: 280,
        imageHeight: 280,
        imageClassName: "w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] lg:w-[260px] lg:h-[260px]",
        expandedContent: "Access a wide range of funding options, from traditional investments to grants and alternative financing methods. Our platform aggregates diverse opportunities, helping startups find the right financial support to fuel their growth and innovation."
    }
]

const ExpandableCard: React.FC<{ card: CardData; isExpanded: boolean; onClick: () => void }> = ({ card, isExpanded, onClick }) => {
    return (
        <motion.div
            layout
            onClick={onClick}
            className={`relative w-full max-w-[550px] rounded-[24px] sm:rounded-[48px] overflow-hidden flex flex-col items-center cursor-pointer ${isExpanded ? 'aspect-[3/4] sm:aspect-auto md:aspect-[14/19] col-span-full' : 'aspect-[3/4] sm:aspect-[14/9]'
                }`}
            style={{
                background: 'linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)',
                padding: '2px',
            }}
        >
            <motion.div layout className="absolute inset-[2px] rounded-[22px] sm:rounded-[46px] bg-black overflow-hidden">
                <motion.div layout className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center p-4 sm:px-6">
                    <motion.h2 layout className="text-white text-[18px] sm:text-[22px] md:text-[min(3vw,30px)] font-bold leading-tight mt-2 sm:mt-8">
                        {card.title}
                    </motion.h2>
                    <motion.div layout className="my-2 sm:my-4">
                        <Image
                            src={card.imageSrc}
                            alt={card.imageAlt}
                            width={card.imageWidth}
                            height={card.imageHeight}
                            className={card.imageClassName}
                        />
                    </motion.div>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                        >
                            <p className="text-white text-sm sm:text-base md:text-lg mt-2 sm:mt-4 mb-4 sm:mb-8 px-2 sm:px-4">
                                {card.expandedContent}
                            </p>
                        </motion.div>
                    )}
                </motion.div>
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: 'radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.15), transparent 50%), radial-gradient(circle at 70% 30%, rgba(234, 179, 8, 0.15), transparent 50%)',
                        filter: 'blur(40px)',
                    }}
                />
            </motion.div>
        </motion.div>
    )
}

const ExpandableCards: React.FC = () => {
    const [expandedId, setExpandedId] = useState<number | null>(null)

    const handleCardClick = (id: number) => {
        setExpandedId(expandedId === id ? null : id)
    }

    return (
        <div className="min-h-screen bg-black bg-[url('../public/BG1.svg')] bg-cover bg-center p-6 md:p-8 flex items-center justify-center flex-col overflow-hidden">
            <h1 className="text-white text-[50px] sm:text-[70px] mt-16 text-center mb-8">About Us</h1>
            <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <AnimatePresence>
                    {cardData.map((card) => (
                        <ExpandableCard
                            key={card.id}
                            card={card}
                            isExpanded={expandedId === card.id}
                            onClick={() => handleCardClick(card.id)}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default ExpandableCards

