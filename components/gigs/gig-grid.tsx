"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { CardContent, CardFooter } from "@/components/ui/card"
import { AnimatedHoverCard } from "@/components/ui/animated-hover-card"
import { AnimatedHoverImage } from "@/components/ui/animated-hover-image"
import { AnimatedHoverButton } from "@/components/ui/animated-hover-button"
import GigGridLoading from "@/components/gigs/gig-grid-loading"
import { LoadingOverlay } from "@/components/ui/loading-overlay"
import LoadingButton from "@/components/ui/loading-button"

export default function GigGrid() {
  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [gigs, setGigs] = useState<any[]>([])

  // Simulate initial data loading
  useEffect(() => {
    const fetchGigs = async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setGigs([
        {
          title: "WordPress Website Development",
          description:
            "Looking for a skilled WordPress developer to create a responsive e-commerce website with custom features.",
          budget: "$300-$500",
          skills: ["WordPress", "PHP", "CSS"],
          postedBy: "TechStart Inc.",
          postedDate: "2 days ago",
          image:
            "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
          title: "Social Media Content Creation",
          description:
            "Need creative content for Instagram and Facebook. Looking for someone with experience in lifestyle and fashion.",
          budget: "$150-$300",
          skills: ["Photoshop", "Copywriting", "Social Media"],
          postedBy: "Style Boutique",
          postedDate: "1 day ago",
          image:
            "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        },
        {
          title: "Data Analysis for Research Project",
          description:
            "Seeking a student with strong analytical skills to help analyze survey data for an academic research project.",
          budget: "$300-$600",
          skills: ["Excel", "SPSS", "R"],
          postedBy: "Dr. Williams",
          postedDate: "3 days ago",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
          title: "Video Editing for YouTube Channel",
          description:
            "Looking for a video editor to create engaging content for a growing YouTube channel focused on technology reviews.",
          budget: "$100-$250",
          skills: ["Premiere Pro", "After Effects"],
          postedBy: "TechReviewer",
          postedDate: "5 hours ago",
          image:
            "https://images.unsplash.com/photo-1574717024453-354056afd6fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
      ])
      setIsLoading(false)
    }

    fetchGigs()
  }, [])

  const loadMoreGigs = async () => {
    setIsLoadingMore(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Add more gigs
    setGigs([
      ...gigs,
      {
        title: "Mobile App UI Design",
        description:
          "Need a creative UI designer for a fitness tracking mobile application. Experience with Figma required.",
        budget: "$400-$700",
        skills: ["Figma", "UI/UX", "Mobile Design"],
        postedBy: "FitTech Solutions",
        postedDate: "4 days ago",
        image:
          "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
      {
        title: "Academic Essay Editing",
        description: "Looking for someone to proofread and edit a 5000-word academic paper on environmental science.",
        budget: "$80-$150",
        skills: ["Editing", "Proofreading", "Academic Writing"],
        postedBy: "GradStudent22",
        postedDate: "2 days ago",
        image:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
      },
    ])
    setIsLoadingMore(false)
  }

  if (isLoading) {
    return <GigGridLoading />
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {gigs.map((gig, index) => (
          <div key={index} className="relative">
            <AnimatedHoverCard className="h-full flex flex-col" effect="lift">
              <div className="h-40 w-full overflow-hidden">
                <AnimatedHoverImage
                  src={gig.image || "/placeholder.svg"}
                  alt={gig.title}
                  fill
                  effect="zoom"
                  containerClassName="relative w-full h-full"
                />
              </div>
              <CardContent className="pt-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2">{gig.title}</h3>
                <p className="text-muted-foreground mb-4">{gig.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {gig.skills.map((skill: string, i: number) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Budget: {gig.budget}</span>
                  <span className="text-muted-foreground">Posted: {gig.postedDate}</span>
                </div>
                <p className="text-sm mt-2">Client: {gig.postedBy}</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <AnimatedHoverButton className="w-full" href={`/gigs/${index + 1}`} effect="shine">
                  View Details
                </AnimatedHoverButton>
              </CardFooter>
            </AnimatedHoverCard>
          </div>
        ))}
        {isLoadingMore && <LoadingOverlay isLoading={isLoadingMore} text="Loading more gigs..." />}
      </div>

      <div className="flex justify-center">
        <LoadingButton
          onClick={loadMoreGigs}
          isLoading={isLoadingMore}
          loadingText="Loading more..."
          variant="outline"
          className="min-w-[150px]"
        >
          Load More
        </LoadingButton>
      </div>
    </div>
  )
}
