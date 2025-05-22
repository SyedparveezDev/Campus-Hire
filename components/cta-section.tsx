"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function CtaSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Solid background with strong color to ensure visibility */}
      <div className="absolute inset-0 bg-primary -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 -z-10 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80')]" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl -z-10" />

      <div className="container px-4 mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Get Started?</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Join CampusHire today and be part of a growing community of student freelancers and clients.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 group text-base md:text-lg py-6" asChild>
            <Link href="/signup">
              <span>Sign Up as Freelancer</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white/20 text-base md:text-lg py-6"
            asChild
          >
            <Link href="/gigs">Post a Project</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
