"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import ticLogo from "@/assets/brand/tic-logo.png";
import { nav } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const bar = useRef<HTMLDivElement>(null);

  // Scroll-progress bar under the header (written straight to the DOM, no re-renders).
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-6">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src={ticLogo}
            alt="NCDMB Tech Innovation Challenge, home"
            className="h-11 w-auto"
            sizes="104px"
            loading="eager"
          />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="nav-link relative py-2 text-ink-soft transition-colors hover:text-green aria-[current=page]:text-green aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-0 aria-[current=page]:after:-bottom-0.5 aria-[current=page]:after:h-0.5 aria-[current=page]:after:bg-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/#tic-2027" className="btn-gold hidden !min-h-11 !px-4 !py-2.5 !text-[0.85rem] lg:inline-flex">
          TIC 2027: register interest
        </Link>

        <button
          type="button"
          className="-mr-2 grid size-11 place-items-center text-forest md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>

      <div className="h-[3px] bg-mint">
        <div ref={bar} className="h-full origin-left scale-x-0 bg-gold" />
      </div>

      <nav
        id="mobile-nav"
        aria-label="Main"
        hidden={!open}
        className="border-t border-mint-line bg-white md:hidden"
      >
        <ul className="wrap py-3">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="nav-link flex min-h-12 items-center border-b border-mint text-ink aria-[current=page]:text-green"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-4 pb-2">
            <Link href="/#tic-2027" onClick={() => setOpen(false)} className="btn-gold w-full justify-center">
              TIC 2027: register interest
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
