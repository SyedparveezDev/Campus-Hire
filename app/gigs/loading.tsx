import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function GigsLoading() {
  return (
    <div className="container py-8">
      {/* Gig Header Loading */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-4 w-64 mt-2" />
          </div>
        </div>
        <div className="relative mt-4">
          <Skeleton className="h-12 w-full" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-8">
        {/* Filters Loading */}
        <div className="w-full md:w-1/4">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-24" />
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Skeleton className="h-5 w-32 mb-3" />
                <Skeleton className="h-10 w-full" />
                <div className="flex justify-between text-sm mt-4">
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-4 w-12" />
                </div>
              </div>

              <div>
                <Skeleton className="h-5 w-32 mb-3" />
                <div className="space-y-2">
                  {Array(6)
                    .fill(null)
                    .map((_, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Skeleton className="h-4 w-4 rounded" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                    ))}
                </div>
              </div>

              <div>
                <Skeleton className="h-5 w-32 mb-3" />
                <div className="space-y-2">
                  {Array(6)
                    .fill(null)
                    .map((_, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Skeleton className="h-4 w-4 rounded" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Gig Grid Loading */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <Card key={index}>
                  <Skeleton className="h-40 w-full" />
                  <CardContent className="pt-6 space-y-3">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <div className="flex flex-wrap gap-1">
                      <Skeleton className="h-5 w-16 rounded-full" />
                      <Skeleton className="h-5 w-20 rounded-full" />
                      <Skeleton className="h-5 w-14 rounded-full" />
                    </div>
                    <div className="flex justify-between pt-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-32" />
                    </div>
                    <Skeleton className="h-4 w-40" />
                  </CardContent>
                  <div className="px-6 pb-6 pt-2 border-t mt-4">
                    <Skeleton className="h-9 w-full" />
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
