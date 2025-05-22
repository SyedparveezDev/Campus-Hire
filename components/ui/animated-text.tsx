"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
  as?: React.ElementType
  type?: "chars" | "words" | "none"
}

export function AnimatedText({
  text,
  className = "",
  once = true,
  delay = 0,
  as: Component = "span",
  type = "none",
}: AnimatedTextProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  if (type === "none" || !isClient) {
    return <Component className={className}>{text}</Component>
  }

  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  }

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  }

  if (type === "chars") {
    return (
      <Component className={cn("inline-block", className)} ref={ref}>
        <motion.span variants={container} initial="hidden" animate={controls} className="inline-block">
          {words.map((word, index) => (
            <span key={index} className="inline-block whitespace-nowrap">
              {Array.from(word).map((char, charIndex) => (
                <motion.span key={charIndex} variants={child} className="inline-block">
                  {char}
                </motion.span>
              ))}
              {index < words.length - 1 && " "}
            </span>
          ))}
        </motion.span>
      </Component>
    )
  }

  return (
    <Component className={cn("inline-block", className)} ref={ref}>
      <motion.span variants={container} initial="hidden" animate={controls} className="inline-block">
        {words.map((word, index) => (
          <motion.span key={index} variants={child} className="inline-block whitespace-nowrap">
            {word}
            {index < words.length - 1 && " "}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  )
}
