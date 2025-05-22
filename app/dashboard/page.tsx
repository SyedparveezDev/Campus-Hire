import type { Metadata } from "next"
import DashboardStats from "@/components/dashboard/dashboard-stats"
import RecentProjects from "@/components/dashboard/recent-projects"
import RecommendedGigs from "@/components/dashboard/recommended-gigs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Dashboard | CampusHire",
  description: "Manage your freelance projects and gigs",
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, Syed!</h1>
          <p className="text-muted-foreground mt-1">Here's an overview of your activity</p>
        </div>
        <Button asChild>
          <Link href="/gigs/create">Create New Gig</Link>
        </Button>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentProjects />
        </div>
        <div className="lg:col-span-1">
          <RecommendedGigs />

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Complete Your Profile</CardTitle>
              <CardDescription>Improve your chances of getting hired</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Profile Completion</span>
                  <span className="font-medium">75%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: "75%" }} />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Add more portfolio projects to increase your visibility.
                </p>
                <Button variant="outline" size="sm" className="w-full mt-2" asChild>
                  <Link href="/profile">
                    Complete Profile
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
