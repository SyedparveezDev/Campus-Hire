"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, ThumbsUp, Plus, Edit, Trash2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SimpleCard, CardContent } from "@/components/ui/simple-card"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("portfolio")

  // Portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A fully responsive e-commerce website with product filtering and cart functionality.",
      technologies: ["React", "Node.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "https://example.com/project1",
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "An analytics dashboard for social media managers with real-time data visualization.",
      technologies: ["Next.js", "Chart.js", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "https://example.com/project2",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "UI/UX design for a mobile banking application focused on user experience and accessibility.",
      technologies: ["Figma", "Adobe XD", "Prototyping"],
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      link: "https://example.com/project3",
    },
  ]

  // Skills
  const skills = [
    { id: 1, name: "JavaScript", level: "Advanced", percentage: 90 },
    { id: 2, name: "React", level: "Advanced", percentage: 85 },
    { id: 3, name: "Next.js", level: "Intermediate", percentage: 75 },
    { id: 4, name: "Node.js", level: "Intermediate", percentage: 70 },
    { id: 5, name: "UI/UX Design", level: "Advanced", percentage: 85 },
    { id: 6, name: "Figma", level: "Advanced", percentage: 80 },
  ]

  // Reviews
  const reviews = [
    {
      id: 1,
      client: "TechStart Inc.",
      clientImage: "https://randomuser.me/api/portraits/men/42.jpg",
      project: "E-commerce Website Redesign",
      rating: 5,
      comment:
        "Syed did an outstanding job redesigning our e-commerce website. The new design is not only visually appealing but also significantly improved our conversion rates. Highly recommended!",
      date: "March 15, 2025",
    },
    {
      id: 2,
      client: "Creative Solutions",
      clientImage: "https://randomuser.me/api/portraits/women/24.jpg",
      project: "Mobile App UI Design",
      rating: 4,
      comment:
        "Great work on our mobile app UI design. Syed was responsive, creative, and delivered the project on time. Would work with again.",
      date: "February 28, 2025",
    },
    {
      id: 3,
      client: "Digital Marketing Pro",
      clientImage: "https://randomuser.me/api/portraits/men/67.jpg",
      project: "Website Analytics Dashboard",
      rating: 5,
      comment:
        "Syed created an amazing analytics dashboard for our marketing team. The interface is intuitive and the visualizations are exactly what we needed. Communication was excellent throughout the project.",
      date: "January 15, 2025",
    },
  ]

  // Render portfolio tab content
  const renderPortfolioTab = () => (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex justify-between items-center mb-6"
      >
        <h3 className="text-xl font-semibold">My Projects</h3>
        <Button size="sm" asChild>
          <Link href="/profile/projects/new">
            <Plus className="h-4 w-4 mr-1" />
            <span>Add Project</span>
          </Link>
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <SimpleCard className="h-full" hoverEffect={true}>
              <div className="relative w-full h-48 overflow-hidden group">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <span>View Project</span>
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-1">
                  {item.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0 text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </SimpleCard>
          </motion.div>
        ))}
      </div>
    </div>
  )

  // Render skills tab content
  const renderSkillsTab = () => (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex justify-between items-center mb-6"
      >
        <h3 className="text-xl font-semibold">My Skills</h3>
        <Button size="sm" asChild>
          <Link href="/profile/skills/edit">
            <Edit className="h-4 w-4 mr-1" />
            <span>Edit Skills</span>
          </Link>
        </Button>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <SimpleCard>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex flex-col"
                >
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{skill.name}</span>
                      <Badge
                        variant={
                          skill.level === "Advanced"
                            ? "default"
                            : skill.level === "Intermediate"
                              ? "secondary"
                              : "outline"
                        }
                        className="text-xs"
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  </div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="w-full"
                  >
                    <Progress value={skill.percentage} className="h-2" />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </SimpleCard>
      </motion.div>
    </div>
  )

  // Render reviews tab content
  const renderReviewsTab = () => (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex justify-between items-center mb-6"
      >
        <h3 className="text-xl font-semibold">Client Reviews</h3>
        <div className="text-sm text-muted-foreground">
          {reviews.length} review{reviews.length !== 1 ? "s" : ""}
        </div>
      </motion.div>

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.15 }}
          >
            <SimpleCard>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border/50">
                      <Image
                        src={review.clientImage || "/placeholder.svg"}
                        alt={review.client}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{review.client}</h3>
                      <p className="text-sm text-muted-foreground">{review.project}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: 0.1 * i }}
                      >
                        <Star
                          className={`h-4 w-4 ${
                            i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground/30"
                          }`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <p className="text-sm my-3">{review.comment}</p>
                <div className="h-px w-full bg-border/50 my-4" />
                <div className="flex justify-between items-center text-xs text-muted-foreground">
                  <span>{review.date}</span>
                  <motion.button
                    className="flex items-center gap-1 hover:text-primary transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ThumbsUp className="h-3 w-3" />
                    <span>Helpful</span>
                  </motion.button>
                </div>
              </CardContent>
            </SimpleCard>
          </motion.div>
        ))}
      </div>
    </div>
  )

  // Update the main tabs component with animations
  return (
    <div className="mt-8">
      <Tabs defaultValue="portfolio" value={activeTab} onValueChange={setActiveTab}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto">
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
        </motion.div>

        <div className="mt-6">
          {activeTab === "portfolio" && renderPortfolioTab()}
          {activeTab === "skills" && renderSkillsTab()}
          {activeTab === "reviews" && renderReviewsTab()}
        </div>
      </Tabs>
    </div>
  )
}
