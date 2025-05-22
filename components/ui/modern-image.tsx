"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ModernImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  containerClassName?: string
  priority?: boolean
  effect?: "zoom" | "tilt" | "shine" | "none"
  fill?: boolean
}

export function ModernImage({
  src,
  alt,
  width,
  height,
  className,
  containerClassName,
  priority = false,
  effect = "zoom",
  fill = false,
}: ModernImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={cn("overflow-hidden relative", containerClassName)}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={effect === "tilt" && isHovered ? { rotateX: 5, rotateY: 5 } : {}}
    >
      {/* Shine effect overlay */}
      {effect === "shine" && (
        <motion.div
          className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 z-10"
          animate={{
            opacity: isHovered ? 0.2 : 0,
            x: isHovered ? ["100%", "-100%"] : "0%",
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      )}

      <motion.div
        animate={{
          scale: effect === "zoom" && isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          priority={priority}
          className={cn("transition-opacity duration-500", isLoaded ? "opacity-100" : "opacity-0", className)}
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>
    </motion.div>
  )
}
