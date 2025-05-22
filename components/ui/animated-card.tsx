"use client"

import type React from "react"

import { forwardRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  hoverEffect?: "lift" | "glow" | "border" | "none"
}

const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ children, className, hoverEffect = "lift", ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={
          hoverEffect === "lift"
            ? { y: -5, transition: { duration: 0.2 } }
            : hoverEffect === "glow"
              ? { boxShadow: "0 0 15px rgba(var(--primary), 0.3)" }
              : undefined
        }
        className={cn("relative", hoverEffect === "border" && "group", className)}
        {...props}
      >
        {hoverEffect === "border" && (
          <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-primary/50" />
        )}
        <Card className={cn("h-full transition-all duration-300", hoverEffect !== "none" && "hover:border-primary/30")}>
          {children}
        </Card>
      </motion.div>
    )
  },
)

AnimatedCard.displayName = "AnimatedCard"

export { AnimatedCard, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
