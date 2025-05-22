"use client"

import type React from "react"

import { forwardRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedHoverLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
  className?: string
  effect?: "underline" | "highlight" | "scale" | "shift" | "glow" | "none"
  isActive?: boolean
}

const AnimatedHoverLink = forwardRef<HTMLAnchorElement, AnimatedHoverLinkProps>(
  ({ href, children, className, effect = "underline", isActive = false, ...props }, ref) => {
    const getHoverAnimation = () => {
      switch (effect) {
        case "scale":
          return { scale: 1.05, transition: { duration: 0.2 } }
        case "shift":
          return { x: 3, transition: { duration: 0.2 } }
        case "none":
          return {}
        default:
          return {}
      }
    }

    return (
      <motion.div
        className={cn(
          "relative inline-block",
          effect === "highlight" && "group",
          effect === "glow" && "hover-glow-text",
        )}
        whileHover={getHoverAnimation()}
      >
        <Link
          href={href}
          ref={ref}
          className={cn(
            "relative inline-block transition-colors duration-200",
            isActive ? "text-primary font-medium" : "text-muted-foreground",
            "hover:text-primary",
            className,
          )}
          {...props}
        >
          {children}

          {/* Underline effect */}
          {effect === "underline" && (
            <motion.span
              className={cn("absolute bottom-0 left-0 h-0.5 bg-primary", isActive ? "w-full" : "w-0")}
              initial={{ width: isActive ? "100%" : "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.2 }}
            />
          )}

          {/* Highlight effect */}
          {effect === "highlight" && (
            <motion.span
              className="absolute inset-0 -z-10 bg-primary/10 rounded opacity-0 group-hover:opacity-100"
              initial={{ opacity: 0, scale: 0.9 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </Link>
      </motion.div>
    )
  },
)

AnimatedHoverLink.displayName = "AnimatedHoverLink"

export { AnimatedHoverLink }
