"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { motion, AnimatePresence } from "framer-motion"

interface LoadingImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  containerClassName?: string
  placeholderClassName?: string
  spinnerSize?: "sm" | "md" | "lg"
  spinnerColor?: "primary" | "secondary" | "accent" | "white" | "muted"
  priority?: boolean
  showLoadingIndicator?: boolean
  blurEffect?: boolean
}

export function LoadingImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  containerClassName,
  placeholderClassName,
  spinnerSize = "md",
  spinnerColor = "primary",
  priority = false,
  showLoadingIndicator = true,
  blurEffect = true,
}: LoadingImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setError(true)
  }

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {/* Loading indicator */}
      <AnimatePresence>
        {isLoading && showLoadingIndicator && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center bg-muted/20 z-10"
          >
            <LoadingSpinner size={spinnerSize} color={spinnerColor} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Placeholder */}
      {isLoading && (
        <div
          className={cn("absolute inset-0 bg-muted/30", blurEffect && "backdrop-blur-[2px]", placeholderClassName)}
        />
      )}

      {/* Image */}
      <Image
        src={error ? "/placeholder.svg" : src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        className={cn("transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100", className)}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  )
}
