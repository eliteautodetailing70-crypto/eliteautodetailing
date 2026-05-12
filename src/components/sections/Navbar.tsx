"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X, Instagram, Phone } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { scrollY } = useScroll()
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(13, 13, 13, 0)", "rgba(13, 13, 13, 0.9)"]
  )
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(12px)"]
  )
  
  const borderBottom = useTransform(
    scrollY,
    [0, 100],
    ["1px solid rgba(123, 44, 191, 0)", "1px solid rgba(123, 44, 191, 0.2)"]
  )

  return (
    <motion.nav
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        borderBottom,
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col items-start">
          <span className="font-heading text-2xl font-bold text-white tracking-tighter leading-none">
            ELITE<span className="text-primary">AUTO</span>
          </span>
          <span className="text-[10px] font-medium text-accent tracking-[0.2em] uppercase leading-none mt-1">
            DETAILING
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/80 hover:text-primary transition-colors uppercase tracking-widest"
            >
              {item.name}
            </Link>
          ))}
          <Button variant="glow" size="sm" asChild>
            <Link href="#booking">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-primary/20 p-6 flex flex-col gap-6"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-white hover:text-primary transition-colors uppercase tracking-widest"
            >
              {item.name}
            </Link>
          ))}
          <Button variant="glow" className="w-full" asChild onClick={() => setIsOpen(false)}>
            <Link href="#booking">Book Now</Link>
          </Button>
          <div className="flex justify-center gap-6 pt-4 border-t border-white/10">
             <a href="https://instagram.com/elite.auto.detailing07" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
               <Instagram size={24} />
             </a>
             <a href="tel:0671472681" className="text-white/60 hover:text-primary transition-colors">
               <Phone size={24} />
             </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
