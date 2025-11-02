"use client";

import Marquee from "react-fast-marquee";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  speed?: number;
  pauseOnHover?: boolean;
  gradient?: boolean;
  gradientColor?: string;
  gradientWidth?: string;
  className?: string;
}

export default function MarqueeComponent({
  children,
  direction = "left",
  speed = 50,
  pauseOnHover = true,
  gradient = true,
  gradientColor = "#ffffff",
  gradientWidth = "5%",
  className = "",
}: MarqueeProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Marquee
        direction={direction}
        speed={speed}
        pauseOnHover={pauseOnHover}
        gradient={gradient}
        gradientColor={gradientColor}
        gradientWidth={gradientWidth}
      >
        {children}
      </Marquee>
    </div>
  );
}

