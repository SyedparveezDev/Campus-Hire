"use client"

import type React from "react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface SimpleCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

export function SimpleCard({ children, className, hoverEffect = true }: SimpleCardProps) {
  return (
    <motion.div
      className={cn("relative", className)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : undefined}
    >
      <Card className="border border-border/50 bg-background/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-md">
        {children}
      </Card>
    </motion.div>
  )
}

export { CardHeader, CardContent, CardFooter }
