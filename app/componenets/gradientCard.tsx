import React, { forwardRef } from "react";

interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}

// Using forwardRef to allow parent components to pass a ref
export const GradientCard = forwardRef<HTMLDivElement, GradientCardProps>(
  ({ children, className = "", bgColor = "#363636" }, ref) => {
    return (
      <div
        ref={ref} // Now accepts ref
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
              background: bgColor,
            }}
          />
        </div>
      </div>
    );
  }
);

GradientCard.displayName = "GradientCard"; // Required for debugging in React DevTools
