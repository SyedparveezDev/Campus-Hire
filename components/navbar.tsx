"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/ui/logo"
import { AnimatedHoverLink } from "@/components/ui/animated-hover-link"
import { AnimatedHoverButton } from "@/components/ui/animated-hover-button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Add scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Find Gigs", path: "/gigs" },
    { name: "Profile", path: "/profile" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/0",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo size="md" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <AnimatedHoverLink
              key={item.path}
              href={item.path}
              effect="underline"
              isActive={pathname === item.path}
              className="text-sm font-medium"
            >
              {item.name}
            </AnimatedHoverLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <div className="hidden md:flex items-center gap-2">
            <AnimatedHoverButton variant="outline" size="sm" href="/login" effect="shine">
              Log in
            </AnimatedHoverButton>
            <AnimatedHoverButton size="sm" href="/signup" effect="bounce">
              Sign up
            </AnimatedHoverButton>
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          >
            <div className="container py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <AnimatedHoverLink
                  key={item.path}
                  href={item.path}
                  effect="highlight"
                  isActive={pathname === item.path}
                  className="block py-2 text-base font-medium"
                >
                  {item.name}
                </AnimatedHoverLink>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t">
                <AnimatedHoverButton variant="outline" className="w-full" href="/login" effect="shine">
                  Log in
                </AnimatedHoverButton>
                <AnimatedHoverButton className="w-full" href="/signup" effect="bounce">
                  Sign up
                </AnimatedHoverButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
