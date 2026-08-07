import Image from "next/image"

const team = [
  {
    name: "Dr. Omid ",
    role: "",
    image: "/images/dentist-1.png",
    bio: "General & restorative dentistry with over 15 years of experience.",
  },
  {
    name: "Dr. Munir",
    role: "",
    image: "/images/dentist-2.png",
    bio: "Specialist in veneers, whitening, and complete smile makeovers.",
  },
  {
    name: "Dr. Fawzia",
    role: "",
    image: "/images/dentist-3.png",
    bio: "Braces and clear aligner treatment for children and adults.",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="bg-secondary/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Meet the Team</span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Experienced dentists who care
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Our friendly, highly trained specialists are committed to making every visit comfortable and stress-free.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div key={member.name} className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={`Portrait of ${member.name}, ${member.role}`}
                  width={480}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
