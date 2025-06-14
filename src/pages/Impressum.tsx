import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-slate-800 mb-8">Impressum</h1>
          
          <div className="space-y-6 text-slate-700">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-2">
                <p><strong>Flaschnerei Olaf Just</strong></p>
                <p>Inhaber: Olaf Just</p>
                <p>[Ihre Straße und Hausnummer]</p>
                <p>[PLZ Ort]</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Kontakt</h2>
              <div className="space-y-2">
                <p>Telefon: +49 XXX XXXXXXX</p>
                <p>E-Mail: info@flaschnerei-just.de</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <div className="space-y-2">
                <p>Berufsbezeichnung: Klempnermeister / Installateur- und Heizungsbauermeister</p>
                <p>Verliehen in: Deutschland</p>
                <p>Es gelten folgende berufsrechtliche Regelungen:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Handwerksordnung (HwO)</li>
                  <li>Gewerbeordnung (GewO)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Handwerkskammer</h2>
              <div className="space-y-2">
                <p>Zuständige Handwerkskammer: [Name der zuständigen Handwerkskammer]</p>
                <p>Eingetragen in die Handwerksrolle unter der Nummer: [Nummer]</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
              <p>[Ihre USt-IdNr.]</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <div className="space-y-2">
                <p>Olaf Just</p>
                <p>[Ihre Straße und Hausnummer]</p>
                <p>[PLZ Ort]</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Haftung für Inhalte</h2>
              <p className="leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                rechtswidrige Tätigkeit hinweisen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Haftung für Links</h2>
              <p className="leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Urheberrecht</h2>
              <p className="leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;