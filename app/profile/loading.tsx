import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export default function ProfileLoading() {
  return (
    <div className="container py-8">
      {/* Profile Header Loading */}
      <div className="relative">
        {/* Cover Image */}
        <Skeleton className="h-64 w-full rounded-xl mb-20" />

        {/* Profile Image */}
        <div className="absolute left-8 top-44 sm:left-12 sm:top-44">
          <Skeleton className="w-32 h-32 sm:w-40 sm:h-40 rounded-full" />
        </div>

        {/* Profile Info */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 px-4 sm:px-8">
          <div className="mt-16 sm:mt-0 sm:ml-44 space-y-2">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-4 w-48" />
          </div>
          <Skeleton className="h-10 w-32" />
        </div>

        {/* Additional profile details */}
        <div className="flex flex-wrap gap-6 mt-6 px-4 sm:px-8">
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-5 w-36" />
        </div>

        {/* Bio */}
        <div className="mt-6 px-4 sm:px-8">
          <Skeleton className="h-4 w-full max-w-3xl" />
          <Skeleton className="h-4 w-full max-w-3xl mt-2" />
          <Skeleton className="h-4 w-2/3 max-w-2xl mt-2" />
        </div>
      </div>

      {/* Tabs Loading */}
      <div className="mt-8">
        <Skeleton className="h-10 w-full max-w-md mx-auto" />

        <div className="mt-6">
          <div className="flex justify-between items-center mb-6">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-9 w-32" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <Card key={index}>
                  <Skeleton className="h-48 w-full" />
                  <CardContent className="p-4 space-y-3">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <div className="flex flex-wrap gap-1">
                      <Skeleton className="h-5 w-16 rounded-full" />
                      <Skeleton className="h-5 w-20 rounded-full" />
                      <Skeleton className="h-5 w-14 rounded-full" />
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
