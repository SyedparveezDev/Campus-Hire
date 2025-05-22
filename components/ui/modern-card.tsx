"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ModernCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
  glowColor?: string
  depth?: "none" | "sm" | "md" | "lg"
}

export function ModernCard({
  children,
  className,
  hoverEffect = true,
  glowColor = "rgba(var(--primary), 0.15)",
  depth = "md",
}: ModernCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !hoverEffect) return

    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const depthClasses = {
    none: "",
    sm: "shadow-sm hover:shadow-md",
    md: "shadow-md hover:shadow-lg",
    lg: "shadow-lg hover:shadow-xl",
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={hoverEffect ? { y: -5 } : undefined}
    >
      {/* Glow effect that follows cursor */}
      {hoverEffect && (
        <motion.div
          className="absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 z-0 blur-xl"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 70%)`,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Border glow */}
      {hoverEffect && (
        <motion.div
          className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100 z-0"
          style={{
            background: `linear-gradient(90deg, rgba(var(--primary), 0.2), rgba(var(--secondary), 0.2), rgba(var(--accent), 0.2))`,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Actual card with glass effect */}
      <Card
        className={cn(
          "relative border border-border/50 bg-background/80 backdrop-blur-sm z-10 overflow-hidden transition-all duration-300",
          isHovered && "border-transparent",
          depthClasses[depth],
        )}
      >
        {children}
      </Card>
    </motion.div>
  )
}

export { CardHeader, CardContent, CardFooter }
