// Shared legal copy for the Terms & Conditions and Privacy Policy pages.
// Everything hotel-specific is read from site.js, so this file is the same in every project.
import { hotel, site, policy } from "./site";

export const LEGAL_UPDATED = "25 November 2026";

const name = hotel.full;
const place = [hotel.locality, hotel.city].filter(Boolean).join(", ");
const hasPool = JSON.stringify(site.amenities || []).toLowerCase().includes("pool");

export const termsSections = [
  {
    h: "About these terms",
    p: [
      `This website is run by ${name}, ${place}, ${hotel.region} ("we", "us", "our"). It lets you see our rooms and book a stay directly with us. By using this website or making a booking, you agree to these terms. If you do not agree, please do not use the website or make a booking.`,
    ],
  },
  {
    h: "Bookings and reservations",
    ul: [
      "Bookings are made through the booking window on this website, which is provided by our booking partner PureBook, or by calling the hotel.",
      "A booking is confirmed only when you receive a confirmation from the booking window or from us. Availability is not guaranteed before that.",
      "You must give correct and complete details, such as your name, phone number, number of guests and dates. We may cancel a booking made with false or incomplete information.",
      "The person making the booking must be at least 18 years old and is responsible for everyone in the booking.",
    ],
  },
  {
    h: "Rooms, rates and taxes",
    ul: [
      "The rooms shown on this website are described and photographed to help you choose. Rooms of the same type can differ a little in layout, view and furnishing.",
      "The rate, what it includes (for example breakfast) and the taxes that apply to your stay are shown in the booking window for the rate plan you pick. Please read them before you confirm.",
      "Rates and offers can change without notice. A confirmed booking is honoured at the rate shown when it was confirmed.",
    ],
  },
  {
    h: "Payment",
    p: [
      "Payment options and any advance amount are shown during booking. Online payments, where offered, are handled by our booking and payment partners. We do not store your full card number or banking credentials on this website. Any balance is payable at the hotel as stated in your booking.",
    ],
  },
  {
    h: "Check-in and check-out",
    ul: [
      policy.checkIn && policy.checkOut
        ? `Check-in is from ${policy.checkIn} and check-out is by ${policy.checkOut}.`
        : "Check-in and check-out times for your booking are shown in your booking confirmation, or the front desk will tell you when you book.",
      "Every guest must show a valid government-issued photo ID at check-in. Foreign nationals must also show a passport and a valid visa. This is a legal requirement in India.",
      "We may refuse check-in if valid ID is not shown or if the number of guests is more than the room allows.",
      "Early check-in and late check-out depend on availability and may be charged.",
    ],
  },
  {
    h: "Cancellation, changes and no-show",
    p: [
      "Cancellation, change and refund conditions depend on the rate plan you pick and are shown in the booking window. To cancel or change a booking, please contact the hotel as early as you can using the contact details on this page. Where a refund applies, it goes back to the original payment method, and the time it takes depends on your bank or payment provider.",
      "If you do not arrive and have not told us, the booking may be treated as a no-show, and any advance paid may be kept as described in the rate plan.",
    ],
  },
  {
    h: "Guest conduct and hotel rules",
    ul: [
      "Please be considerate to other guests and our staff. We may ask a guest who causes disturbance, danger or damage to leave, without refund.",
      "Illegal activities, drugs and weapons are strictly prohibited on the premises. We may inform the authorities where the law requires.",
      "Please follow the hotel's rules on smoking, alcohol, visitors and noise, as told by the front desk or displayed at the hotel.",
      "Guests are responsible for damage to hotel property caused by them or their visitors and must pay for repair or replacement.",
      ...(hasPool
        ? [
            "If the hotel has a swimming pool, you use it at your own risk and must follow the pool rules. Children must be supervised by an adult at all times.",
          ]
        : []),
    ],
  },
  {
    h: "Valuables and liability",
    p: [
      "Please look after your belongings. As far as the law allows, we are not responsible for loss of or damage to money, jewellery, electronics or other valuables left in rooms or vehicles. Nothing in these terms limits any right you have under Indian consumer law, or any liability that cannot be excluded by law.",
    ],
  },
  {
    h: "Services outside our control",
    p: [
      "Wi-Fi, air conditioning, hot water, power backup and other facilities are provided on a reasonable-effort basis. They can be interrupted by things outside our control, such as power cuts or network faults.",
      "If we cannot honour a booking because of an event outside our control, we will try to offer an alternative or refund the amount paid for the unused stay.",
    ],
  },
  {
    h: "Website use and intellectual property",
    p: [
      "The text, photographs, logo and design of this website belong to us or are used with permission. You may not copy or use them commercially without our written permission. Please do not misuse the website, try to disrupt it, or collect data from it by automated means.",
      "We try to keep the information here accurate, but mistakes can happen. If you notice a wrong price, photo or description, please tell us and we will correct it.",
    ],
  },
  {
    h: "Third-party services",
    p: [
      "This website uses services from other companies, such as the PureBook booking window and Google Maps. Their own terms and privacy policies apply when you use them.",
    ],
  },
  {
    h: "Changes to these terms",
    p: [
      "We may update these terms from time to time. The new version will be posted on this page with a new date. A booking is governed by the terms in force when it was made.",
    ],
  },
  {
    h: "Governing law",
    p: [
      `These terms are governed by the laws of India. Courts in ${hotel.region} have jurisdiction over any dispute, subject to any rights you have under applicable consumer protection law.`,
    ],
  },
];

