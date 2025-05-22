"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Skeleton } from "@/components/ui/skeleton"

export default function RecommendedGigs() {
  const [isLoading, setIsLoading] = useState(true)
  const [gigs, setGigs] = useState<any[]>([])

  // Simulate data loading
  useEffect(() => {
    const fetchGigs = async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2500))

      setGigs([
        {
          title: "WordPress Website Development",
          budget: "$200-$500",
          skills: ["WordPress", "PHP", "CSS"],
          postedDate: "2 days ago",
        },
        {
          title: "Social Media Content Creation",
          budget: "$150-$300",
          skills: ["Photoshop", "Copywriting"],
          postedDate: "1 day ago",
        },
        {
          title: "Data Analysis for Research Project",
          budget: "$300-$600",
          skills: ["Excel", "SPSS", "R"],
          postedDate: "3 days ago",
        },
        {
          title: "Video Editing for YouTube Channel",
          budget: "$100-$250",
          skills: ["Premiere Pro", "After Effects"],
          postedDate: "5 hours ago",
        },
      ])
      setIsLoading(false)
    }

    fetchGigs()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Card className="border border-border/50">
        <CardHeader>
          <CardTitle>Recommended Gigs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {isLoading
              ? Array(4)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="space-y-2">
                        <Skeleton className="h-5 w-48" />
                        <Skeleton className="h-4 w-32" />
                        <div className="flex flex-wrap gap-1 mt-2">
                          {Array(3)
                            .fill(null)
                            .map((_, i) => (
                              <Skeleton key={i} className="h-5 w-16 rounded-full" />
                            ))}
                        </div>
                        <Skeleton className="h-3 w-24 mt-2" />
                      </div>
                    </div>
                  ))
              : gigs.map((gig, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                  >
                    <h3 className="font-medium">{gig.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">Budget: {gig.budget}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {gig.skills.map((skill: string, i: number) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Posted: {gig.postedDate}</p>
                  </motion.div>
                ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
