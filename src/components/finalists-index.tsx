"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus } from "lucide-react";
import { finalists, sectors, type Sector } from "@/data/finalists";

export function FinalistsIndex({ limit }: { limit?: number }) {
  const [sector, setSector] = useState<Sector | "all">("all");
  const [open, setOpen] = useState<string | null>(null);

  const list = finalists.filter((f) => sector === "all" || f.sector === sector);
  const shown = limit ? list.slice(0, limit) : list;
  const label = (id: Sector) => sectors.find((s) => s.id === id)!.label;

  return (
    <div>
      <div role="group" aria-label="Filter by sector" className="flex flex-wrap gap-2">
        {[{ id: "all" as const, label: "All 15" }, ...sectors].map((s) => {
          const count = s.id === "all" ? finalists.length : finalists.filter((f) => f.sector === s.id).length;
          const active = sector === s.id;
          return (
            <button
              key={s.id}
              type="button"
              aria-pressed={active}
              onClick={() => {
                setSector(s.id);
                setOpen(null);
              }}
              className="min-h-11 border border-forest/20 px-4 text-sm font-bold text-forest transition-colors hover:border-forest aria-pressed:border-forest aria-pressed:bg-forest aria-pressed:text-white"
            >
              {s.label}
              {s.id !== "all" && <span className="ml-1.5 opacity-60">{count}</span>}
            </button>
          );
        })}
      </div>

      <ul className="mt-8 border-t-2 border-forest">
        {shown.map((f) => {
          const isOpen = open === f.slug;
          const panel = `finalist-${f.slug}`;
          return (
            <li key={f.slug} id={f.slug} className="border-b border-mint-line">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panel}
                onClick={() => setOpen(isOpen ? null : f.slug)}
                className="group grid w-full grid-cols-[3.5rem_1fr_auto] items-center gap-4 py-4 text-left sm:grid-cols-[4rem_minmax(0,1.1fr)_minmax(0,1.6fr)_auto] sm:gap-6"
              >
                <Image
                  src={f.photo}
                  alt=""
                  sizes="64px"
                  className="aspect-square w-14 object-cover object-top grayscale-[35%] transition group-hover:grayscale-0 sm:w-16"
                />
                <span className="min-w-0">
                  <span className="block font-display text-[1.05rem] font-black leading-tight text-forest">{f.name}</span>
                  <span className="mt-1 block truncate text-sm text-ink-mute">{f.org || label(f.sector)}</span>
                </span>
                <span className="col-span-2 col-start-2 row-start-2 line-clamp-2 font-display text-[0.95rem] font-bold leading-snug text-ink sm:col-span-1 sm:col-start-3 sm:row-start-1 sm:text-base">
                  {f.project}
                </span>
                <span
                  aria-hidden
                  className="col-start-3 row-start-1 grid size-10 place-items-center border border-forest/20 text-forest transition group-hover:border-forest group-aria-expanded:rotate-45 group-aria-expanded:bg-gold sm:col-start-4"
                >
                  <Plus className="size-5" />
                </span>
              </button>

              <div id={panel} hidden={!isOpen} className="pb-8">
                <div className="grid gap-6 bg-mint p-5 sm:grid-cols-[14rem_1fr] sm:p-8">
                  <Image
                    src={f.photo}
                    alt={f.name}
                    sizes="(min-width: 640px) 224px, 100vw"
                    className="aspect-[4/5] w-full max-w-56 object-cover object-top"
                  />
                  <div className="max-w-[68ch]">
                    <p className="text-sm font-bold uppercase tracking-[0.12em] text-green">{label(f.sector)}</p>
                    <h3 className="mt-2 text-2xl font-black text-forest">{f.project}</h3>
                    {f.org && <p className="mt-2 font-bold text-ink-soft">{f.org}</p>}
                    <p className="mt-4 leading-relaxed text-ink">{f.detail || f.summary}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
