import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import g01 from "@/assets/photos/events/gallery-01.jpg";
import g05 from "@/assets/photos/events/gallery-05.jpg";
import g12 from "@/assets/photos/events/gallery-12.jpg";
import g13 from "@/assets/photos/events/gallery-13.jpg";
import g19 from "@/assets/photos/events/gallery-19.jpg";
import p01 from "@/assets/photos/events/online-pitching-01.jpg";
import p03 from "@/assets/photos/events/online-pitching-03.jpg";
import p04 from "@/assets/photos/events/online-pitching-04.jpg";
import { PageHead, PeopleGrid, SectionTitle } from "@/components/blocks";
import { FinalistsIndex } from "@/components/finalists-index";
import { Reveal } from "@/components/reveal";
import { judges } from "@/data/people";
import { milestones2026 } from "@/data/programme";

export const metadata: Metadata = {
  title: "TIC 2026: the first edition",
  description:
    "How the first NCDMB Tech Innovation Challenge ran, from the September 2025 workshop to incubation: the 15 finalists, the judging panel and photos.",
  alternates: { canonical: "/2026" },
};

const workshop = [
  { src: g13, alt: "Dignitaries and participants on stage at the TIC Workshop, Port Harcourt" },
  { src: g19, alt: "Workshop participants gathered outside the venue" },
  { src: g01, alt: "Guests at the Workshop backdrop" },
  { src: g05, alt: "Guests at the Workshop backdrop" },
  { src: g12, alt: "Guests at the Workshop backdrop" },
];
const judgingPhotos = [
  { src: p01, alt: "The judging panel with NCDMB officials at NCDMB Towers" },
  { src: p03, alt: "The judging room during online pitches" },
  { src: p04, alt: "Officials beside the TIC 2026 banner" },
];

export default function Edition2026() {
  return (
    <>
      <PageHead
        title="TIC 2026: the first edition"
        lead="From a stakeholder workshop in Port Harcourt in September 2025 to incubation for the winners in November 2026. Fifteen finalist teams, an expert judging panel, and a programme that runs again in 2027."
      >
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <a href="#finalists" className="link-arrow text-gold">Finalists</a>
          <a href="#timeline" className="link-arrow text-white">Timeline</a>
          <a href="#judges" className="link-arrow text-white">Judges</a>
          <a href="#photos" className="link-arrow text-white">Photos and video</a>
        </div>
      </PageHead>

      <section id="timeline" aria-labelledby="timeline-h" className="scroll-mt-24 py-20 sm:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[20rem_1fr]">
          <div>
            <SectionTitle id="timeline-h">How it ran</SectionTitle>
            <p className="mt-4 text-ink-soft">Every stage of the 2026 edition is now complete.</p>
          </div>
          <ol className="border-l-2 border-forest">
            {milestones2026.map((m) => (
              <li key={m.title} className="relative grid gap-1 pb-10 pl-8 last:pb-0 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <span aria-hidden className="absolute -left-[7px] top-1.5 size-3 bg-gold" />
                <p className="font-display font-black text-green">{m.when}</p>
                <div>
                  <h3 className="text-xl font-black text-forest">{m.title}</h3>
                  {m.where && <p className="mt-1 text-sm font-bold text-ink-mute">{m.where}</p>}
                  <p className="mt-2 max-w-[60ch] text-ink-soft">{m.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="finalists" aria-labelledby="finalists-h" className="scroll-mt-24 bg-mint py-20 sm:py-24">
        <div className="wrap">
          <SectionTitle id="finalists-h">The 15 finalists</SectionTitle>
          <p className="mt-4 max-w-[60ch] text-ink-soft">
            The teams that reached the Finale on 10–12 August 2026 and competed through three rounds of live judging for
            a place in the top three.
          </p>
          <div className="mt-10 bg-white p-4 sm:p-8">
            <FinalistsIndex />
          </div>
        </div>
      </section>

      <section id="judges" aria-labelledby="judges-h" className="scroll-mt-24 py-20 sm:py-24">
        <div className="wrap">
          <SectionTitle id="judges-h">The judging panel</SectionTitle>
          <p className="mt-4 max-w-[60ch] text-ink-soft">
            Practitioners from industry, academia and Nigeria&apos;s innovation centres assessed every pitch.
          </p>
          <div className="mt-12">
            <PeopleGrid people={judges} columns={3} />
          </div>
        </div>
      </section>

      <section id="photos" aria-labelledby="photos-h" className="scroll-mt-24 bg-forest-deep py-20 text-white sm:py-24">
        <div className="wrap">
          <h2 id="photos-h" className="text-3xl font-black sm:text-[2.6rem]">Photos and video</h2>

          <h3 className="mt-12 font-display text-xl font-black text-gold">Workshop, Port Harcourt, 23 September 2025</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr]">
            <Reveal className="relative aspect-[4/3] lg:row-span-2 lg:aspect-auto">
              <video
                controls
                preload="none"
                poster="/media/workshop-poster.jpg"
                className="absolute inset-0 size-full bg-black object-cover"
              >
                <source src="/media/event-highlight.mp4" type="video/mp4" />
              </video>
            </Reveal>
            {workshop.slice(0, 2).map((p) => (
              <Reveal key={p.src.src} className="relative aspect-[4/3]">
                <Image src={p.src} alt={p.alt} fill placeholder="blur" sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
              </Reveal>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {workshop.slice(2).map((p) => (
              <div key={p.src.src} className="relative aspect-square">
                <Image src={p.src} alt={p.alt} fill placeholder="blur" sizes="33vw" className="object-cover" />
              </div>
            ))}
          </div>

          <h3 className="mt-16 font-display text-xl font-black text-gold">Physical judging, NCDMB Towers, July 2026</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal className="relative aspect-[4/3] sm:col-span-2">
              <video
                controls
                preload="none"
                poster="/media/judging-poster.jpg"
                className="absolute inset-0 size-full bg-black object-cover"
              >
                <source src="/media/online-pitching.mp4" type="video/mp4" />
              </video>
            </Reveal>
            {judgingPhotos.map((p) => (
              <div key={p.src.src} className="relative aspect-[4/3]">
                <Image src={p.src} alt={p.alt} fill placeholder="blur" sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="wrap flex flex-wrap items-center justify-between gap-6 border-y-2 border-forest py-10">
          <p className="max-w-[30ch] font-display text-2xl font-black text-forest sm:text-3xl">
            Working on something the industry needs? TIC 2027 is confirmed.
          </p>
          <Link href="/#tic-2027" className="btn-gold">
            Register interest <ArrowRight aria-hidden className="size-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
