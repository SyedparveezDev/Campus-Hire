"use client"

import type React from "react"

import { forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "gradient"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  asChild?: boolean
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, variant = "default", size = "default", className, asChild = false, ...props }, ref) => {
    const isGradient = variant === "gradient"
    const buttonVariant = isGradient ? "default" : variant

    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative">
        <Button
          ref={ref}
          variant={buttonVariant}
          size={size}
          className={cn(
            "relative overflow-hidden transition-all duration-300",
            isGradient &&
              "bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground hover:shadow-md",
            className,
          )}
          asChild={asChild}
          {...props}
        >
          {asChild ? (
            children
          ) : (
            <motion.span initial={{ y: 0 }} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              {children}
            </motion.span>
          )}
        </Button>
      </motion.div>
    )
  },
)

AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton }
