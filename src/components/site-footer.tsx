import Image from "next/image";
import Link from "next/link";
import ticLogo from "@/assets/brand/tic-logo-white.png";
import eiclLogo from "@/assets/brand/eicl-logo.png";
import { nav, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-white/80">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Image src={ticLogo} alt="TIC Tech Innovation Challenge" className="h-14 w-auto" sizes="160px" />
          <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-white/70">
            A programme of the Nigerian Content Development &amp; Monitoring Board, taking Nigerian research to market.
          </p>
        </div>

        <div>
          <h2 className="nav-link text-gold">Site</h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white hover:underline">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={site.launchpad} className="hover:text-white hover:underline">
                Tech IDEAS Launchpad
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="nav-link text-gold">Contact</h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href={`mailto:${site.email}`} className="break-all hover:text-white hover:underline">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="hover:text-white hover:underline">
                {site.phone}
              </a>
            </li>
            <li className="text-white/60">{site.address}</li>
          </ul>
          <ul className="mt-4 flex flex-wrap gap-x-5">
            {site.social.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="inline-flex min-h-11 items-center text-sm font-bold text-white hover:text-gold">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="nav-link text-gold">Implementing partner</h2>
          <a href={site.eicl} className="mt-4 inline-block bg-white p-3">
            <Image src={eiclLogo} alt="Entrepreneurship & Innovation Centre Limited" className="h-10 w-auto" sizes="180px" />
          </a>
          <p className="mt-3 text-sm text-white/60">41 Mbonu Street, D/Line, Port Harcourt, Rivers State</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-2 py-6 text-sm text-white/55 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Nigerian Content Development &amp; Monitoring Board. All rights reserved.</p>
          <a href={site.ncdmb} className="hover:text-white">
            ncdmb.gov.ng
          </a>
        </div>
      </div>
    </footer>
  );
}
