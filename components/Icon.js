const P = {
  wifi: "M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01",
  ac: "M12 2v20M4.2 6.5l15.6 11M19.8 6.5 4.2 17.5M9 3.5l3 2.5 3-2.5M9 20.5l3-2.5 3 2.5",
  food: "M6 3v8a2 2 0 0 0 2 2v8M10 3v8M8 3v18M17 21V3c-2 1-3 4-3 7s1 4 3 4",
  bell: "M3 18h18M5 18a7 7 0 0 1 14 0M12 8V5M10 5h4",
  car: "M4 16V12l2-5h12l2 5v4M3 16h18M7 19v-3M17 19v-3M7 12h10",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3 2",
  shower: "M5 21v-9a6 6 0 0 1 12 0M12 6V3M9 15v2M13 15v2M17 15v2M9 20v1M13 20v1",
  tv: "M3 6h18v12H3zM8 21h8M12 18v3",
};
export default function Icon({ name, className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={P[name] || P.bell} />
    </svg>
  );
}
