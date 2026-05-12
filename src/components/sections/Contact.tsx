"use client"

import { motion } from "framer-motion"
import { MessageCircle, Phone, Instagram, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-surface/10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass p-12 rounded-[40px] border-primary/20 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                STAY <span className="text-primary">CONNECTED</span>
              </h2>
              <p className="text-white/70 mb-10 text-lg leading-relaxed">
                Have questions or need a custom quote? Reach out to us directly via WhatsApp or follow us on Instagram for the latest updates and transformations.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-surface border border-white/5 flex items-center justify-center text-primary group-hover:border-primary/50 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Call Us</div>
                    <div className="text-white font-bold tracking-wider">067 147 2681</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-surface border border-white/5 flex items-center justify-center text-primary group-hover:border-primary/50 transition-colors">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Instagram</div>
                    <div className="text-white font-bold tracking-wider">@elite.auto.detailing07</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                    variant="glow" 
                    className="bg-[#25D366] hover:bg-[#128C7E] border-none text-white h-16 px-10 gap-3"
                    asChild
                >
                  <a href="https://wa.me/27671472681" target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={24} />
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button variant="outline" className="h-16 px-10">
                  Follow on Instagram
                </Button>
              </div>
            </div>

            <div className="lg:w-1/3 w-full">
                <div className="space-y-6">
                    <div className="glass bg-background/40 p-6 rounded-2xl border-white/5 hover:border-primary/30 transition-all group">
                        <div className="flex items-start gap-4">
                            <MapPin className="text-primary mt-1" size={20} />
                            <div>
                                <h4 className="font-bold text-white uppercase text-sm mb-1 tracking-wider">Location</h4>
                                <p className="text-white/50 text-sm">Gauteng, South Africa<br/>Mobile Service Available</p>
                            </div>
                        </div>
                    </div>
                    <div className="glass bg-background/40 p-6 rounded-2xl border-white/5 hover:border-primary/30 transition-all group">
                        <div className="flex items-start gap-4">
                            <Mail className="text-primary mt-1" size={20} />
                            <div>
                                <h4 className="font-bold text-white uppercase text-sm mb-1 tracking-wider">Email</h4>
                                <p className="text-white/50 text-sm">eliteautodetailing70@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-background pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex flex-col items-start mb-6">
                <span className="font-heading text-2xl font-bold text-white tracking-tighter leading-none">
                    ELITE<span className="text-primary">AUTO</span>
                </span>
                <span className="text-[10px] font-medium text-accent tracking-[0.2em] uppercase leading-none mt-1">
                    DETAILING
                </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Providing professional car care services in Gauteng. We bring the showroom shine to your doorstep with our mobile detailing units.
            </p>
            <div className="flex gap-4">
               {[Instagram, MessageCircle, Phone, Mail].map((Icon, i) => (
                   <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary transition-all">
                       <Icon size={18} />
                   </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Gallery", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-white/50 hover:text-primary transition-colors text-sm uppercase tracking-wider">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-8">Services</h4>
            <ul className="space-y-4">
              {["Exterior Wash", "Interior Cleaning", "Full Detail Package", "Paint Correction", "Ceramic Coating"].map((service) => (
                <li key={service}>
                  <span className="text-white/50 text-sm uppercase tracking-wider">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-8">Business Info</h4>
            <div className="space-y-4">
                <div className="text-sm">
                    <span className="text-white/30 uppercase tracking-widest block mb-1">Working Hours</span>
                    <span className="text-white/70">Mon - Sat: 08:00 - 17:00</span>
                </div>
                <div className="text-sm">
                    <span className="text-white/30 uppercase tracking-widest block mb-1">Service Area</span>
                    <span className="text-white/70">Gauteng & Surrounding Areas</span>
                </div>
                <div className="text-sm">
                    <span className="text-white/30 uppercase tracking-widest block mb-1">Phone</span>
                    <span className="text-white/70">067 147 2681</span>
                </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-[10px] uppercase tracking-[0.2em]">
            © {currentYear} Elite Auto Detailing. All rights reserved.
          </p>
          <p className="text-white/30 text-[10px] uppercase tracking-[0.2em]">
            Design by Elite Auto Detailing Team
          </p>
        </div>
      </div>
    </footer>
  )
}
