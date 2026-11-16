import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import stage from "@/assets/photos/events/gallery-10.jpg";
import judging from "@/assets/photos/events/online-pitching-02.jpg";
import tower from "@/assets/photos/ncdmb-tower.jpeg";
import { FinalistsIndex } from "@/components/finalists-index";
import { InterestForm } from "@/components/forms";
import { Reveal } from "@/components/reveal";
import { milestones2026, thematicAreas } from "@/data/programme";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      {/* Hero: the Workshop stage, NCDMB green duotone */}
      <section className="relative isolate flex min-h-[min(46rem,calc(100svh-4.7rem))] items-end overflow-hidden bg-forest-deep text-white">
        <Image
          src={stage}
          alt=""
          fill
          preload
          placeholder="blur"
          sizes="100vw"
          quality={80}
          className="-z-20 object-cover object-[62%_78%] grayscale brightness-[1.35] contrast-[1.1]"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-green-bright mix-blend-multiply" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,color-mix(in_srgb,var(--color-forest-deep)_92%,transparent)_0%,color-mix(in_srgb,var(--color-forest-deep)_70%,transparent)_38%,transparent_72%),linear-gradient(to_top,color-mix(in_srgb,var(--color-forest-deep)_80%,transparent)_0%,transparent_35%)]"
        />
        <div className="wrap pb-14 pt-32 sm:pb-20">
          <h1 className="max-w-[14ch] text-[clamp(2.75rem,8.4vw,6rem)] font-black leading-[0.95] tracking-[-0.04em]">
            Nigerian research, built for industry.
          </h1>
          <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-white/85 sm:text-xl">
            The NCDMB Tech Innovation Challenge takes technologies from Nigerian universities, research institutes and
            young founders to market in oil, gas and their linkage sectors. Fifteen finalists completed the first
            edition in 2026. TIC 2027 is confirmed.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Link href="#tic-2027" className="btn-gold">
              Register interest for TIC 2027 <ArrowRight aria-hidden className="size-5" />
            </Link>
            <Link href="#finalists" className="link-arrow text-white">
              Meet the 15 finalists
            </Link>
          </div>
        </div>
      </section>

      {/* TIC 2026 in one ruled line */}
      <section aria-labelledby="journey" className="bg-mint py-16 sm:py-20">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="journey" className="max-w-[20ch] text-3xl font-black text-forest sm:text-4xl">
              TIC 2026, from workshop to incubation
            </h2>
            <Link href="/2026" className="link-arrow text-green">
              The full 2026 edition <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
          <ol className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t-2 border-forest pt-6 sm:grid-cols-4 lg:grid-cols-8 lg:gap-x-4">
            {milestones2026.map((m) => (
              <li key={m.title} className="relative">
                <span aria-hidden className="absolute -top-[1.85rem] left-0 size-3 bg-gold ring-4 ring-mint" />
                <p className="font-display text-sm font-black text-green">{m.when}</p>
                <p className="mt-1.5 font-display text-[0.95rem] font-extrabold leading-snug text-forest">{m.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What TIC does: 50/50 split */}
      <section aria-labelledby="what" className="grid lg:grid-cols-2">
        <Reveal className="relative min-h-[22rem] lg:min-h-full">
          <Image
            src={judging}
            alt="Judges assessing live pitches at NCDMB Towers, Yenagoa, July 2026"
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <div className="flex items-center bg-white px-4 py-16 sm:px-12 lg:px-16 lg:py-24">
          <div className="max-w-[34rem]">
            <h2 id="what" className="text-3xl font-black text-forest sm:text-[2.6rem]">
              From the lab bench to the rig floor
            </h2>
            <div className="prose-tic mt-6 text-ink-soft">
              <p>
                Good research too often stops at the paper. TIC gives Nigerian innovators the structure to finish the
                job: screening against real industry problems, live pitching to an expert panel, mentorship, a
                commercialisation bootcamp and, for the winners, incubation.
              </p>
              <p>
                It is a flagship programme of the Nigerian Content Development &amp; Monitoring Board, delivered by
                Entrepreneurship &amp; Innovation Centre Ltd, and open to universities, research institutes, startups
                and industry suppliers.
              </p>
            </div>
            <Link href="/about" className="link-arrow mt-8 text-green">
              How the programme works <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Signature: the finalists index */}
      <section id="finalists" aria-labelledby="finalists-h" className="py-20 sm:py-28">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-end">
            <h2 id="finalists-h" className="text-4xl font-black text-forest sm:text-5xl">
              Fifteen technologies made it to the finale
            </h2>
            <p className="max-w-[56ch] text-ink-soft lg:justify-self-end">
              Each team came through screening, live judging, mentorship and the bootcamp, then competed through three
              rounds of live judging at NCDMB Towers in August 2026. Open any one to read what they built.
            </p>
          </div>
          <div className="mt-12">
            <FinalistsIndex />
          </div>
        </div>
      </section>

      {/* TIC 2027 */}
      <section id="tic-2027" aria-labelledby="tic-2027-h" className="scroll-mt-24 bg-forest text-white">
        <div className="wrap grid gap-12 py-20 sm:py-24 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <h2 id="tic-2027-h" className="text-4xl font-black sm:text-5xl">
              TIC 2027 is confirmed.
            </h2>
            <p className="mt-5 max-w-[46ch] text-lg text-white/80">
              The next call for applications is planned for December 2026. Leave your details and we&apos;ll email you
              the moment it opens.
            </p>
            <h3 className="mt-10 font-display text-sm font-black uppercase tracking-[0.14em] text-gold">
              Thematic areas
            </h3>
            <ul className="mt-4 grid gap-x-8 sm:grid-cols-2">
              {thematicAreas.map((t) => (
                <li key={t} className="border-b border-white/15 py-3 font-display font-bold">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="self-start border-t-4 border-gold text-ink">
            <InterestForm />
          </div>
        </div>
      </section>

      {/* NCDMB */}
      <section aria-labelledby="ncdmb" className="grid bg-white lg:grid-cols-[1fr_1fr]">
        <div className="order-2 flex items-center px-4 py-16 sm:px-12 lg:order-1 lg:px-16 lg:py-24">
          <div className="max-w-[34rem]">
            <h2 id="ncdmb" className="text-3xl font-black text-forest sm:text-[2.6rem]">
              Backed by the Nigerian Content Development &amp; Monitoring Board
            </h2>
            <p className="mt-6 text-ink-soft">
              Established in 2010 by the Nigerian Oil and Gas Industry Content Development (NOGICD) Act, NCDMB guides,
              monitors and implements local content development across Nigeria&apos;s oil and gas industry. Its research
              and development mandate is to build in-country R&amp;D capability, and TIC is one of the ways it does that.
            </p>
            <a href={site.ncdmb} className="link-arrow mt-8 text-green">
              Visit ncdmb.gov.ng <ArrowUpRight aria-hidden className="size-4" />
            </a>
          </div>
        </div>
        <Reveal className="relative order-1 min-h-[20rem] lg:order-2 lg:min-h-[34rem]">
          <Image
            src={tower}
            alt="The Nigerian Content Tower, NCDMB headquarters in Yenagoa"
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[50%_35%]"
          />
        </Reveal>
      </section>
    </>
  );
}
