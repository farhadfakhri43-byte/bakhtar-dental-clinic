"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const info = [
  {
    icon: MapPin,
    label: "Visit us",
    value: "Shahr-e-Naw, Ansari Square,Kabul-Afghanistan",
  },
  {
    icon: Phone,
    label: "Call us",
    value: "+93 780 895 290",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "bakhtardentalclinic1@gmail.com",
  },
  {
    icon: Clock,
    label: "Opening hours",
    value: "Sat – Thu, 8:00 AM – 6:00 PM",
  },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Book a Visit</span>
            <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Schedule your appointment today
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Ready for a healthier smile? Fill out the form and our team will get back to you to confirm your visit, or
              reach us directly using the details below.
            </p>

            <ul className="mt-2 grid gap-4 sm:grid-cols-2">
              {info.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="text-sm font-medium text-foreground">{item.value}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            {submitted ? (
              <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-7 w-7" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">Thank you!</h3>
                <p className="mt-2 max-w-sm text-pretty leading-relaxed text-muted-foreground">
                  Your appointment request has been received. Our team will contact you shortly to confirm your visit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="name" label="Full name" type="text" placeholder="Jane Doe" required />
                  <Field id="phone" label="Phone" type="tel" placeholder="(555) 000-0000" required />
                </div>
                <Field id="email" label="Email" type="email" placeholder="jane@email.com" required />
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-sm font-medium text-foreground">
                    Service needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="h-11 rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>General checkup &amp; cleaning</option>
                    <option>Cosmetic dentistry</option>
                    <option>Orthodontics</option>
                    <option>Dental implants</option>
                    <option>Pediatric care</option>
                    <option>Emergency visit</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us how we can help..."
                    className="rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <Button type="submit" size="lg" className="mt-1 w-full">
                  Request Appointment
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  type,
  placeholder,
  required,
}: {
  id: string
  label: string
  type: string
  placeholder: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-11 rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  )
}
