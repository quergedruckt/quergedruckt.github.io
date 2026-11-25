import type { Metadata } from "next";
import LegalPage from "../legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | quergedruckt",
};

export default function PrivacyPage() {
  return <LegalPage page="privacy" />;
}
