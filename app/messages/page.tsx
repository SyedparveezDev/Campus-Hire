import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle } from "lucide-react"

export default function MessagesPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Messages</h1>
      <p className="text-muted-foreground">Connect with clients and freelancers</p>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Your Conversations</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center p-12 text-center">
          <div className="rounded-full bg-primary/10 p-4 mb-4">
            <MessageCircle className="h-10 w-10 text-primary" />
          </div>
          <h3 className="text-xl font-medium mb-2">No messages yet</h3>
          <p className="text-muted-foreground max-w-md">
            When you connect with other users, your conversations will appear here.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
