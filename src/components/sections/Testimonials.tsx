"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    role: "Luxury SUV Owner",
    content: "The best detailing service I've ever used. The attention to detail is incredible. My car looks better than when I bought it!",
    rating: 5,
  },
  {
    name: "Sarah Smith",
    role: "Sports Car Enthusiast",
    content: "Elite Auto Detailing lives up to its name. They are professional, punctual, and very meticulous. Highly recommended for premium cars.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "Daily Driver",
    content: "I got the full detail package and was blown away. The interior was spotless and the exterior glowed. Great value for the quality provided.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-surface/20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            CLIENT <span className="text-primary italic">REVIEWS</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto mb-6"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl relative group hover:border-primary/50 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-8 text-primary/20 group-hover:text-primary/40 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-white/80 mb-8 italic leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider">{testimonial.name}</h4>
                <p className="text-xs text-primary font-medium uppercase tracking-widest">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  )
}
