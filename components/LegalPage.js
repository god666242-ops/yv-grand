import Link from "next/link";
import { hotel as h } from "../site";

// Shared layout for the Terms & Conditions and Privacy Policy pages.
export default function LegalPage({ title, updated, intro, sections }) {
  return (
    <>
      <header className="bg-night text-white">
        <div className="mx-auto flex max-w-[860px] items-center justify-between px-[22px] py-4">
          <Link href="/" className="font-fd text-xl font-semibold">
            {h.full}
          </Link>
          <Link href="/" className="text-[15px] text-[#cdbfdc] hover:text-white">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[860px] px-[22px] py-14 md:py-20">
        <h1 className="font-fd text-[clamp(32px,4.6vw,48px)] font-semibold leading-[1.08] text-night">{title}</h1>
        <p className="mt-3 text-sm text-mut">Last updated: {updated}</p>
        <p className="mt-6 text-mut">{intro}</p>

        {sections.map((sec, i) => (
          <section key={sec.h} className="mt-10">
            <h2 className="font-fd text-[26px] font-semibold text-night">
              {i + 1}. {sec.h}
            </h2>
            {sec.p?.map((t) => (
              <p key={t} className="mt-3 text-mut">{t}</p>
            ))}
            {sec.ul && (
              <ul className="mt-3 list-disc space-y-2 pl-6 text-mut marker:text-peacock">
                {sec.ul.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <section className="mt-12 rounded border border-line bg-mist p-7">
          <h2 className="font-fd text-[26px] font-semibold text-night">Contact us</h2>
          <p className="mt-2 text-mut">Questions about this page? Call or visit us.</p>
          <p className="mt-4 font-semibold text-ink">{h.full}</p>
          <p className="text-mut">{h.address}</p>
          {h.phones.length > 0 && (
            <p className="mt-2 flex flex-wrap gap-x-4">
              {h.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="font-semibold text-peacock underline underline-offset-4">{p.show}</a>
              ))}
            </p>
          )}
          {h.email && (
            <p className="mt-1">
              <a href={`mailto:${h.email}`} className="font-semibold text-peacock underline underline-offset-4">{h.email}</a>
            </p>
          )}
        </section>
      </main>

      <footer className="bg-night text-[#cdbfdc]">
        <div className="mx-auto flex max-w-[860px] flex-col items-start justify-between gap-3 px-[22px] py-8 text-[15px] sm:flex-row sm:items-center">
          <small>© {new Date().getFullYear()} {h.full}</small>
          <nav aria-label="Legal" className="flex gap-6">
            <Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
