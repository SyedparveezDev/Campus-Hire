"use client"

import { useRef, useEffect } from "react"
import { useTheme } from "next-themes"

export function AnimatedBackground() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create gradient blobs
    const blobs = Array.from({ length: 3 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 300 + 100,
      xSpeed: (Math.random() - 0.5) * 0.7,
      ySpeed: (Math.random() - 0.5) * 0.7,
      hue: Math.random() * 60 + (isDark ? 120 : 180), // Different color ranges for light/dark mode
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw blobs
      blobs.forEach((blob) => {
        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius)

        if (isDark) {
          gradient.addColorStop(0, `hsla(${blob.hue}, 80%, 60%, 0.05)`)
          gradient.addColorStop(1, `hsla(${blob.hue}, 80%, 60%, 0)`)
        } else {
          gradient.addColorStop(0, `hsla(${blob.hue}, 80%, 60%, 0.03)`)
          gradient.addColorStop(1, `hsla(${blob.hue}, 80%, 60%, 0)`)
        }

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2)
        ctx.fill()

        // Move blobs
        blob.x += blob.xSpeed
        blob.y += blob.ySpeed

        // Bounce off edges
        if (blob.x < 0 || blob.x > canvas.width) blob.xSpeed *= -1
        if (blob.y < 0 || blob.y > canvas.height) blob.ySpeed *= -1
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10 opacity-70"
      aria-hidden="true"
    />
  )
}
