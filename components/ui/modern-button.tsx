"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ModernButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "default" | "outline" | "ghost" | "link" | "gradient" | "glow"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  glowColor?: string
  withSparkles?: boolean
  asChild?: boolean
}

export function ModernButton({
  children,
  variant = "default",
  size = "default",
  className,
  glowColor = "rgba(var(--primary), 0.5)",
  withSparkles = false,
  asChild = false,
  ...props
}: ModernButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const isGradient = variant === "gradient"
  const isGlow = variant === "glow"
  const buttonVariant = isGradient || isGlow ? "default" : variant

  return (
    <motion.div className="relative inline-block" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      {/* Glow effect */}
      {isGlow && (
        <motion.div
          className="absolute inset-0 rounded-md blur-md -z-10"
          style={{ backgroundColor: glowColor }}
          animate={{
            opacity: isHovered ? 0.7 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
      )}

      <Button
        variant={buttonVariant}
        size={size}
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          isGradient && "bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground hover:shadow-md",
          className,
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        asChild={asChild}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {/* Background animation */}
            {isGradient && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20"
                animate={{
                  x: isHovered ? ["0%", "100%"] : "0%",
                }}
                transition={{
                  duration: 1.5,
                  repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                  repeatType: "reverse",
                }}
              />
            )}

            {/* Sparkles */}
            {withSparkles && isHovered && (
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
          </>
        )}
      </Button>
    </motion.div>
  )
}
