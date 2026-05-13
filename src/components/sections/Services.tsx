"use client"

import { motion } from "framer-motion"
import { Droplet, Wind, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/Button"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Exterior Wash",
    price: "R199.99",
    image: "/images/service-foam-wash.png",
    icon: <Droplet className="w-6 h-6" />,
    features: ["Foam wash", "Rinse & dry", "Tire shine", "Protection wax"],
  },
  {
    title: "Interior Cleaning",
    price: "R199.99",
    image: "/images/service-interior.png",
    icon: <Wind className="w-6 h-6" />,
    features: ["Vacuum", "Dashboard clean", "Seat wipe down", "Leather protection"],
  },
  {
    title: "Full Detail Package",
    price: "R379.99",
    image: "/images/service-full-detail.png",
    icon: <Shield className="w-6 h-6" />,
    features: ["Interior + Exterior", "Deep clean", "Full refresh", "Wax & leather protection"],
    highlight: true,
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            OUR <span className="text-primary italic">SERVICES</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            We offer range of premium detailing packages designed to keep your vehicle in pristine condition.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative glass rounded-2xl overflow-hidden border-white/5 hover:border-primary/50 transition-all duration-500 ${
                service.highlight ? "md:-translate-y-4 shadow-neon/20" : ""
              }`}
            >
              {service.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1 rounded-b-xl z-20">
                  Most Popular
                </div>
              )}
              
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                   <div className="p-3 bg-primary rounded-xl text-white shadow-lg inline-block">
                    {service.icon}
                   </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <div className="text-3xl font-bold text-primary mb-6">{service.price}</div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-white/70 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant={service.highlight ? "glow" : "outline"} className="w-full" asChild>
                  <Link href="#booking">
                    Book Service
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
    </section>
  )
}
