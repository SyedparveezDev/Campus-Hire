"use client"

import { CardSkeleton } from "@/components/ui/card-skeleton"

export default function GigGridLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <CardSkeleton key={index} hasImage={true} hasHeader={true} hasFooter={true} imageHeight={160} lines={3} />
        ))}
    </div>
  )
}
