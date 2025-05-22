"use client"

import { useEffect, useRef, useState } from "react"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface InfiniteScrollLoaderProps {
  onLoadMore: () => Promise<void>
  hasMore: boolean
  className?: string
  loadingText?: string
  threshold?: number
}

export function InfiniteScrollLoader({
  onLoadMore,
  hasMore,
  className,
  loadingText = "Loading more items...",
  threshold = 100,
}: InfiniteScrollLoaderProps) {
  const [isLoading, setIsLoading] = useState(false)
  const loaderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && hasMore && !isLoading) {
          loadMore()
        }
      },
      {
        rootMargin: `0px 0px ${threshold}px 0px`,
      },
    )

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current)
      }
    }
  }, [hasMore, isLoading, threshold])

  const loadMore = async () => {
    if (!hasMore || isLoading) return

    setIsLoading(true)
    try {
      await onLoadMore()
    } finally {
      setIsLoading(false)
    }
  }

  if (!hasMore) return null

  return (
    <div ref={loaderRef} className={cn("py-4 flex justify-center items-center", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center"
      >
        <LoadingSpinner size="md" color="primary" />
        {loadingText && <p className="mt-2 text-sm text-muted-foreground">{loadingText}</p>}
      </motion.div>
    </div>
  )
}
