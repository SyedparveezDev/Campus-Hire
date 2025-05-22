"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface CardSkeletonProps {
  hasImage?: boolean
  hasHeader?: boolean
  hasFooter?: boolean
  imageHeight?: number
  lines?: number
}

export function CardSkeleton({
  hasImage = false,
  hasHeader = true,
  hasFooter = false,
  imageHeight = 200,
  lines = 3,
}: CardSkeletonProps) {
  return (
    <Card className="overflow-hidden">
      {hasImage && <Skeleton className="w-full" style={{ height: `${imageHeight}px` }} />}
      {hasHeader && (
        <CardHeader className="pb-2">
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-4 w-4/5 mt-2" />
        </CardHeader>
      )}
      <CardContent className="pb-2">
        {Array(lines)
          .fill(null)
          .map((_, i) => (
            <Skeleton key={i} className={`h-4 ${i === lines - 1 ? "w-4/5" : "w-full"} mt-2`} />
          ))}
      </CardContent>
      {hasFooter && (
        <CardFooter>
          <Skeleton className="h-9 w-full" />
        </CardFooter>
      )}
    </Card>
  )
}
