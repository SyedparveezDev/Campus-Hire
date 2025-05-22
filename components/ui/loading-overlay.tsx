"use client"

import { cn } from "@/lib/utils"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { motion, AnimatePresence } from "framer-motion"

interface LoadingOverlayProps {
  isLoading: boolean
  text?: string
  fullScreen?: boolean
  className?: string
  spinnerSize?: "sm" | "md" | "lg" | "xl"
  spinnerColor?: "primary" | "secondary" | "accent" | "white" | "muted"
  blur?: boolean
}

export function LoadingOverlay({
  isLoading,
  text,
  fullScreen = false,
  className,
  spinnerSize = "lg",
  spinnerColor = "primary",
  blur = true,
}: LoadingOverlayProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex flex-col items-center justify-center z-50",
            fullScreen ? "fixed inset-0 bg-background/80" : "absolute inset-0 bg-background/60 rounded-lg",
            blur && "backdrop-blur-sm",
            className,
          )}
        >
          <LoadingSpinner size={spinnerSize} color={spinnerColor} />
          {text && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-center text-sm font-medium text-muted-foreground"
            >
              {text}
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
