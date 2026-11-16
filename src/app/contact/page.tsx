import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHead } from "@/components/blocks";
import { ContactForm } from "@/components/forms";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the NCDMB Tech Innovation Challenge team about TIC 2027, partnerships or media requests.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <PageHead
        title="Contact the TIC team"
        lead="Questions about TIC 2027, partnership opportunities or media requests. The programme team at EICL, the implementing partner, will reply."
      />
      <section className="py-16 sm:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <h2 className="text-2xl font-black text-forest">Reach us directly</h2>
            <ul className="mt-6 border-t-2 border-forest">
              <li className="flex gap-4 border-b border-mint-line py-5">
                <Mail aria-hidden className="mt-0.5 size-5 shrink-0 text-green" />
                <div>
                  <p className="font-display font-black text-forest">Email</p>
                  <a href={`mailto:${site.email}`} className="break-all text-ink underline decoration-mint-line hover:decoration-green">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4 border-b border-mint-line py-5">
                <Phone aria-hidden className="mt-0.5 size-5 shrink-0 text-green" />
                <div>
                  <p className="font-display font-black text-forest">Phone</p>
                  <a href={site.phoneHref} className="text-ink underline decoration-mint-line hover:decoration-green">
                    {site.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4 border-b border-mint-line py-5">
                <MapPin aria-hidden className="mt-0.5 size-5 shrink-0 text-green" />
                <div>
                  <p className="font-display font-black text-forest">NCDMB headquarters</p>
                  <p className="text-ink">{site.address}</p>
                </div>
              </li>
            </ul>
            <h2 className="mt-12 text-2xl font-black text-forest">Follow @ncdmb_tic</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.social.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="inline-flex min-h-11 items-center border border-forest/20 px-4 font-bold text-forest hover:border-forest"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-black text-forest">Send a message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
