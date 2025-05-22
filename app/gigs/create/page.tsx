"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LoadingButton } from "@/components/ui/loading-button"
import { useRouter } from "next/navigation"

export default function CreateGigPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect to gigs page
    router.push("/gigs")
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create a New Gig</h1>
        <p className="text-muted-foreground mt-1">Post a new project or service to find freelancers</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Gig Details</CardTitle>
          <CardDescription>Provide information about your gig</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="E.g., Website Development for E-commerce Business"
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the details of your project, requirements, and expectations..."
                  rows={6}
                  required
                  disabled={isLoading}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select disabled={isLoading}>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="design">Design & Creative</SelectItem>
                      <SelectItem value="writing">Writing & Translation</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="data">Data & Analytics</SelectItem>
                      <SelectItem value="video">Video & Animation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input id="budget-min" type="number" placeholder="Min" min="5" required disabled={isLoading} />
                    <Input id="budget-max" type="number" placeholder="Max" min="5" required disabled={isLoading} />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Required Skills (comma separated)</Label>
                <Input id="skills" placeholder="E.g., JavaScript, React, Node.js" required disabled={isLoading} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="deadline">Deadline</Label>
                <Input id="deadline" type="date" required disabled={isLoading} />
              </div>
            </div>

            <div className="flex justify-end">
              <Button variant="outline" type="button" className="mr-2" disabled={isLoading}>
                Cancel
              </Button>
              <LoadingButton type="submit" isLoading={isLoading} loadingText="Creating Gig...">
                Create Gig
              </LoadingButton>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
