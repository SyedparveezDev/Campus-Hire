"use client"

import { Search, FileCheck, MessageSquare, CreditCard } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function HowItWorksSection() {
  const steps = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Find Opportunities",
      description: "Browse through available projects or post your own gig to find the perfect match.",
      delay: 0.1,
    },
    {
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: "Submit Proposals",
      description: "Send detailed proposals showcasing your skills and experience to potential clients.",
      delay: 0.2,
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Collaborate",
      description: "Work together through our integrated communication and project management tools.",
      delay: 0.3,
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: "Get Paid",
      description: "Receive secure payments for completed work with our escrow payment system.",
      delay: 0.4,
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            CampusHire makes it easy to connect, collaborate, and create value for both freelancers and clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: step.delay }}
            >
              <Card className="h-full border border-border/50">
                <CardContent className="p-6">
                  <div className="relative">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                      {step.icon}
                    </div>
                    <div className="absolute top-0 -right-2 w-8 h-8 bg-muted rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
