import type { Metadata } from "next";
import LegalLayout from "../legal/LegalLayout";

export const metadata: Metadata = {
  title: "Impressum | quergedruckt",
};

// The legal text is German, so it is marked as such for screen readers.
export default function ImpressumPage() {
  return (
    <LegalLayout>
      <div lang="de">
        <h1>Impressum</h1>
        <p>Anna Schwedes<br />
        Quergedruckt (Einzelunternehmer)<br />
        Musterstra&szlig;e 111<br />
        Geb&auml;ude 44<br />
        90210 Musterstadt</p>
        <h2>Kontakt</h2>
        <p>E-Mail: quergedruckt@gmail.com</p>
        <h2>Umsatzsteuer-ID</h2>
        <p>Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:<br />
        DE999999999</p>
        <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
        teilzunehmen.</p>
        <p>Quelle: <a href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a></p>
      </div>
    </LegalLayout>
  );
}
