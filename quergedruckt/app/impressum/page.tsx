import type { Metadata } from "next";
import LegalPage from "../legal/LegalPage";

export const metadata: Metadata = {
  title: "Legal Notice | quergedruckt",
};

export default function ImpressumPage() {
  return <LegalPage page="impressum" />;
}
