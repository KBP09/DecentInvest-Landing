"use client";

import { useCallback, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  id: number;
  name: string;
  title: string;
  content: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "CryptoRebel",
    title: "A twitter user",
    content:
      "Traditional banks take days to process transactions, charge insane fees, and block payments when they feel like it. Meanwhile, DeFi does it in seconds with full transparency. The choice is obvious. #Decentralization #DeFi",
    avatar: "/users.svg",
  },
  {
    id: 2,
    name: "Web3Maxi",
    title: "A twitter user",
    content:
      "Investment banks decide who gets access to capital based on their own interests. In a decentralized world, funding should be open, fair, and trustless. #DeFi #PowerToThePeople",
    avatar: "/users.svg",
  },
  {
    id: 3,
    name: "Emily Thompson",
    title: "Operations Director, Next Wave Tech",
    content:
      "Ever tried moving large amounts internationally? Investment banks will flag your transaction, hold your money for 'verification,' and charge a ridiculous fee. Crypto solves this. #Decentralization",
    avatar: "/users.svg",
  },
  {
    id: 4,
    name: "David Park",
    title: "Senior Developer, Cloud Solutions",
    content:
      "Investment banking is just a fancy way of saying 'we control the money and you don’t.' Blockchain gives us financial independence. #DeFi #CryptoRevolution",
    avatar: "/users.svg",
  },
  {
    id: 5,
    name: "Olivia Martinez",
    title: "UX Researcher, Design Innovations",
    content:
      "Why should a handful of banks decide who gets funding? Why should they take massive cuts from every transaction? Decentralized finance puts that power back in OUR hands. #DecentralizationNow",
    avatar: "/users.svg",
  },
  {
    id: 6,
    name: "Alex Johnson",
    title: "CTO, Emerging Technologies Inc.",
    content:
      "Investment banks profit from exclusivity and insider deals while everyday investors get crumbs. DeFi levels the playing field. #Blockchain #OpenFinance",
    avatar: "/users.svg",
  },
];

export default function ReviewsSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    setIsMounted(true);

    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextReview = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerView >= reviews.length ? 0 : prevIndex + cardsPerView
    );
  }, [cardsPerView]);

  const previousReview = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - cardsPerView < 0 ? reviews.length - cardsPerView : prevIndex - cardsPerView
    );
  }, [cardsPerView]);

  const totalGroups = Math.ceil(reviews.length / cardsPerView);

  if (!isMounted) return null; 

  return (
    <section
      className="relative bg-[#4A1D4A] py-16 px-4 md:py-24"
      style={{
        background: "linear-gradient(360deg, #652774 9.44%,#000000 91.16%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What people are saying
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">Our users reviews</p>
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex / reviews.length) * 100}%)`,
              width: `${(reviews.length / cardsPerView) * 100}%`,
            }}
          >
            {reviews.map((review) => (
              <div key={review.id} className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div
                  className="p-6 rounded-3xl border border-[#B98D3C] h-full"
                  style={{
                    background:
                      "linear-gradient(100.69deg, rgba(217, 217, 217, 0.3) 10.51%, rgba(179, 39, 140, 0.3) 74.05%)",
                  }}
                >
                  <div className="flex items-center mb-4">
                    <div className="relative h-16 w-16 rounded-full overflow-hidden">
                      <Image
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-white font-semibold text-lg">{review.name}</h3>
                      <p className="text-gray-300 text-sm">{review.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{review.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
          <button
            onClick={previousReview}
            className="bg-white/20 hover:bg-white/30 p-1 rounded-full text-white transition-colors w-8 h-8 flex items-center justify-center"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextReview}
            className="bg-white/20 hover:bg-white/30 p-1 rounded-full text-white transition-colors w-8 h-8 flex items-center justify-center"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalGroups }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${Math.floor(currentIndex / cardsPerView) === index ? "bg-[#B98D3C]" : "bg-gray-400"
                }`}
              onClick={() => setCurrentIndex(index * cardsPerView)}
              aria-label={`Go to review group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
