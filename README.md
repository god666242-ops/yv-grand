# YV Grand The Luxury Hotel
Next.js 14 website styled with Tailwind CSS (colours and fonts in `tailwind.config.js`). Booking uses the PureBook `<hotel-booking-engine>` button (same as the Sai Priya site).

- `npm install && npm run dev` then open http://localhost:3102
- Edit `site.js` only: slug (PureBook hotel slug), phone numbers, email, rooms, amenities, FAQ, nearby places, photos.
- Photos: originals live in `images-original/`. `python3 scripts/optimize-images.py` turns them into small responsive WebP files in `public/images` (needs `pip install pillow`). To add a photo, drop it in `images-original/`, add a line to `MAP` in the script, re-run, then use its short name (e.g. "room-2") in `site.js`.
- The hotel has one room type (Standard AC Room); the Rooms section shows a single room as a feature.
- Everything marked TODO in `site.js` is a placeholder until the hotel confirms it.
- Set `NEXT_PUBLIC_SITE_URL` to the live domain before deploying.
