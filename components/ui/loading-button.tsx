"use client"

import type React from "react"

import { forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { cn } from "@/lib/utils"
import type { ButtonProps } from "@radix-ui/react-button"

interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean
  loadingText?: string
  spinnerSize?: "sm" | "md"
  spinnerColor?: "primary" | "secondary" | "accent" | "white" | "muted"
  children: React.ReactNode
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>(
  (
    {
      isLoading = false,
      loadingText,
      spinnerSize = "sm",
      spinnerColor = "white",
      children,
      className,
      variant = "default",
      size = "default",
      ...props
    },
    ref,
  ) => {
    // Determine if we should show the spinner with text or just the spinner
    const showSpinnerWithText = loadingText !== undefined

    return (
      <Button
        ref={ref}
        className={cn(className)}
        variant={variant}
        size={size}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <>
            <LoadingSpinner size={spinnerSize} color={spinnerColor} className={cn(showSpinnerWithText ? "mr-2" : "")} />
            {showSpinnerWithText ? loadingText : children}
          </>
        ) : (
          children
        )}
      </Button>
    )
  },
)

LoadingButton.displayName = "LoadingButton"

export { LoadingButton }
