"use client"

import type React from "react"

import { forwardRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface AnimatedHoverCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  effect?: "lift" | "tilt" | "border" | "glow" | "scale" | "none"
}

const AnimatedHoverCard = forwardRef<HTMLDivElement, AnimatedHoverCardProps>(
  ({ children, className, effect = "lift", ...props }, ref) => {
    const getHoverAnimation = () => {
      switch (effect) {
        case "lift":
          return { y: -8, transition: { duration: 0.2 } }
        case "tilt":
          return { rotateX: 5, rotateY: 5, transition: { duration: 0.2 } }
        case "scale":
          return { scale: 1.02, transition: { duration: 0.2 } }
        case "none":
          return {}
        default:
          return { y: -5 }
      }
    }

    return (
      <motion.div
        ref={ref}
        className={cn("relative", effect === "border" && "group", effect === "glow" && "hover-glow-card", className)}
        whileHover={getHoverAnimation()}
        {...props}
      >
        {effect === "border" && (
          <motion.div
            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            style={{
              background:
                "linear-gradient(90deg, rgba(var(--primary), 0.3), rgba(var(--secondary), 0.3), rgba(var(--accent), 0.3))",
            }}
          />
        )}
        <Card
          className={cn(
            "h-full transition-all duration-300",
            effect === "glow" && "hover:shadow-[0_0_15px_rgba(var(--primary),0.3)]",
            effect !== "none" && "hover:border-primary/30",
          )}
        >
          {children}
        </Card>
      </motion.div>
    )
  },
)

AnimatedHoverCard.displayName = "AnimatedHoverCard"

export { AnimatedHoverCard, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
