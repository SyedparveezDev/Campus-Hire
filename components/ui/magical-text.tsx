"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

interface MagicalTextProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
  duration?: number
  as?: React.ElementType
}

export function MagicalText({
  text,
  className = "",
  once = true,
  delay = 0,
  duration = 0.05,
  as: Component = "span",
}: MagicalTextProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once })
  const [isHovered, setIsHovered] = useState(false)

  // Split text into words and characters
  const words = text.split(" ")

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const wordVariants = {
    hidden: {},
    visible: {},
  }

  const characterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + i * duration,
        duration: 0.3,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  }

  return (
    <Component
      ref={ref}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={`word-${wordIndex}`}
          className="inline-block whitespace-nowrap"
          variants={wordVariants}
          initial="hidden"
          animate={controls}
        >
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={`char-${charIndex}`}
              className="inline-block"
              variants={characterVariants}
              initial="hidden"
              animate={controls}
              custom={(wordIndex + charIndex) * 0.2}
              whileHover={{
                scale: isHovered ? 1.2 : 1,
                color: "hsl(var(--primary))",
                transition: { duration: 0.1 },
              }}
            >
              {char}
            </motion.span>
          ))}
          {wordIndex < words.length - 1 && " "}
        </motion.span>
      ))}
    </Component>
  )
}
