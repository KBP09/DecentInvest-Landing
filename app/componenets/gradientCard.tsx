import type React from "react"

interface GradientCardProps {
  children: React.ReactNode
  className?: string
}

export function GradientCard({ children, className = "" }: GradientCardProps) {
  return (
    <div
      className={`relative rounded-[24px] overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(76.91deg, #FFDE4D -0.16%, #C847FF 104.72%)",
        padding: "2px",
      }}
    >
      <div className="absolute inset-[2px] rounded-[22px] bg-black overflow-hidden">
        <div className="relative z-10 h-full w-full">{children}</div>
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "#1A1A1D",
          }}
        />
      </div>
    </div>
  )
}
