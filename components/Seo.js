// JSON-LD for Google: Hotel + FAQPage.
export default function Seo({ hotel, site }) {
  const graph = [
    {
      "@type": "Hotel",
      "@id": site.url + "/#hotel",
      name: hotel.full,
      description: site.description,
      url: site.url + "/",
      ...(hotel.phones[0] ? { telephone: hotel.phones[0].tel } : {}),
      ...(hotel.email ? { email: hotel.email } : {}),
      address: {
        "@type": "PostalAddress",
        streetAddress: hotel.locality,
        addressLocality: hotel.city,
        addressRegion: hotel.region,
        postalCode: hotel.pin,
        addressCountry: "IN",
      },
      ...(hotel.lat && hotel.lng
        ? { geo: { "@type": "GeoCoordinates", latitude: hotel.lat, longitude: hotel.lng } }
        : {}),
      hasMap: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(hotel.mapQuery),
    },
    {
      "@type": "FAQPage",
      mainEntity: site.faq.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}