export const privacySections = [
  {
    h: "Who we are",
    p: [
      `This website is run by ${name}, ${place}, ${hotel.region}, India. This policy explains what personal information we collect, why we collect it and how we handle it, in line with applicable Indian law, including the Digital Personal Data Protection Act, 2023.`,
    ],
  },
  {
    h: "Information we collect",
    ul: [
      "Booking details: your name, phone number, email address, dates of stay, number of guests and any special requests, entered in the booking window or given to us by phone.",
      "ID details: at check-in we are required by law to record a valid government-issued photo ID for guests and, for foreign nationals, passport and visa details.",
      "Payment details: where you pay online, payment is handled by our booking and payment partners. We do not store your full card number, UPI PIN or net-banking credentials on this website.",
      "Enquiries: anything you tell us when you call or message us.",
      "Technical data: basic information such as your IP address, browser and device type, which your browser shares when you visit the website.",
    ],
  },
  {
    h: "How we use your information",
    ul: [
      "To create, confirm and manage your booking and your stay.",
      "To contact you about your booking, such as confirmations, changes or a problem with your stay.",
      "To verify guest identity and keep guest records as the law requires.",
      "To answer your questions and handle complaints.",
      "To keep this website secure and understand how it is used.",
      "To meet our legal, tax and accounting obligations.",
    ],
  },
  {
    h: "Booking window and other services we use",
    p: [
      "The booking window on this website is provided by PureBook and loaded from cdn.purebook.in. When you use it, the details you enter are collected and processed by PureBook and its payment partners to complete your booking and pass it to the hotel. Their privacy policies apply to that processing.",
      policy.googleFonts
        ? "This website also uses Google Maps to show our location and Google Fonts to display text. Loading these may share your IP address and browser details with Google."
        : "This website also uses Google Maps to show our location. Loading the map may share your IP address and browser details with Google.",
      "Our hosting provider may keep standard server logs of visits to the website.",
    ],
  },
  {
    h: "Who we share your information with",
    p: ["We do not sell your personal information. We share it only with:"],
    ul: [
      "Our hotel team, so we can prepare for and run your stay.",
      "Our booking, payment, hosting and technology providers, who may use it only to provide their services to us.",
      "The police, government or other authorities where the law requires it, for example guest records kept by hotels.",
      "Professional advisers or others where needed to protect our legal rights.",
    ],
  },
  {
    h: "Cookies and similar technologies",
    p: [
      "This website itself does not use cookies for advertising. The booking window and embedded services such as Google Maps may use cookies or local storage to work properly. You can block or delete cookies in your browser settings, but the booking window or map may then stop working.",
    ],
  },
  {
    h: "How long we keep your information",
    p: [
      "We keep personal information only as long as we need it for the purposes above. Guest ID and registration records are kept for as long as the law requires. Booking and payment records are kept as needed for accounting and tax rules and to deal with any dispute. After that we delete or anonymise them.",
    ],
  },
  {
    h: "How we protect your information",
    p: [
      "We use reasonable security measures, including secure (HTTPS) connections and limiting access to people who need it. No method of sending or storing information is completely secure, so we cannot promise absolute security.",
    ],
  },
  {
    h: "Your rights and choices",
    p: ["Subject to applicable law, you may ask us to:"],
    ul: [
      "tell you what personal information of yours we hold and how we use it;",
      "correct information that is wrong or incomplete;",
      "erase your information, unless we must keep it by law;",
      "stop using information based on your consent, if you withdraw that consent. This does not affect what we did before you withdrew it.",
    ],
  },
  {
    h: "Children",
    p: [
      "This website is for adults booking hotel stays. We do not knowingly collect personal information from children through the website. Children staying with an adult guest are recorded under the adult's booking, as the law requires.",
    ],
  },
  {
    h: "Links to other websites",
    p: [
      "This website may link to other sites, such as Google Maps. We are not responsible for their privacy practices, so please read their policies.",
    ],
  },
  {
    h: "Changes to this policy",
    p: [
      "We may update this policy from time to time. The latest version is always on this page, with the date it was last updated.",
    ],
  },
];
