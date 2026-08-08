import { Phone, Mail, MapPin } from "lucide-react"
import { ToothIcon } from "@/components/tooth-icon"

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <ToothIcon className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-serif text-lg font-bold tracking-tight text-foreground">Bakhtar</span>
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Dental Clinic
              </span>
            </span>
          </div>
          <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
            Gentle, modern dental care for the whole family. Your comfort and healthy smile are our priority.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground">Quick links</h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-foreground">Get in touch</h3>
          <ul className="mt-4 flex flex-col gap-3">
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <span>Shahr-e-Naw, Ansari Square, Kabul-Afghanistan</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+93780895390" className="transition-colors hover:text-primary">
                0780895290
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:hello@bakhtardental.com" className="transition-colors hover:text-primary">
                Bakhtardentalclinic1@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-5 md:px-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Bakhtar Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
