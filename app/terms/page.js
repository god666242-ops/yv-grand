import LegalPage from "../../components/LegalPage";
import { hotel } from "../../site";
import { termsSections, LEGAL_UPDATED } from "../../legal";

export const metadata = {
  title: "Terms & Conditions",
  description: `Terms and conditions for booking and staying at ${hotel.full}.`,
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated={LEGAL_UPDATED}
      intro="Please read these terms carefully before you book a room or use this website."
      sections={termsSections}
    />
  );
}
