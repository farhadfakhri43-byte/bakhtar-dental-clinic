import Image from "next/image"
import { CalendarCheck, Phone, ShieldCheck, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "5+", label: "Years of care" },
  { value: "10k+", label: "Happy patients" },
  { value: "4.9", label: "Average rating", star: true },
]

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(60% 55% at 85% 10%, rgba(212,175,55,0.16), transparent), radial-gradient(45% 45% at 0% 90%, rgba(212,175,55,0.10), transparent)",
        }}
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-secondary-foreground">
            <ShieldCheck className="h-4 w-4 text-gold" />
            Advanced &amp; luxurious dental care
          </span>

          <h1 className="text-balance font-serif text-4xl font-bold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Your Smile, <span className="text-gold">Our Priority</span>
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Advanced dental care with modern technology and professional specialists. At Bakhtar Dental Clinic in
            Kabul, we combine world-class treatments with a calm, elegant environment designed around your comfort.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button render={<a href="#contact" />} nativeButton={false} size="lg" className="h-12 px-6 text-base">
              <CalendarCheck className="h-5 w-5" />
              Book Appointment
            </Button>
            <Button
              render={<a href="tel:+93780895290" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="h-12 border-foreground/20 px-6 text-base"
            >
              <Phone className="h-5 w-5" />
              +93 780 895 290
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-8">
                {i > 0 && <div className="hidden h-10 w-px bg-border sm:block" aria-hidden="true" />}
                <div className="flex flex-col">
                  <span className="flex items-center gap-1 font-serif text-2xl font-bold text-foreground">
                    {s.value}
                    {s.star && <Star className="h-4 w-4 fill-gold text-gold" />}
                  </span>
                  <span className="text-sm text-muted-foreground">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 shadow-2xl shadow-black/10">
            <Image
              src="/images/hero-team.png"
              alt="The professional dental team at Bakhtar Dental Clinic"
              width={760}
              height={760}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card p-4 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 text-gold">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground">Painless treatments</span>
                <span className="text-xs text-muted-foreground">Modern sedation options</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
