"use client"

import type React from "react"

import { useState } from "react"
import { LoadingButton } from "@/components/ui/loading-button"
import { toast } from "@/hooks/use-toast"

interface FormSubmitButtonProps {
  children: React.ReactNode
  loadingText?: string
  successText?: string
  className?: string
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  onSubmit: () => Promise<{ success: boolean; message?: string }>
}

export function FormSubmitButton({
  children,
  loadingText = "Submitting...",
  successText = "Success!",
  className,
  variant = "default",
  size = "default",
  onSubmit,
}: FormSubmitButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleClick = async () => {
    setIsLoading(true)
    try {
      const result = await onSubmit()

      if (result.success) {
        setIsSuccess(true)
        toast({
          title: "Success",
          description: result.message || successText,
        })

        // Reset success state after 2 seconds
        setTimeout(() => {
          setIsSuccess(false)
        }, 2000)
      } else {
        toast({
          title: "Error",
          description: result.message || "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <LoadingButton
      onClick={handleClick}
      isLoading={isLoading}
      loadingText={loadingText}
      className={className}
      variant={isSuccess ? "secondary" : variant}
      size={size}
      disabled={isLoading || isSuccess}
    >
      {isSuccess ? successText : children}
    </LoadingButton>
  )
}
