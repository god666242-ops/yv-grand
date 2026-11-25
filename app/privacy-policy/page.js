import LegalPage from "../../components/LegalPage";
import { hotel } from "../../site";
import { privacySections, LEGAL_UPDATED } from "../../legal";

export const metadata = {
  title: "Privacy Policy",
  description: `How ${hotel.full} collects, uses and protects your personal information.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated={LEGAL_UPDATED}
      intro="Your privacy matters to us. This policy explains what information we collect when you visit this website, book a room or stay with us, and how we use it."
      sections={privacySections}
    />
  );
}
