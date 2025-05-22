"use client"

import type React from "react"

import { forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Link from "next/link"

interface AnimatedHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "gradient"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  asChild?: boolean
  href?: string
  effect?: "bounce" | "shine" | "pulse" | "glow" | "slide"
}

const AnimatedHoverButton = forwardRef<HTMLButtonElement, AnimatedHoverButtonProps>(
  (
    { children, variant = "default", size = "default", className, asChild = false, href, effect = "bounce", ...props },
    ref,
  ) => {
    const isGradient = variant === "gradient"
    const buttonVariant = isGradient ? "default" : variant

    const ButtonWrapper = ({ children }: { children: React.ReactNode }) => {
      if (href) {
        return <Link href={href}>{children}</Link>
      }
      return <>{children}</>
    }

    const getHoverAnimation = () => {
      switch (effect) {
        case "bounce":
          return {
            scale: 1.05,
            transition: { type: "spring", stiffness: 400, damping: 10 },
          }
        case "shine":
          return {} // Shine effect is handled with CSS
        case "pulse":
          return {
            scale: [1, 1.05, 1],
            transition: { duration: 0.4 },
          }
        case "glow":
          return {} // Glow effect is handled with CSS
        case "slide":
          return {} // Slide effect is handled with CSS
        default:
          return { scale: 1.05 }
      }
    }

    return (
      <ButtonWrapper>
        <motion.div
          className={cn(
            "relative overflow-hidden",
            effect === "shine" && "group",
            effect === "glow" && "hover-glow",
            effect === "slide" && "hover-slide",
          )}
          whileHover={getHoverAnimation()}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            ref={ref}
            variant={buttonVariant}
            size={size}
            className={cn(
              "relative overflow-hidden transition-all duration-300",
              isGradient && "bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground",
              effect === "shine" && "group-hover:shine-effect",
              className,
            )}
            asChild={asChild}
            {...props}
          >
            {asChild ? (
              children
            ) : (
              <motion.span
                className="relative z-10 flex items-center justify-center"
                initial={{ y: 0 }}
                whileHover={{ y: effect === "slide" ? 0 : -2 }}
                transition={{ duration: 0.2 }}
              >
                {children}
              </motion.span>
            )}
          </Button>

          {/* Shine effect overlay */}
          {effect === "shine" && (
            <motion.div
              className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 group-hover:shine-animation"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            />
          )}

          {/* Slide effect */}
          {effect === "slide" && (
            <motion.div
              className="absolute inset-0 w-full h-full bg-primary/10 -z-10"
              initial={{ y: "100%" }}
              whileHover={{ y: "0%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          )}
        </motion.div>
      </ButtonWrapper>
    )
  },
)

AnimatedHoverButton.displayName = "AnimatedHoverButton"

export { AnimatedHoverButton }
