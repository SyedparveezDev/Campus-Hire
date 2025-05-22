"use client"

import { CardContent } from "@/components/ui/card"
import { DollarSign, Clock, CheckCircle, Star } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedHoverCard } from "@/components/ui/animated-hover-card"

export default function DashboardStats() {
  const stats = [
    {
      title: "Total Earnings",
      value: "$1,240",
      icon: <DollarSign className="h-5 w-5 text-primary" />,
      change: "+12% from last month",
    },
    {
      title: "Active Projects",
      value: "4",
      icon: <Clock className="h-5 w-5 text-primary" />,
      change: "2 due this week",
    },
    {
      title: "Completed Gigs",
      value: "12",
      icon: <CheckCircle className="h-5 w-5 text-primary" />,
      change: "3 this month",
    },
    {
      title: "Average Rating",
      value: "4.8",
      icon: <Star className="h-5 w-5 text-primary" />,
      change: "From 24 reviews",
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <AnimatedHoverCard effect="glow">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </div>
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="p-2 bg-primary/10 rounded-full"
                >
                  {stat.icon}
                </motion.div>
              </div>
            </CardContent>
          </AnimatedHoverCard>
        </motion.div>
      ))}
    </div>
  )
}
