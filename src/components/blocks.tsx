import Image from "next/image";
import type { Person } from "@/data/people";

export function PageHead({ title, lead, children }: { title: string; lead: string; children?: React.ReactNode }) {
  return (
    <section className="bg-forest text-white">
      <div className="wrap pb-14 pt-16 sm:pb-20 sm:pt-24">
        <h1 className="max-w-[18ch] text-[clamp(2.5rem,6.5vw,4.75rem)] font-black leading-[0.98] tracking-[-0.035em]">
          {title}
        </h1>
        <p className="mt-6 max-w-[58ch] text-lg leading-relaxed text-white/80">{lead}</p>
        {children}
      </div>
    </section>
  );
}

export function PeopleGrid({ people, columns = 4 }: { people: Person[]; columns?: 3 | 4 }) {
  return (
    <ul
      className={`grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 ${columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}
    >
      {people.map((p) => (
        <li key={p.name}>
          <Image
            src={p.photo}
            alt={p.name}
            placeholder="blur"
            sizes="(min-width: 1024px) 280px, (min-width: 640px) 33vw, 50vw"
            className="aspect-[4/5] w-full bg-mint object-cover object-top"
          />
          <p className="mt-4 font-display font-black leading-snug text-forest">{p.name}</p>
          <p className="mt-1 text-sm leading-snug text-ink-mute">{p.role}</p>
        </li>
      ))}
    </ul>
  );
}

export function SectionTitle({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <h2 id={id} className={`text-3xl font-black text-forest sm:text-[2.6rem] ${className}`}>
      {children}
    </h2>
  );
}
