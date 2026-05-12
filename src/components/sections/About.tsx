"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2, MapPin, Smartphone, Star } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 bg-surface/30 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/images/service-full-detail.png" 
                alt="Elite Auto Detailing Workshop" 
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 z-20 glass p-6 rounded-2xl border-primary/40 shadow-neon/20 hidden md:block">
              <div className="text-primary text-4xl font-bold mb-1">Elite</div>
              <div className="text-white/80 text-xs uppercase tracking-widest font-bold">Standard Guaranteed</div>
            </div>
            
            {/* Decorative frames */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/50" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/50" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Our Story</h2>
            <h3 className="text-4xl font-bold mb-6 leading-tight">
              GIVE YOUR CAR THE <span className="text-primary">PREMIUM</span> CARE IT DESERVES
            </h3>
            <p className="text-white/70 mb-8 leading-relaxed">
              At Elite Auto Detailing, we believe every car tells a story. We are dedicated to providing the highest quality mobile detailing services in Gauteng. Our team uses professional-grade products and techniques to ensure your vehicle looks its absolute best, inside and out.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-primary w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1 uppercase text-sm">Professional Grade</h4>
                  <p className="text-white/50 text-xs">Only the best products for your vehicle.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Smartphone className="text-primary w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1 uppercase text-sm">Mobile Service</h4>
                  <p className="text-white/50 text-xs">We come to your location for convenience.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-primary w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1 uppercase text-sm">Gauteng Based</h4>
                  <p className="text-white/50 text-xs">Proudly serving the Gauteng region.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="text-primary w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1 uppercase text-sm">Satisfaction</h4>
                  <p className="text-white/50 text-xs">We don't stop until you're 100% happy.</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-8">
               <div>
                  <div className="text-2xl font-bold text-white">067 147 2681</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest">Call for inquiries</div>
               </div>
               <div className="w-px h-10 bg-white/10" />
               <div>
                  <div className="text-2xl font-bold text-white">SA</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest">Based in Gauteng</div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
