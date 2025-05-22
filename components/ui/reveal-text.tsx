"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface RevealTextProps {
  children: string
  className?: string
  delay?: number
  duration?: number
  as?: React.ElementType
  once?: boolean
  direction?: "up" | "down" | "left" | "right"
  staggerChildren?: number
}

export function RevealText({
  children,
  className,
  delay = 0,
  duration = 0.5,
  as: Component = "div",
  once = true,
  direction = "up",
  staggerChildren = 0.03,
}: RevealTextProps) {
  const text = useRef<HTMLDivElement>(null)
  const isInView = useInView(text, { once, margin: "-50px 0px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const words = children.split(" ")

  // Set the direction of the animation
  const directionVariants = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 },
  }

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: directionVariants[direction],
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration,
      },
    },
  }

  return (
    <Component className={className}>
      <motion.div ref={text} variants={container} initial="hidden" animate={controls} className="inline-block">
        {words.map((word, i) => (
          <motion.span key={i} variants={child} className="inline-block whitespace-nowrap">
            {word}
            {i !== words.length - 1 && " "}
          </motion.span>
        ))}
      </motion.div>
    </Component>
  )
}
