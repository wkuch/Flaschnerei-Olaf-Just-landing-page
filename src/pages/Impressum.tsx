import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl heading-primary text-slate-800 mb-8">Impressum</h1>
          
          <div className="space-y-6 text-slate-700">
            <section>
              <h2 className="text-2xl heading-secondary text-slate-800 mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="space-y-2">
                <p><strong>Flaschnerei Olaf Just</strong></p>
                <p>Inhaber: Olaf Just</p>
                <p>Schmalzberg 7</p>
                <p>74388 Talheim</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl heading-secondary text-slate-800 mb-4">Kontakt</h2>
              <div className="space-y-2">
                <p>Telefon: <a href="tel:+4917182751441" className="hover:text-orange-600 transition-colors">+49 171 8275144</a></p>
                <p>E-Mail: <a href="mailto:info@flaschnerei-just.de" className="hover:text-orange-600 transition-colors">info@flaschnerei-just.de</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl heading-secondary text-slate-800 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <div className="space-y-2">
                <p>Berufsbezeichnung: Klempnermeister</p>
                <p>Verliehen in: Deutschland</p>
                <p>Es gelten folgende berufsrechtliche Regelungen:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Handwerksordnung (HwO)</li>
                  <li>Gewerbeordnung (GewO)</li>
                  <li>EU-Berufsanerkennungsrichtlinie 2005/36/EG</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl heading-secondary text-slate-800 mb-4">Aufsichtsbehörde</h2>
              <div className="space-y-2">
                <p>Zuständige Handwerkskammer: Handwerkskammer Heilbronn-Franken</p>
                <p>Allee 76, 74072 Heilbronn</p>
                <p>Telefon: 07131 791-0</p>
                <p>Website: <a href="https://www.hwk-heilbronn.de" className="text-orange-600 hover:underline" target="_blank" rel="noopener noreferrer">www.hwk-heilbronn.de</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl heading-secondary text-slate-800 mb-4">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
              <p className="text-slate-600 italic">wird bei Bedarf auf Anfrage mitgeteilt</p>
            </section>

            <section>
              <h2 className="text-2xl heading-secondary text-slate-800 mb-4">Versicherung</h2>
              <div className="space-y-2">
                <p>Betriebshaftpflichtversicherung bei:</p>
                <p className="text-slate-600 italic">Versicherungsnachweis wird bei Auftragsvergabe vorgelegt</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl heading-secondary text-slate-800 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <div className="space-y-2">
                <p>Olaf Just</p>
                <p>Schmalzberg 7</p>
                <p>74388 Talheim</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl heading-secondary text-slate-800 mb-4">Haftungsausschluss</h2>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Haftung für Inhalte</h3>
              <p className="leading-relaxed mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der 
                Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Haftung für Links</h3>
              <p className="leading-relaxed mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                Verlinkung nicht erkennbar.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Urheberrecht</h3>
              <p className="leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
                nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl heading-secondary text-slate-800 mb-4">Streitschlichtung</h2>
              <p className="leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" className="text-orange-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr/
                </a><br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, 
                an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
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