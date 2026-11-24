import { hotel, site } from "../site";
// PureBook booking button. engine.js is loaded once in app/layout.js.
export default function Widget({ label }) {
  return (
    <hotel-booking-engine
      data-primary={site.embed.primary}
      data-theme={site.embed.theme}
      data-button-label={label || site.embed.label}
      data-hotel={hotel.slug}
    ></hotel-booking-engine>
  );
}
