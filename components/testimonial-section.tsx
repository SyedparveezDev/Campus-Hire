"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "CampusHire helped me land my first freelance project while still in college. The experience I gained was invaluable for my career.",
      author: "Alex Johnson",
      role: "Computer Science Student",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      quote:
        "As a professor, I found exceptional student talent through CampusHire for my research project. The platform made the hiring process seamless.",
      author: "Dr. Sarah Williams",
      role: "Associate Professor",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      quote:
        "Our startup saved both time and money by hiring student freelancers from CampusHire. The quality of work exceeded our expectations.",
      author: "Michael Chen",
      role: "Startup Founder",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  ]

  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">What Our Users Say</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-3xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border border-border/50">
                <CardContent className="p-8 md:p-12 text-center">
                  <div className="mb-6 mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full">
                    <Quote className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-lg md:text-xl italic mb-8">{testimonials[current].quote}</p>
                  <div className="flex items-center justify-center">
                    <Image
                      src={testimonials[current].avatar || "/placeholder.svg"}
                      alt={testimonials[current].author}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                    />
                    <div className="text-left">
                      <p className="font-semibold">{testimonials[current].author}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={next} className="rounded-full" aria-label="Next testimonial">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
