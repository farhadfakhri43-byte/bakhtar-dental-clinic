import { Bone, Smile, Activity, Sparkles, Layers, Baby, Scissors, ScanLine } from "lucide-react"

const services = [
  {
    icon: Bone,
    title: "Dental Implants",
    description: "Permanent, natural-looking tooth replacements that restore full function and a confident smile.",
  },
  {
    icon: Smile,
    title: "Orthodontics",
    description: "Braces and clear aligners that gently straighten teeth and correct your bite at any age.",
  },
  {
    icon: Activity,
    title: "Root Canal (RCT)",
    description: "Comfortable, precise root canal therapy to save damaged teeth and relieve pain.",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description: "Professional whitening treatments for a brighter, radiant smile in a single visit.",
  },
  {
    icon: Layers,
    title: "Dental Veneers",
    description: "Custom porcelain veneers that transform the shape, color, and symmetry of your smile.",
  },
  {
    icon: Baby,
    title: "Pediatric Dentistry",
    description: "Gentle, kid-friendly care in a calm environment that makes every young patient feel at ease.",
  },
  {
    icon: Scissors,
    title: "Oral Surgery",
    description: "Safe extractions and surgical procedures performed by experienced specialists.",
  },
  {
    icon: ScanLine,
    title: "Digital X-Ray",
    description: "Low-radiation digital imaging for fast, accurate diagnosis and precise treatment planning.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-card py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Our Services</span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Complete dental care under one roof
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            From routine checkups to advanced cosmetic and surgical treatments, Bakhtar Dental Clinic offers a full
            range of specialist services for every member of your family.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl hover:shadow-black/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
