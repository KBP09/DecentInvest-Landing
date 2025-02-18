"use client"

import { useCallback, useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Review {
  id: number
  name: string
  title: string
  content: string
  avatar: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "Product Manager, Innovation Labs",
    content:
      "The attention to detail and user experience is outstanding. This product has transformed how our team collaborates and delivers results.",
    avatar: "/kbp.jpg",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Technical Lead, Future Systems",
    content:
      "Implementation was seamless, and the support team has been exceptional. This solution has exceeded our expectations in every way.",
    avatar: "/kbp.jpg",
  },
  {
    id: 3,
    name: "Emily Thompson",
    title: "Operations Director, Next Wave Tech",
    content:
      "A game-changer for our organization. The platform's capabilities have significantly improved our workflow efficiency.",
    avatar: "/kbp.jpg",
  },
  {
    id: 4,
    name: "David Park",
    title: "Senior Developer, Cloud Solutions",
    content:
      "The scalability and reliability of this system are impressive. It's been crucial in helping us meet our growing demands.",
    avatar: "/kbp.jpg",
  },
  {
    id: 5,
    name: "Olivia Martinez",
    title: "UX Researcher, Design Innovations",
    content:
      "The intuitive interface and robust features have significantly enhanced our team's productivity. It's a pleasure to work with.",
    avatar: "/kbp.jpg",
  },
  {
    id: 6,
    name: "Alex Johnson",
    title: "CTO, Emerging Technologies Inc.",
    content:
      "This solution has been instrumental in our digital transformation journey. The ROI has been substantial and immediate.",
    avatar: "/kbp.jpg",
  },
]

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerView(3)
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2)
      } else {
        setCardsPerView(1)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextReview = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerView >= reviews.length ? 0 : prevIndex + cardsPerView
    )
  }, [cardsPerView])

  const previousReview = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - cardsPerView < 0 ? reviews.length - cardsPerView : prevIndex - cardsPerView
    )
  }, [cardsPerView])

  const totalGroups = Math.ceil(reviews.length / cardsPerView)

  return (
    <section
      className="relative bg-[#4A1D4A] py-16 px-4 md:py-24"
      style={{
        background: "linear-gradient(360deg, #652774 9.44%,#000000 91.16%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
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
              className={`w-3 h-3 rounded-full transition-colors ${Math.floor(currentIndex / cardsPerView) === index ? "bg-[#B98D3C]" : "bg-gray-400"
                }`}
              onClick={() => setCurrentIndex(index * cardsPerView)}
              aria-label={`Go to review group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
