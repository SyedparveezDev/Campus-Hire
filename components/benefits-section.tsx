"use client"

import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function BenefitsSection() {
  const studentBenefits = [
    "Gain real-world project experience",
    "Build a professional portfolio",
    "Earn while learning",
    "Develop client communication skills",
  ]

  const clientBenefits = [
    "Access to fresh talent and innovative ideas",
    "Cost-effective project completion",
    "Support student growth and development",
    "Centralized talent discovery platform",
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
          <h2 className="text-3xl font-bold">Benefits</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Card className="h-full border border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">For Students</h3>
                <ul className="space-y-4">
                  {studentBenefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-start"
                    >
                      <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Card className="h-full border border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4">For Clients</h3>
                <ul className="space-y-4">
                  {clientBenefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="flex items-start"
                    >
                      <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
