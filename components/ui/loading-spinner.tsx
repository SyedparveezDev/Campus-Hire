"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl"
  color?: "primary" | "secondary" | "accent" | "white" | "muted"
  className?: string
  thickness?: number
}

export function LoadingSpinner({ size = "md", color = "primary", className, thickness = 2 }: LoadingSpinnerProps) {
  const sizeMap = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
  }

  const colorMap = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    white: "text-white",
    muted: "text-muted-foreground",
  }

  return (
    <div className={cn("relative", sizeMap[size], className)} aria-label="Loading">
      <motion.div
        className={cn("absolute inset-0 rounded-full border-t-transparent", colorMap[color])}
        style={{ borderWidth: thickness }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}
