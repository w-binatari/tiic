import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import chinwah from "@/assets/photos/eicl/eicl-ceo-chinwah.jpg";
import workshop from "@/assets/photos/events/gallery-13.jpg";
import { PageHead, PeopleGrid, SectionTitle } from "@/components/blocks";
import { Reveal } from "@/components/reveal";
import { leadership } from "@/data/people";
import { offers, thematicAreas } from "@/data/programme";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About TIC",
  description:
    "Why NCDMB runs the Tech Innovation Challenge, how the research-to-commercialisation journey works, the thematic areas, and who delivers it.",
  alternates: { canonical: "/about" },
};

const journey = [
  {
    title: "Workshop",
    text: "Prospective participants learn the Board's priority challenge areas, the evaluation criteria and what the programme offers, and meet experts and mentors.",
  },
  {
    title: "Call for applications",
    text: "Researchers, startups, research institutions, academia, industry suppliers and the public submit proposals in NCDMB's thematic areas.",
  },
  {
    title: "Screening and judging",
    text: "Proposals are screened, then shortlisted innovators pitch live to an expert panel.",
  },
  {
    title: "Mentorship and bootcamp",
    text: "Finalists refine their solution, business model and pitch with mentors, then attend the Research to Commercialisation Bootcamp.",
  },
  {
    title: "Finale",
    text: "Finalists compete through live judging rounds for a place in the top three.",
  },
  {
    title: "Incubation",
    text: "Winners receive incubation support, investor engagement and a route to commercialisation in the NCDMB innovation ecosystem.",
  },
];

const eiclServices = [
  "Entrepreneurship and digital skills training (Tech IDEAS, 3MTT, corporate upskilling)",
  "Technical and vocational skills training",
  "NCDMB human capital development training plans",
  "Research to commercialisation: validation, prototyping, investor readiness",
  "Business incubation and management",
  "Business linkages, market access and R&D commercialisation",
  "Leadership development",
];

export default function About() {
  return (
    <>
      <PageHead
        title="Good research shouldn't stop at the paper"
        lead="NCDMB set up the Tech Innovation Challenge to close the gap between Nigerian research and commercial success. It gives innovators the structure, mentorship, industry contact and support they need to turn a promising idea into a solution the energy sector can deploy."
      />

      <section aria-labelledby="why" className="grid lg:grid-cols-2">
        <div className="flex items-center px-4 py-16 sm:px-12 lg:px-16 lg:py-24">
          <div className="max-w-[34rem]">
            <SectionTitle id="why">Why it exists</SectionTitle>
            <div className="prose-tic mt-6 text-ink-soft">
              <p>
                Innovation has the most impact when it leaves the laboratory. TIC brings researchers, startups,
                academia, industry professionals, technology developers and entrepreneurs together to solve real
                challenges facing the energy sector.
              </p>
              <p>
                The aim is a thriving ecosystem where indigenous research becomes commercially successful technology:
                technology that strengthens Nigeria&apos;s oil and gas industry, grows the economy and lets Nigerian
                innovators compete globally.
              </p>
            </div>
          </div>
        </div>
        <Reveal className="relative min-h-[20rem]">
          <Image
            src={workshop}
            alt="Dignitaries and participants on stage at the TIC Workshop in Port Harcourt"
            fill
            placeholder="blur"
            sizes="(min-width:1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
      </section>

      <section aria-labelledby="how" className="bg-mint py-20 sm:py-24">
        <div className="wrap">
          <SectionTitle id="how">How the programme works</SectionTitle>
          <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {journey.map((s) => (
              <li key={s.title} className="border-t-2 border-forest pt-5">
                <h3 className="text-xl font-black text-forest">{s.title}</h3>
                <p className="mt-2 text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="areas" className="py-20 sm:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <div>
            <SectionTitle id="areas">Thematic areas</SectionTitle>
            <p className="mt-4 max-w-[48ch] text-ink-soft">
              Proposals must answer present or future industry needs in one of these areas.
            </p>
            <ul className="mt-8 border-t-2 border-forest">
              {thematicAreas.map((t) => (
                <li key={t} className="border-b border-mint-line py-4 font-display text-lg font-extrabold text-forest">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-black text-forest sm:text-[2.6rem]">What innovators get</h2>
            <dl className="mt-8 border-t-2 border-forest">
              {offers.map((o) => (
                <div key={o.title} className="border-b border-mint-line py-5">
                  <dt className="font-display text-lg font-extrabold text-forest">{o.title}</dt>
                  <dd className="mt-1 text-ink-soft">{o.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section aria-labelledby="leaders" className="bg-mint py-20 sm:py-24">
        <div className="wrap">
          <SectionTitle id="leaders">Leadership and dignitaries</SectionTitle>
          <div className="mt-12">
            <PeopleGrid people={leadership} />
          </div>
        </div>
      </section>

      <section aria-labelledby="eicl" className="py-20 sm:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <SectionTitle id="eicl">Delivered by EICL</SectionTitle>
            <div className="prose-tic mt-6 text-ink-soft">
              <p>
                Entrepreneurship &amp; Innovation Centre Limited (EICL) is an ISO 9001:2015 certified human capital
                development and management consultancy in Port Harcourt. It facilitated the Tech Innovation Workshop
                and is the implementing partner for the Tech Innovation Challenge.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-5">
              <Image src={chinwah} alt="" placeholder="blur" sizes="96px" className="size-24 object-cover object-top" />
              <div>
                <p className="font-display font-black text-forest">Engr. Chika Chinwah</p>
                <p className="text-sm text-ink-mute">CEO, Entrepreneurship &amp; Innovation Centre Limited</p>
              </div>
            </div>
            <a href={site.eicl} className="link-arrow mt-8 text-green">
              eicng.com <ArrowUpRight aria-hidden className="size-4" />
            </a>
          </div>
          <div>
            <h3 className="font-display text-sm font-black uppercase tracking-[0.14em] text-green">What EICL does</h3>
            <ul className="mt-4 border-t-2 border-forest">
              {eiclServices.map((s) => (
                <li key={s} className="border-b border-mint-line py-3.5 text-ink">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="launchpad" className="bg-forest text-white">
        <div className="wrap flex flex-wrap items-center justify-between gap-8 py-16">
          <div className="max-w-[52ch]">
            <h2 id="launchpad" className="text-3xl font-black">Tech IDEAS – TIC Launchpad</h2>
            <p className="mt-3 text-white/80">
              Between editions, the online Launchpad offers capacity-building, mentorship and tools to help innovators
              turn research into market-ready solutions, all year round.
            </p>
          </div>
          <a href={site.launchpad} className="btn-gold">
            Open the Launchpad <ArrowUpRight aria-hidden className="size-5" />
          </a>
        </div>
      </section>
    </>
  );
}
