"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MagicalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "default" | "outline" | "ghost" | "magical"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  sparkles?: boolean
}

export function MagicalButton({
  children,
  variant = "magical",
  size = "default",
  className,
  sparkles = true,
  ...props
}: MagicalButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative group">
      <Button
        variant={variant === "magical" ? "default" : variant}
        size={size}
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          variant === "magical" &&
            "bg-gradient-to-r from-primary via-accent to-secondary text-white hover:shadow-[0_0_20px_rgba(var(--primary),0.5)]",
          className,
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-md opacity-0"
          animate={{
            opacity: isHovered ? 0.8 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Sparkles */}
        {sparkles && isHovered && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-white"
                initial={{
                  opacity: 1,
                  scale: 0,
                  x: "50%",
                  y: "50%",
                }}
                animate={{
                  opacity: 0,
                  scale: 2,
                  x: `${50 + (Math.random() * 60 - 30)}%`,
                  y: `${50 + (Math.random() * 60 - 30)}%`,
                }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                }}
              />
            ))}
          </>
        )}

        {/* Button content with subtle hover animation */}
        <motion.div
          animate={{
            y: isHovered ? -2 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="relative z-10"
        >
          {children}
        </motion.div>
      </Button>
    </div>
  )
}
