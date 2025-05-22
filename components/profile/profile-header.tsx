"use client"

import { Edit, MapPin, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ProfileHeader() {
  return (
    <div className="relative">
      {/* Cover Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-64 w-full rounded-xl overflow-hidden mb-20"
      >
        <Image src="/images/profile-cover.png" alt="Profile Cover" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />

        {/* Availability badge */}
        <motion.div
          className="absolute top-5 right-5 bg-white/90 dark:bg-black/80 backdrop-blur-sm p-2 rounded-lg shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-green-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            />
            <span className="text-xs font-medium">Available for work</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="absolute left-8 top-44 sm:left-12 sm:top-44"
      >
        <motion.div
          className="relative"
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 relative">
            {/* Outer glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-background/80 backdrop-blur-sm -m-1 shadow-lg"
              whileHover={{
                boxShadow: "0 0 20px rgba(var(--primary), 0.4)",
                transition: { duration: 0.3 },
              }}
            ></motion.div>

            {/* Gradient border */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20"
              whileHover={{
                opacity: 0.8,
                background:
                  "linear-gradient(90deg, rgba(var(--primary), 0.3), rgba(var(--secondary), 0.3), rgba(var(--accent), 0.3))",
                transition: { duration: 0.3 },
              }}
            />

            {/* Perfect circle container with fixed aspect ratio */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-md z-10 group">
              <Image
                src="/images/profile-photo.jpeg"
                alt="Syed Parveez Afham"
                fill
                sizes="(max-width: 640px) 8rem, 10rem"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                priority
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          <motion.div
            className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-2 shadow-md cursor-pointer z-20"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Edit className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Profile Info */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-16 sm:mt-0 sm:ml-44"
        >
          <h1 className="text-3xl font-bold mb-1">Syed Parveez Afham</h1>
          <p className="text-muted-foreground">Full-Stack Developer & UI Designer</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Button asChild>
            <Link href="/profile/edit">Edit Profile</Link>
          </Button>
        </motion.div>
      </div>

      {/* Additional profile details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="flex flex-wrap gap-6 text-sm text-foreground mt-6 px-4 sm:px-8"
      >
        <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
          <MapPin className="h-4 w-4 text-primary" />
          <span>Karnataka, India</span>
        </motion.div>
        <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
          <GraduationCap className="h-4 w-4 text-primary" />
          <span>Computer Science, BNU</span>
        </motion.div>
        <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
          <Briefcase className="h-4 w-4 text-primary" />
          <span>12 Projects Completed</span>
        </motion.div>
      </motion.div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="mt-6 px-4 sm:px-8"
      >
        <p className="text-sm max-w-3xl text-foreground">
          Passionate web developer and UI designer with experience in creating responsive websites and applications.
          Currently pursuing a degree in Computer Science at NYU. Skilled in React, Next.js, and UI/UX design. I love
          solving complex problems and creating intuitive user experiences that make technology more accessible.
        </p>
      </motion.div>
    </div>
  )
}
