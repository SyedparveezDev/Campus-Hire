"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { LoadingOverlay } from "@/components/ui/loading-overlay"
import { cn } from "@/lib/utils"

interface DataLoaderProps<T> {
  fetchData: () => Promise<T>
  children: (data: T) => React.ReactNode
  loadingComponent?: React.ReactNode
  errorComponent?: (error: Error) => React.ReactNode
  className?: string
  loadingText?: string
  spinnerSize?: "sm" | "md" | "lg" | "xl"
  spinnerColor?: "primary" | "secondary" | "accent" | "white" | "muted"
  showOverlay?: boolean
}

export function DataLoader<T>({
  fetchData,
  children,
  loadingComponent,
  errorComponent,
  className,
  loadingText = "Loading data...",
  spinnerSize = "lg",
  spinnerColor = "primary",
  showOverlay = true,
}: DataLoaderProps<T>) {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true)
      try {
        const result = await fetchData()
        setData(result)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An unknown error occurred"))
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [fetchData])

  return (
    <div className={cn("relative", className)}>
      {isLoading && showOverlay && (
        <LoadingOverlay
          isLoading={isLoading}
          text={loadingText}
          spinnerSize={spinnerSize}
          spinnerColor={spinnerColor}
        />
      )}

      {isLoading && loadingComponent ? (
        loadingComponent
      ) : error ? (
        errorComponent ? (
          errorComponent(error)
        ) : (
          <div className="p-4 text-center">
            <p className="text-destructive">Error loading data: {error.message}</p>
          </div>
        )
      ) : data ? (
        children(data)
      ) : null}
    </div>
  )
}
