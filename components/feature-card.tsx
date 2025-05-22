"use client"

import type { ReactNode } from "react"
import { AnimatedHoverCard, CardContent } from "@/components/ui/animated-hover-card"
import { AnimatedHoverImage } from "@/components/ui/animated-hover-image"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  image: string
}

export default function FeatureCard({ icon, title, description, image }: FeatureCardProps) {
  return (
    <AnimatedHoverCard effect="lift" className="h-full">
      <div className="relative h-40 w-full">
        <AnimatedHoverImage src={image || "/placeholder.svg"} alt={title} fill effect="zoom" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>
      <CardContent className="p-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-4 bg-primary/10 p-3 rounded-full inline-block"
          whileHover={{ rotate: 10, scale: 1.1 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </AnimatedHoverCard>
  )
}
