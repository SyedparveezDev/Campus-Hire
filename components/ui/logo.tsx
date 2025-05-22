"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  className?: string
  showText?: boolean
}

export function Logo({ size = "md", className, showText = true }: LogoProps) {
  const sizes = {
    sm: {
      container: "h-7 w-7",
      text: "text-lg",
      spacing: "gap-1.5",
    },
    md: {
      container: "h-9 w-9",
      text: "text-xl",
      spacing: "gap-2",
    },
    lg: {
      container: "h-12 w-12",
      text: "text-2xl",
      spacing: "gap-3",
    },
  }

  return (
    <Link href="/" className={cn("flex items-center", sizes[size].spacing, className)}>
      <div className="relative">
        <div
          className={cn(
            "rounded-lg bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center",
            sizes[size].container,
          )}
        >
          <svg
            viewBox="0 0 24 24"
            className={cn("w-2/3 h-2/3 text-white")}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-secondary" />
      </div>
      {showText && <span className={cn("font-bold tracking-tight", sizes[size].text)}>CampusHire</span>}
    </Link>
  )
}
