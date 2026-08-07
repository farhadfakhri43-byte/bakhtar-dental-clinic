"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Team", href: "#team" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3">
      <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-surface-dark ring-1 ring-gold/40">
        <Image
          src="/images/bakhtar-logo.png"
          alt="Bakhtar Dental Clinic logo"
          width={48}
          height={48}
          className="h-full w-full object-contain"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-lg font-bold tracking-tight text-foreground">Bakhtar</span>
        <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.28em] text-gold">Dental Clinic</span>
      </span>
    </a>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden bg-surface-dark text-background/80 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-2 text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-gold" />
              Shahr-e-Naw, Ansari Square, Kabul
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-gold" />
              Daily 9:00 AM – 7:00 PM
            </span>
          </div>
          <a href="tel:+93780895290" className="flex items-center gap-2 transition-colors hover:text-gold">
            <Phone className="h-3.5 w-3.5 text-gold" />
            +93 780 895 290
          </a>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-border/70 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button render={<a href="#contact" />} nativeButton={false} className="h-10 px-5 font-medium">
              Book Appointment
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-b border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+93780895290"
              className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-medium text-foreground"
            >
              <Phone className="h-4 w-4 text-gold" />
              +93 780 895 290
            </a>
            <Button
              render={<a href="#contact" onClick={() => setOpen(false)} />}
              nativeButton={false}
              className="mt-2 mb-3 h-11"
            >
              Book Appointment
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
