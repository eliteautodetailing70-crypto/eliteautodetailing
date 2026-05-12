"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ArrowLeftRight } from "lucide-react"

export function Gallery() {
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ("touches" in e ? e.touches[0].clientX : e.clientX) - rect.left
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(position)
  }

  return (
    <section id="gallery" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            THE <span className="text-primary italic">RESULTS</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto mb-6"
          />
          <p className="text-white/60 max-w-2xl mx-auto">
            Witness the transformation. Our detailing services bring out the true beauty of every vehicle.
          </p>
        </div>

        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group cursor-ew-resize"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
          >
            {/* After Image */}
            <div className="absolute inset-0">
              <Image 
                src="/images/before-after.png" 
                alt="After detailing" 
                fill 
                className="object-cover"
              />
              <div className="absolute bottom-6 right-6 glass px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-primary z-20">
                After
              </div>
            </div>

            {/* Before Image (Clipped) */}
            <div 
              className="absolute inset-0 z-10 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <Image 
                src="/images/before-after.png" 
                alt="Before detailing" 
                fill 
                className="object-cover grayscale brightness-50"
              />
              <div className="absolute bottom-6 left-6 glass px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-white/70 z-20">
                Before
              </div>
            </div>

            {/* Slider Line */}
            <div 
              className="absolute top-0 bottom-0 z-30 w-1 bg-primary/50 backdrop-blur-sm"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-neon border-4 border-background">
                <ArrowLeftRight size={20} />
              </div>
            </div>

            {/* Instructions */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-40">
              <span className="glass px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                Slide to compare
              </span>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[1, 2, 3, 4].map((i) => (
                <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative aspect-square rounded-xl overflow-hidden border border-white/5 group"
                >
                    <Image 
                        src={`/images/service-${i === 1 ? 'foam-wash' : i === 2 ? 'interior' : 'full-detail'}.png`} 
                        alt="Gallery work" 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
