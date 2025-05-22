import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell } from "lucide-react"

export default function NotificationsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Notifications</h1>
      <p className="text-muted-foreground">Stay updated with your activity and project updates</p>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center p-12 text-center">
          <div className="rounded-full bg-primary/10 p-4 mb-4">
            <Bell className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-xl font-medium mb-2">No notifications yet</h3>
          <p className="text-muted-foreground max-w-md">
            When you receive updates on your projects or account, they'll appear here.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
