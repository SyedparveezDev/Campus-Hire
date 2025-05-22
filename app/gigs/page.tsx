import type { Metadata } from "next"
import GigFilters from "@/components/gigs/gig-filters"
import GigGridWithInfiniteScroll from "@/components/gigs/gig-grid-with-infinite-scroll"
import GigHeader from "@/components/gigs/gig-header"

export const metadata: Metadata = {
  title: "Find Gigs | CampusHire",
  description: "Browse and find freelance opportunities",
}

export default function GigsPage() {
  return (
    <div className="space-y-6">
      <GigHeader />
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4">
          <GigFilters />
        </div>
        <div className="w-full md:w-3/4">
          <GigGridWithInfiniteScroll />
        </div>
      </div>
    </div>
  )
}
