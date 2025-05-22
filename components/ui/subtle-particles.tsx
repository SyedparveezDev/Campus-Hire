"use client"

import { useRef, useEffect } from "react"
import { useTheme } from "next-themes"

interface SubtleParticlesProps {
  className?: string
  quantity?: number
  speed?: number
  color?: string
  maxSize?: number
  minSize?: number
}

export function SubtleParticles({
  className = "",
  quantity = 15,
  speed = 1,
  color,
  maxSize = 4,
  minSize = 1,
}: SubtleParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const resizeCanvas = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth
        canvas.height = canvas.parentElement.offsetHeight
        initParticles()
      }
    }

    const initParticles = () => {
      particles = []
      for (let i = 0; i < quantity; i++) {
        const size = Math.random() * (maxSize - minSize) + minSize
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          speedX: (Math.random() - 0.5) * speed,
          speedY: (Math.random() - 0.5) * speed,
          opacity: Math.random() * 0.5 + 0.1,
        })
      }
    }

    const drawParticles = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        const particleColor = color || (isDark ? "rgba(255, 255, 255, " : "rgba(0, 0, 0, ")
        ctx.fillStyle = `${particleColor}${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }
      })

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    drawParticles()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [quantity, speed, color, maxSize, minSize, isDark])

  return <canvas ref={canvasRef} className={`absolute inset-0 -z-10 ${className}`} />
}

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}
