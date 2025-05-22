"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface MagicalCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  hoverScale?: number
}

export function MagicalCard({
  children,
  className,
  glowColor = "rgba(var(--primary), 0.2)",
  hoverScale = 1.02,
}: MagicalCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: hoverScale }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow effect that follows cursor */}
      <motion.div
        className="absolute -inset-px rounded-lg opacity-0 group-hover:opacity-100 z-0 blur-md"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 70%)`,
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Border glow */}
      <motion.div
        className="absolute -inset-0.5 rounded-lg opacity-0 group-hover:opacity-100 z-0"
        style={{
          background: `linear-gradient(90deg, rgba(var(--primary), 0.3), rgba(var(--secondary), 0.3), rgba(var(--accent), 0.3))`,
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Actual card with glass effect */}
      <Card
        className={cn(
          "relative border border-border/50 bg-background/80 backdrop-blur-sm z-10 overflow-hidden",
          isHovered && "shadow-lg border-transparent",
        )}
      >
        {children}
      </Card>
    </motion.div>
  )
}

export { CardHeader, CardContent, CardFooter }
