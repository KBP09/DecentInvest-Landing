import type React from "react"

interface ProfileCardProps {
  children: React.ReactNode
  className?: string
}

export function ProfileCard({ children, className = "" }: ProfileCardProps) {
  return (
    <div
      className={`relative rounded-[24px] overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(76.91deg, #C847FF -0.16%, #FFFFFF 104.72%)",
        padding: "2px",
      }}
    >
      <div className="absolute inset-[2px] rounded-[22px] bg-black overflow-hidden">
        <div className="relative z-10 h-full w-full">{children}</div>
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "#363636",
          }}
        />
      </div>
    </div>
  )
}