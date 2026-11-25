// Edit this file only. Everything on the page comes from here.
// Items marked TODO are placeholders until the hotel confirms the details.
export const hotel = {
  slug: "yv-grand", // TODO: PureBook hotel slug (used by the booking button)
  name: "YV Grand",
  full: "YV GRAND The Luxury Hotel",
  locality: "Krishnalanka",
  city: "Vijayawada",
  region: "Andhra Pradesh",
  pin: "520013",
  address: "Krishnalanka, Vijayawada, Andhra Pradesh 520013",
  phones: [], // TODO: [{ show: "98765 43210", tel: "+919876543210" }]
  email: "", // TODO
  mapQuery: "YV Grand The Luxury Hotel Krishnalanka Vijayawada 520013",
  lat: null, // TODO
  lng: null, // TODO
};

export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com").replace(/\/$/, ""),
  title: "YV Grand The Luxury Hotel, Krishnalanka, Vijayawada",
  description:
    "Book direct at YV Grand The Luxury Hotel in Krishnalanka, Vijayawada. Comfortable rooms, a warm welcome and live rates in the booking window.",
  embed: { primary: "#0E7C7B", theme: "light", label: "Book your stay" },
  headline: "Luxury in the heart of Krishnalanka",
  lead: "A calm, well-kept hotel in Vijayawada. Pick your dates and book direct.",
  about: [
    "YV Grand The Luxury Hotel is in Krishnalanka, Vijayawada, close to the Krishna river and the city's main roads.",
    "Choose a room, check live rates and confirm your booking online in a few steps. If you would rather talk to someone, call the front desk.",
  ],
  // The hotel has one room type. Details are written from the photos: confirm bed size and perks with the hotel.
  // img = main photo, more = two smaller photos beside it (names from scripts/optimize-images.py)
  rooms: [
    {
      name: "Standard AC Room",
      beds: "Double bed",
      desc: "A clean, comfortable air-conditioned room with a double bed, a television and an attached bathroom. Simple, quiet and well kept, for business trips and short stays.",
      perks: ["Air conditioning", "Attached bathroom", "Television", "Ceiling fan"],
      img: "room-2",
      pos: "50% 55%",
      more: [["room-tv", "Television wall in the Standard AC Room"], ["bath", "Attached bathroom"]],
    },
  ],
  // TODO: keep only what the hotel really offers. Icons: wifi, ac, food, bell, car, clock, shower, tv
  amenities: [
    ["wifi", "Free Wi-Fi", "Available in every room."],
    ["ac", "Air conditioning", "Cool, quiet rooms."],
    ["food", "Restaurant", "Meals at the hotel."],
    ["bell", "Room service", "Ask the front desk."],
    ["car", "Parking", "For hotel guests."],
    ["clock", "24-hour front desk", "Arrive at any hour."],
    ["shower", "Hot water", "In every bathroom."],
    ["tv", "Television", "In every room."],
  ],
  // Photos are names from scripts/optimize-images.py, e.g. "room-1" -> /images/room-1-*.webp
  heroImg: "room-1",
  aboutImgs: ["reception", "corridor"],
  aboutPos: ["62% 50%", "center"],
  gallery: [
    { src: "room-3", alt: "Standard AC Room, wide view" },
    { src: "room-4", alt: "Standard AC Room, bed and bathroom door" },
    { src: "room-5", alt: "Standard AC Room with ceiling lights" },
    { src: "room-6", alt: "Standard AC Room, close view of the bed" },
  ],
  ogImg: "/images/room-tv-1600.webp",
  // TODO: [["Prakasam Barrage", "2 km", "Sightseeing"], ...]. The section is hidden while empty.
  nearby: [],
  faq: [
    ["How do I book?", "Press Book your stay, choose your dates and complete the booking in the window that opens."],
    ["What are the room types?", "The hotel has one room type, the Standard AC Room. Live rates show in the booking window."],
    ["Where is the hotel?", "In Krishnalanka, Vijayawada, Andhra Pradesh 520013."],
    ["Can I book by phone?", "Yes. Call the front desk using the number in the Contact section."],
  ],
};
