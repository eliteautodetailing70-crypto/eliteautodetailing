"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, Car } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { format } from "date-fns"
import { Button } from "@/components/ui/Button"
import "react-day-picker/dist/style.css"

const services = ["Exterior Wash", "Interior Cleaning", "Full Detail Package"]
const timeSlots = ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"]

export function Booking() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedService, setSelectedService] = useState(services[0])
  const [selectedTime, setSelectedTime] = useState(timeSlots[0])
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [vehicle, setVehicle] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const formattedDate = date ? format(date, "PPP") : "N/A"
    const message = `Hi Elite Auto Detailing, I'd like to book a ${selectedService} for ${name} on ${formattedDate} at ${selectedTime} for my ${vehicle}.`
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/27671472681?text=${encodedMessage}`
    
    setIsSubmitted(true)
    
    // Small delay to allow user to see the success state before redirecting
    setTimeout(() => {
      window.open(whatsappUrl, "_blank")
    }, 1500)
  }

  if (isSubmitted) {
    return (
      <section id="booking" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto glass p-12 rounded-3xl text-center"
          >
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary mx-auto mb-8">
              <Sparkles size={40} />
            </div>
            <h2 className="text-4xl font-bold mb-4">THANK YOU, {name.split(' ')[0]}!</h2>
            <p className="text-white/70 mb-8 text-lg">
              Your booking details have been captured. We are redirecting you to WhatsApp to finalize your appointment.
            </p>
            <Button variant="glow" onClick={() => setIsSubmitted(false)}>
              Make Another Booking
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <div className="lg:w-1/3">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6"
            >
              BOOK YOUR <span className="text-primary italic">SESSION</span>
            </motion.h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Ready to give your vehicle the royal treatment? Select your preferred service, date, and time. We'll handle the rest.
            </p>
            
            <div className="space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                        <Smartphone size={24} />
                    </div>
                    <div>
                        <div className="text-xs text-white/50 uppercase tracking-widest font-bold">Call Us</div>
                        <div className="text-lg font-bold text-white">067 147 2681</div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="text-xs text-white/50 uppercase tracking-widest font-bold">Email</div>
                        <div className="text-lg font-bold text-white">eliteautodetailing70@gmail.com</div>
                    </div>
                </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 glass p-8 md:p-12 rounded-3xl"
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Service Selection */}
                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 flex items-center gap-2">
                    <Car size={14} className="text-primary" />
                    Select Service
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`text-left px-6 py-4 rounded-xl border transition-all duration-300 ${
                          selectedService === service 
                            ? "bg-primary/20 border-primary text-white shadow-neon/10" 
                            : "bg-surface/50 border-white/5 text-white/60 hover:border-primary/30"
                        }`}
                      >
                        <span className="text-sm font-bold uppercase tracking-wider">{service}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Date Picker */}
                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 flex items-center gap-2">
                    <CalendarIcon size={14} className="text-primary" />
                    Select Date
                  </label>
                  <div className="p-4 bg-surface/50 rounded-2xl border border-white/5 inline-block w-full">
                    <DayPicker
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="text-white custom-daypicker"
                      modifiersStyles={{
                        selected: { backgroundColor: '#7B2CBF', color: 'white' }
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Personal Details & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div className="space-y-6">
                    <div className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 flex items-center gap-2">
                            <Clock size={14} className="text-primary" />
                            Select Time
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                            {timeSlots.map((time) => (
                                <button
                                    key={time}
                                    type="button"
                                    onClick={() => setSelectedTime(time)}
                                    className={`text-center py-2 rounded-lg border text-xs font-bold transition-all duration-300 ${
                                        selectedTime === time 
                                            ? "bg-primary border-primary text-white" 
                                            : "bg-surface/50 border-white/5 text-white/60 hover:border-primary/30"
                                    }`}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 flex items-center gap-2">
                            <User size={14} className="text-primary" />
                            Full Name
                        </label>
                        <input 
                            type="text" 
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name" 
                            className="w-full bg-surface/50 border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 flex items-center gap-2">
                            <Phone size={14} className="text-primary" />
                            Phone Number
                        </label>
                        <input 
                            type="tel" 
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="012 345 6789" 
                            className="w-full bg-surface/50 border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                    <div className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 flex items-center gap-2">
                            <Car size={14} className="text-primary" />
                            Vehicle Model
                        </label>
                        <input 
                            type="text" 
                            required
                            value={vehicle}
                            onChange={(e) => setVehicle(e.target.value)}
                            placeholder="e.g. BMW M4" 
                            className="w-full bg-surface/50 border border-white/5 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                </div>
              </div>

              <div className="pt-4">
                <Button type="submit" variant="glow" className="w-full h-16 text-lg">
                  Confirm Booking
                </Button>
                <p className="text-center text-[10px] text-white/40 mt-4 uppercase tracking-[0.2em]">
                   By confirming, you agree to our terms and conditions
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        .custom-daypicker .rdp-month_grid {
          width: 100%;
        }
        .custom-daypicker .rdp-day_button:hover {
          background-color: rgba(123, 44, 191, 0.2);
        }
        .custom-daypicker .rdp-day_button {
            width: 100%;
            height: 40px;
            border-radius: 8px;
        }
        .custom-daypicker .rdp-selected .rdp-day_button {
            background-color: #7B2CBF !important;
        }
      `}</style>
    </section>
  )
}

function Smartphone({ className, size }: { className?: string, size?: number }) {
    return <Phone className={className} size={size} />
}
