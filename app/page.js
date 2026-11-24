import { hotel as h, site as s } from "../site";
import Widget from "../components/Widget";
import Photo from "../components/Photo";
import Icon from "../components/Icon";
import Faq from "../components/Faq";

const phone = h.phones[0];
const nav = [
  ["Rooms", "rooms"],
  ["Amenities", "amenities"],
  ["Gallery", "gallery"],
  ...(s.nearby.length ? [["Nearby", "nearby"]] : []),
  ["FAQ", "faq"],
  ["Contact", "contact"],
];

/* Shared style tokens */
const WRAP = "mx-auto max-w-[1180px] px-[22px] py-16";
const H2 = "font-fd text-[clamp(30px,4vw,46px)] font-semibold leading-[1.08] tracking-[-0.01em] text-night";
const BODY = "mt-3.5 max-w-[58ch] text-mut";
const HEAD = "mb-9 max-w-[640px]";
const HEAD_P = "mt-2.5 text-mut";
const ARCH = "aspect-[3/4] rounded-t-full";
const LINK = "underline underline-offset-4";

export default function Page() {
  return (
    <>
      {/* Header: floating pill, no booking button */}
      <header className="sticky top-3 z-20 mx-auto mt-3 flex w-[calc(100%-24px)] max-w-[1180px] items-center gap-6 rounded-full bg-night/95 py-2.5 pl-5 pr-6 text-white backdrop-blur-md">
        <a href="#top" className="flex shrink-0 items-center gap-2 font-fd text-[22px] font-semibold">
          <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
            <path d="M5 28V15a11 11 0 0 1 22 0v13" fill="none" stroke="#C9A24B" strokeWidth="2.4" />
          </svg>
          {h.name}
        </a>
        <nav aria-label="Sections" className="ml-auto flex gap-5 overflow-x-auto whitespace-nowrap text-[15px] text-[#d9cde6]">
          {nav.map(([t, id]) => (
            <a key={id} href={"#" + id} className="hover:text-white">
              {t}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative -mt-[90px] overflow-hidden bg-night bg-ripples px-[22px] pb-[72px] pt-[150px] text-white md:pt-[170px]">
          <div className="mx-auto grid max-w-[1180px] gap-11 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <div>
              <p className="font-semibold text-brass">
                {h.locality}, {h.city}
              </p>
              <h1 className="mt-3.5 font-fd text-[clamp(64px,11vw,150px)] font-semibold leading-[0.92] tracking-[-0.01em]">
                {h.name}
                <span className="mt-3.5 block text-[clamp(22px,3vw,34px)] font-normal italic leading-tight text-[#e8dcf2]">
                  The Luxury Hotel
                </span>
              </h1>
              <p className="mt-6 max-w-[46ch] text-[19px] text-[#d9cde6]">{s.lead}</p>
              <div className="mt-8 flex max-w-[520px] flex-wrap items-center justify-between gap-4 rounded-[18px] bg-white px-5 py-[18px] text-ink">
                <div>
                  <b className="block text-lg text-night">Check availability</b>
                  <small className="text-sm text-mut">Live rates. Book direct with the hotel.</small>
                </div>
                <Widget />
              </div>
              {phone && (
                <a className={`mt-[18px] inline-block font-semibold ${LINK}`} href={`tel:${phone.tel}`}>
                  Or call {phone.show}
                </a>
              )}
            </div>
            <Photo
              src={s.heroImg}
              alt="Standard AC Room at YV Grand"
              priority
              sizes="(min-width: 900px) 440px, 90vw"
              className={`${ARCH} w-full max-w-[440px] justify-self-center border-2 border-brass ring-8 ring-night motion-safe:animate-rise`}
            />
          </div>
        </section>

        {/* About */}
        <section className={`${WRAP} grid items-center gap-12 md:grid-cols-2`}>
          <div className="grid grid-cols-2 items-end gap-4">
            <Photo src={s.aboutImgs[0]} alt="Reception" pos={s.aboutPos[0]} sizes="(min-width: 900px) 280px, 45vw" className={ARCH} />
            <Photo src={s.aboutImgs[1]} alt="Corridor to the rooms" pos={s.aboutPos[1]} sizes="(min-width: 900px) 280px, 45vw" className={`${ARCH} translate-y-9`} />
          </div>
          <div>
            <h2 className={H2}>{s.headline}</h2>
            {s.about.map((p) => (
              <p key={p} className={BODY}>
                {p}
              </p>
            ))}
            <p className="mt-[22px] border-t border-line pt-4 font-semibold text-night">{h.address}</p>
          </div>
        </section>

        {/* Rooms: one room type, shown as a single feature */}
        <section className="bg-mist" id="rooms">
          <div className={WRAP}>
            <div className={HEAD}>
              <h2 className={H2}>{s.rooms.length === 1 ? "The room" : "Rooms"}</h2>
              <p className={HEAD_P}>See live rates and availability in the booking window.</p>
            </div>
            {s.rooms.map((r) => (
              <article key={r.name} className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
                <div className="grid grid-cols-5 gap-3 md:gap-4">
                  <Photo src={r.img} alt={r.name} pos={r.pos} sizes="(min-width: 900px) 330px, 55vw" className={`${ARCH} col-span-3 !aspect-[3/5] border-2 border-brass`} />
                  <div className="col-span-2 grid grid-rows-2 gap-3 md:gap-4">
                    {r.more.map(([src, alt]) => (
                      <Photo key={src} src={src} alt={alt} sizes="(min-width: 900px) 220px, 35vw" className="h-full w-full rounded-[14px]" />
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-fd text-[clamp(32px,4vw,46px)] font-semibold leading-tight text-night">{r.name}</h3>
                  <p className="mt-2 font-semibold text-peacock">{r.beds}</p>
                  <p className={BODY}>{r.desc}</p>
                  <ul className="mt-5 grid grid-cols-2 gap-x-6 border-t border-line">
                    {r.perks.map((p) => (
                      <li key={p} className="border-b border-line py-3 text-[15px] text-ink">
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Widget label="Check rates and book" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Amenities */}
        <section className="bg-night text-white" id="amenities">
          <div className={WRAP}>
            <div className={HEAD}>
              <h2 className={`${H2} !text-white`}>Everything for a comfortable stay</h2>
            </div>
            <ul className="grid grid-cols-2 md:grid-cols-4">
              {s.amenities.map(([icon, t, d]) => (
                <li key={t} className="flex flex-col gap-1 border-t border-white/20 py-[26px] pr-5">
                  <Icon name={icon} className="mb-2.5 text-brass" />
                  <b>{t}</b>
                  <span className="text-[15px] text-[#cdbfdc]">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Gallery */}
        <section className={WRAP} id="gallery">
          <div className={HEAD}>
            <h2 className={H2}>The room, up close</h2>
            <p className={HEAD_P}>Standard AC Room at {h.full}.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {s.gallery.map((g) => (
              <Photo key={g.src} src={g.src} alt={g.alt} sizes="(min-width: 900px) 280px, 45vw" className="aspect-[3/4] rounded-[14px]" />
            ))}
          </div>
        </section>

        {/* Nearby (hidden until places are added in site.js) */}
        {s.nearby.length > 0 && (
          <section className="bg-mist" id="nearby">
            <div className={WRAP}>
              <div className={HEAD}>
                <h2 className={H2}>Around {h.locality}</h2>
                <p className={HEAD_P}>Distances from the hotel.</p>
              </div>
              <ul className="grid gap-x-12 md:grid-cols-2">
                {s.nearby.map(([place, dist, type]) => (
                  <li key={place} className="flex items-center justify-between gap-4 border-t border-line py-4">
                    <span>
                      <b className="block">{place}</b>
                      <small className="text-mut">{type}</small>
                    </span>
                    <em className="whitespace-nowrap font-fd text-[22px] font-semibold not-italic text-peacock">{dist}</em>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className={`${WRAP} max-w-[820px]`} id="faq">
          <div className={HEAD}>
            <h2 className={H2}>Questions guests ask</h2>
          </div>
          <Faq items={s.faq} />
        </section>

        {/* Contact */}
        <section className="bg-mist" id="contact">
          <div className={`${WRAP} grid gap-9 md:grid-cols-[0.8fr_1.2fr]`}>
            <div>
              <h2 className={H2}>Find us</h2>
              <p className={BODY}>{h.full}</p>
              <p className="mt-1.5 max-w-[58ch] text-mut">{h.address}</p>
              <div className="mt-4 flex flex-col gap-1.5 font-semibold text-peacock">
                {h.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className={LINK}>
                    Call {p.show}
                  </a>
                ))}
                {h.email && (
                  <a href={`mailto:${h.email}`} className={LINK}>
                    {h.email}
                  </a>
                )}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={LINK}
                >
                  Get directions
                </a>
              </div>
            </div>
            <div className="min-h-[360px] overflow-hidden rounded border border-line [&_iframe]:block [&_iframe]:h-full [&_iframe]:min-h-[360px] [&_iframe]:w-full [&_iframe]:border-0">
              <iframe
                title={`Map of ${h.full}`}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                src={`https://www.google.com/maps?q=${encodeURIComponent(h.mapQuery)}&output=embed`}
              />
            </div>
          </div>
        </section>

        {/* Closing booking */}
        <section className={`${WRAP} text-center`}>
          <h2 className={H2}>Ready when you are</h2>
          <p className="mx-auto mb-6 mt-3.5 max-w-[58ch] text-mut">
            Choose your dates and book your stay at {h.name}.
          </p>
          <Widget />
        </section>
      </main>

      <footer className="bg-night text-[#cdbfdc]">
        <div className={`${WRAP} grid gap-6 !py-11 md:grid-cols-[1.2fr_1fr_auto] md:items-start`}>
          <div>
            <b className="block font-fd text-[22px] font-semibold text-white">{h.full}</b>
            <p className="mt-1">{h.address}</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
            {nav.map(([t, id]) => (
              <a key={id} href={"#" + id} className="hover:text-white">
                {t}
              </a>
            ))}
          </nav>
          <small>
            © {new Date().getFullYear()} {h.full}
          </small>
        </div>
      </footer>
    </>
  );
}
