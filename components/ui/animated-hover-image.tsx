"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedHoverImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  containerClassName?: string
  priority?: boolean
  effect?: "zoom" | "tilt" | "shine" | "reveal" | "blur" | "none"
  fill?: boolean
}

export function AnimatedHoverImage({
  src,
  alt,
  width,
  height,
  className,
  containerClassName,
  priority = false,
  effect = "zoom",
  fill = false,
}: AnimatedHoverImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <motion.div
      className={cn("overflow-hidden relative", effect === "shine" && "group", containerClassName)}
      whileHover={effect === "tilt" ? { rotateX: 5, rotateY: 5, transition: { duration: 0.2 } } : undefined}
    >
      {/* Shine effect overlay */}
      {effect === "shine" && (
        <motion.div
          className="absolute inset-0 w-full h-full bg-white opacity-0 z-10 group-hover:opacity-20 group-hover:shine-animation"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        />
      )}

      {/* Reveal overlay */}
      {effect === "reveal" && (
        <motion.div
          className="absolute inset-0 w-full h-full bg-background z-10"
          initial={{ y: "100%" }}
          whileHover={{ y: "0%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      )}

      <motion.div
        animate={effect === "zoom" ? { scale: isLoaded ? 1 : 1.05 } : undefined}
        whileHover={
          effect === "zoom"
            ? { scale: 1.1, transition: { duration: 0.4 } }
            : effect === "blur"
              ? { filter: "blur(0px)", transition: { duration: 0.3 } }
              : undefined
        }
        initial={effect === "blur" ? { filter: "blur(5px)" } : undefined}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          priority={priority}
          className={cn(
            "transition-all duration-500",
            isLoaded ? "opacity-100" : "opacity-0",
            effect === "blur" && "hover:blur-none",
            className,
          )}
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>
    </motion.div>
  )
}
