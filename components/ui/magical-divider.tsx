"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface MagicalDividerProps {
  className?: string
  width?: string
  color?: string
}

export function MagicalDivider({
  className,
  width = "100%",
  color = "linear-gradient(90deg, transparent, rgba(var(--primary), 0.5), rgba(var(--secondary), 0.5), rgba(var(--accent), 0.5), transparent)",
}: MagicalDividerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className={cn("w-full h-px my-8", className)}
      style={{
        width,
        background: color,
        marginLeft: "auto",
        marginRight: "auto",
      }}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={isInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    />
  )
}
