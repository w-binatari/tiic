import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-forest text-white">
      <div className="wrap py-28 sm:py-36">
        <p className="font-display text-sm font-black uppercase tracking-[0.14em] text-gold">Page not found</p>
        <h1 className="mt-4 max-w-[16ch] text-5xl font-black sm:text-6xl">That page isn&apos;t here.</h1>
        <p className="mt-5 max-w-[48ch] text-lg text-white/80">
          It may have moved when the site was rebuilt. Try the homepage or the 2026 edition.
        </p>
        <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4">
          <Link href="/" className="btn-gold">
            Go to the homepage <ArrowRight aria-hidden className="size-5" />
          </Link>
          <Link href="/2026" className="link-arrow self-center text-white">
            TIC 2026
          </Link>
        </div>
      </div>
    </section>
  );
}
