import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "The most comfortable dental experience I've ever had. The team explained everything and my kids actually look forward to their checkups now!",
    name: "Arif Nabizada.",
    detail: "Patient since 2026",
  },
  {
    quote:
      "I was nervous about getting implants, but Dr. Bakhtar made the whole process painless and easy. My smile has never looked better.",
    name: "Omar.",
    detail: "Implant patient",
  },
  {
    quote:
      "Clean, modern, and friendly. They fit me in for an emergency appointment the same day. Highly recommend this clinic to anyone.",
    name: "Meda Nazari.",
    detail: "Emergency patient",
  },
]

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Patient Reviews</span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Smiles we&apos;re proud of
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="h-8 w-8 text-primary/30" aria-hidden="true" />
              <div className="mt-3 flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <span className="block font-semibold text-foreground">{t.name}</span>
                <span className="text-sm text-muted-foreground">{t.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
