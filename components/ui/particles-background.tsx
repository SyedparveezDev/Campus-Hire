"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { useTheme } from "next-themes"

interface ParticlesBackgroundProps {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  refresh?: boolean
}

export function ParticlesBackground({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const particles = useRef<Array<Particle>>([])
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  const dimensions = useRef<{ width: number; height: number }>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d")
    }
    initCanvas()
    animate()
    window.addEventListener("resize", initCanvas)

    return () => {
      window.removeEventListener("resize", initCanvas)
    }
  }, [])

  useEffect(() => {
    initCanvas()
  }, [refresh, resolvedTheme])

  const initCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      dimensions.current.width = canvasContainerRef.current.offsetWidth
      dimensions.current.height = canvasContainerRef.current.offsetHeight
      canvasRef.current.width = dimensions.current.width
      canvasRef.current.height = dimensions.current.height

      particles.current = []
      for (let i = 0; i < quantity; i++) {
        particles.current.push(new Particle(dimensions.current, staticity, context.current, isDark))
      }
    }
  }

  const animate = () => {
    if (context.current && canvasRef.current) {
      context.current.clearRect(0, 0, dimensions.current.width, dimensions.current.height)
      particles.current.forEach((particle) => {
        particle.update(mouse.current, ease)
        particle.draw()
      })
      requestAnimationFrame(animate)
    }
  }

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (canvasContainerRef.current) {
      const rect = canvasContainerRef.current.getBoundingClientRect()
      const { w, h } = { w: dimensions.current.width, h: dimensions.current.height }
      const x = e.clientX - rect.left - w / 2
      const y = e.clientY - rect.top - h / 2
      const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2
      if (inside) {
        mouse.current.x = x
        mouse.current.y = y
      }
    }
  }

  return (
    <div ref={canvasContainerRef} onMouseMove={onMouseMove} className={`absolute inset-0 overflow-hidden ${className}`}>
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
    </div>
  )
}

class Particle {
  private dimensions: { width: number; height: number }
  private x: number
  private y: number
  private vx: number
  private vy: number
  private size: number
  private color: string
  private opacity: number
  private ctx: CanvasRenderingContext2D
  private staticity: number
  private ease: number

  constructor(
    dimensions: { width: number; height: number },
    staticity: number,
    ctx: CanvasRenderingContext2D,
    isDark: boolean,
  ) {
    this.dimensions = dimensions
    this.x = Math.random() * dimensions.width
    this.y = Math.random() * dimensions.height
    this.vx = (Math.random() - 0.5) * 0.5
    this.vy = (Math.random() - 0.5) * 0.5
    this.size = Math.random() * 2 + 0.5

    // Create a gradient of colors for particles
    const colors = isDark
      ? ["rgba(var(--primary), 0.3)", "rgba(var(--secondary), 0.3)", "rgba(var(--accent), 0.3)"]
      : ["rgba(var(--primary), 0.2)", "rgba(var(--secondary), 0.2)", "rgba(var(--accent), 0.2)"]

    this.color = colors[Math.floor(Math.random() * colors.length)]
    this.opacity = Math.random() * 0.6 + 0.2
    this.ctx = ctx
    this.staticity = staticity
    this.ease = 0.05
  }

  update(mouse: { x: number; y: number }, ease: number) {
    this.x += this.vx
    this.y += this.vy

    if (this.x < 0 || this.x > this.dimensions.width) {
      this.vx = -this.vx
    }

    if (this.y < 0 || this.y > this.dimensions.height) {
      this.vy = -this.vy
    }

    // Mouse interaction
    const distX = mouse.x - (this.x - this.dimensions.width / 2)
    const distY = mouse.y - (this.y - this.dimensions.height / 2)
    const distance = Math.sqrt(distX * distX + distY * distY)
    const force = Math.max(100 - distance, 0) / this.staticity

    if (distance < 100) {
      const angle = Math.atan2(distY, distX)
      this.vx += force * Math.cos(angle) * this.ease
      this.vy += force * Math.sin(angle) * this.ease
    }

    // Apply some drag
    this.vx *= 0.98
    this.vy *= 0.98
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    this.ctx.fillStyle = this.color
    this.ctx.fill()
  }
}
