import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-slate-800 mb-8">Datenschutzerklärung</h1>
          
          <div className="space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Allgemeine Hinweise</h3>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. 
                Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem 
                Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Datenerfassung auf dieser Website</h3>
              <p className="mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle" 
                in dieser Datenschutzerklärung entnehmen.
              </p>
              
              <p className="mb-4">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann 
                es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden 
                automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
              </p>
              
              <p className="mb-4">
                <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu 
                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
              
              <p className="mb-4">
                <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und 
                Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein 
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Hosting</h2>
              <p className="mb-4">
                Wir hosten die Inhalte unserer Website bei einem externen Dienstleister. 
                Wenn Sie unsere Website besuchen, erfasst der Provider automatisch Informationen in 
                sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. 
                Dies sind:
              </p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p>
                Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Erfassung dieser 
                Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein 
                berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Datenschutz</h3>
              <p className="mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen 
                Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie diese Website benutzen, 
                werden verschiedene personenbezogene Daten erhoben.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <p className="mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-slate-100 p-4 rounded-lg mb-4">
                <p><strong>Flaschnerei Olaf Just</strong></p>
                <p>Olaf Just</p>
                <p>Schmalzberg 7</p>
                <p>74388 Talheim</p>
                <p>Telefon: <a href="tel:+4917182751441" className="hover:text-orange-600 transition-colors">+49 171 8275144</a></p>
                <p>E-Mail: <a href="mailto:info@flaschnerei-just.de" className="hover:text-orange-600 transition-colors">info@flaschnerei-just.de</a></p>
              </div>
              <p className="mb-4">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam 
                mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Speicherdauer</h3>
              <p className="mb-4">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
                verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. 
                Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung 
                widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für 
                die Speicherung Ihrer personenbezogenen Daten haben.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Rechtsgrundlage der Datenverarbeitung</h3>
              <p className="mb-4">
                Art. 6 DSGVO gibt uns Auskunft über die Rechtsgrundlagen für Verarbeitungen personenbezogener Daten:
              </p>
              <ul className="list-disc ml-6 mb-4 space-y-1">
                <li>Art. 6 Abs. 1 lit. a DSGVO: Einwilligung der betroffenen Person</li>
                <li>Art. 6 Abs. 1 lit. b DSGVO: Verarbeitung zur Erfüllung eines Vertrags</li>
                <li>Art. 6 Abs. 1 lit. f DSGVO: Verarbeitung zur Wahrung berechtigter Interessen</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Server-Log-Dateien</h3>
              <p className="mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Die Daten werden 
                nach 7 Tagen automatisch gelöscht. Eine Zusammenführung dieser Daten mit anderen 
                Datenquellen wird nicht vorgenommen.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Anfrage per E-Mail, Telefon oder Telefax</h3>
              <p className="mb-4">
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive 
                aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der 
                Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir 
                nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von Art. 6 
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt 
                oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen 
                Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven 
                Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf 
                Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Ihre Rechte</h2>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Auskunftsrecht</h3>
              <p className="mb-4">
                Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten 
                verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen 
                und Kopie der Daten entsprechend Art. 15 DSGVO.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Recht auf Berichtigung</h3>
              <p className="mb-4">
                Sie haben ein Recht auf Berichtigung unrichtiger oder auf Vervollständigung richtiger 
                Daten entsprechend Art. 16 DSGVO.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Recht auf Löschung</h3>
              <p className="mb-4">
                Sie haben ein Recht auf Löschung Ihrer bei uns gespeicherten Daten entsprechend Art. 17 DSGVO, 
                es sei denn gesetzliche oder vertragliche Aufbewahrungsfristen oder andere gesetzliche 
                Pflichten bzw. Rechte zur weiteren Speicherung stehen dieser entgegen.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Recht auf Einschränkung</h3>
              <p className="mb-4">
                Sie haben das Recht, eine Einschränkung bei der Verarbeitung Ihrer personenbezogenen 
                Daten zu verlangen entsprechend Art. 18 DSGVO.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Recht auf Datenübertragbarkeit</h3>
              <p className="mb-4">
                Sie haben ein Recht auf Datenübertragbarkeit entsprechend Art. 20 DSGVO.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Widerspruchsrecht</h3>
              <p className="mb-4">
                Sie haben ein Recht auf Widerspruch gegen die Verarbeitung entsprechend Art. 21 DSGVO.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Beschwerde bei einer Aufsichtsbehörde</h3>
              <p className="mb-4">
                Sie haben ein Beschwerderecht bei einer Aufsichtsbehörde. In der Regel können Sie sich 
                hierfür an die Aufsichtsbehörde Ihres gewöhnlichen Aufenthaltsorts oder Arbeitsplatzes 
                oder unseres Unternehmenssitzes wenden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. SSL- bzw. TLS-Verschlüsselung</h2>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher 
                Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber 
                senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie 
                daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an 
                dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert 
                ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>
            </section>

            <p className="text-sm text-slate-500 mt-8">
              Stand: {new Date().toLocaleDateString('de-DE')}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;