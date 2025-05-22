"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function RecentProjects() {
  const projects = [
    {
      title: "E-commerce Website Redesign",
      client: "TechStart Inc.",
      dueDate: "Apr 25, 2025",
      status: "In Progress",
      statusColor: "bg-yellow-500",
    },
    {
      title: "Mobile App UI Design",
      client: "Creative Solutions",
      dueDate: "Apr 30, 2025",
      status: "In Progress",
      statusColor: "bg-yellow-500",
    },
    {
      title: "Content Writing for Blog",
      client: "Digital Marketing Pro",
      dueDate: "Apr 20, 2025",
      status: "Due Soon",
      statusColor: "bg-red-500",
    },
    {
      title: "Logo Design for Startup",
      client: "InnovateTech",
      dueDate: "May 5, 2025",
      status: "Upcoming",
      statusColor: "bg-blue-500",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="border border-border/50">
        <CardHeader>
          <CardTitle>Recent Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
              >
                <div>
                  <h3 className="font-medium">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">Client: {project.client}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-sm">Due: {project.dueDate}</p>
                  <Badge variant="outline" className={`${project.statusColor} text-white`}>
                    {project.status}
                  </Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
