"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"

interface LoadingSuccessButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onAction: () => Promise<boolean>
  loadingText?: string
  successText?: string
  children: React.ReactNode
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  resetDelay?: number
}

export function LoadingSuccessButton({
  onAction,
  loadingText,
  successText = "Success!",
  children,
  className,
  variant = "default",
  size = "default",
  resetDelay = 2000,
  ...props
}: LoadingSuccessButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleClick = async () => {
    if (isLoading || isSuccess) return

    setIsLoading(true)
    try {
      const success = await onAction()
      if (success) {
        setIsSuccess(true)
        setTimeout(() => {
          setIsSuccess(false)
        }, resetDelay)
      }
    } catch (error) {
      console.error("Action failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      className={cn(className)}
      variant={isSuccess ? "secondary" : variant}
      size={size}
      disabled={isLoading || isSuccess}
      onClick={handleClick}
      {...props}
    >
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center"
          >
            <LoadingSpinner size="sm" color={variant === "default" ? "white" : "primary"} className="mr-2" />
            {loadingText || children}
          </motion.div>
        ) : isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center"
          >
            <Check className="mr-2 h-4 w-4" />
            {successText}
          </motion.div>
        ) : (
          <motion.div key="default" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  )
}
