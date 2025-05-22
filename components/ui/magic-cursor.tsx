"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function MagicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const [isVisible, setIsVisible] = useState(false)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const mouseEnterWindow = () => setIsVisible(true)
    const mouseLeaveWindow = () => setIsVisible(false)

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mouseenter", mouseEnterWindow)
    window.addEventListener("mouseleave", mouseLeaveWindow)

    const handleMouseEnterInteractive = () => setCursorVariant("interactive")
    const handleMouseLeaveInteractive = () => setCursorVariant("default")

    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterInteractive)
      el.addEventListener("mouseleave", handleMouseLeaveInteractive)
    })

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("mouseenter", mouseEnterWindow)
      window.removeEventListener("mouseleave", mouseLeaveWindow)

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterInteractive)
        el.removeEventListener("mouseleave", handleMouseLeaveInteractive)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      opacity: 0.3,
      height: 16,
      width: 16,
      backgroundColor: "transparent",
      border: isDark ? "1px solid rgba(255, 255, 255, 0.3)" : "1px solid rgba(0, 0, 0, 0.3)",
      transition: {
        type: "spring",
        mass: 0.3,
        damping: 28,
        stiffness: 350,
      },
    },
    interactive: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      opacity: 0.4,
      backgroundColor: "transparent",
      border: isDark ? "1px solid rgba(var(--primary), 0.5)" : "1px solid rgba(var(--primary), 0.5)",
      transition: {
        type: "spring",
        mass: 0.3,
        damping: 28,
        stiffness: 350,
      },
    },
  }

  // Only show on desktop devices
  if (typeof window !== "undefined" && window.innerWidth < 1024) {
    return null
  }

  return (
    <>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
          variants={variants}
          animate={cursorVariant}
          initial={{ opacity: 0 }}
        />
      )}
    </>
  )
}
