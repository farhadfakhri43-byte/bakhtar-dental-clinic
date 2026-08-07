import Image from "next/image"
import { Check } from "lucide-react"

const highlights = [
  "State-of-the-art equipment and sterilization",
  "Transparent pricing with flexible payment plans",
  "Warm, judgement-free and family-friendly team",
  "Same-day emergency appointments available",
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2">
        <div className="relative order-last lg:order-first">
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/5">
            <Image
              src="/images/happy-patient.png"
              alt="A happy patient with a healthy smile at Bakhtar Dental Clinic"
              width={640}
              height={640}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">About the Clinic</span>
          <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Compassionate dentistry you can trust
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            At Bakhtar Dental Clinic, we believe everyone deserves a healthy, confident smile. For over 15 years, our
            dedicated team has provided personalized dental care in a modern, welcoming space designed to put you at
            ease from the moment you walk in.
          </p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            We take the time to listen, explain your options clearly, and build a treatment plan that fits your needs
            and budget — no surprises, just honest care.
          </p>

          <ul className="mt-2 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-4 w-4" />
                </span>
                <span className="text-sm leading-relaxed text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
