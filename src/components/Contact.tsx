
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Kontakt & Beratung</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Haben Sie ein Projekt im Großraum Heilbronn oder Fragen? Wir beraten Sie gerne unverbindlich 
            und erstellen Ihnen ein kostenloses Angebot.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 text-orange-600">Nehmen Sie Kontakt auf</h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-600 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Telefon</h4>
                  <a href="tel:+4917182751441" className="text-slate-300 hover:text-orange-600 transition-colors">+49 171 8275144</a>
                  <p className="text-sm text-slate-400">Mo-Fr: 8:00 - 17:00 Uhr</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-600 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">E-Mail</h4>
                  <a href="mailto:info@flaschnerei-just.de" className="text-slate-300 hover:text-orange-600 transition-colors">info@flaschnerei-just.de</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-600 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Standort</h4>
                  <p className="text-slate-300">Schmalzberg 7<br />74388 Talheim</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-600 rounded-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Öffnungszeiten</h4>
                  <p className="text-slate-300">Mo-Fr: 8:00 - 17:00 Uhr</p>
                  <p className="text-sm text-slate-400">Notfälle nach Absprache</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-slate-700 border-slate-600">
            <CardHeader>
              <CardTitle className="text-white">Kostenvoranschlag anfordern</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                Sie benötigen einen Kostenvoranschlag für Ihr Projekt? Kontaktieren Sie uns gerne:
              </p>
              
              <div className="space-y-3">
                <a 
                  href="tel:+4917182751441" 
                  className="flex items-center gap-3 p-3 bg-slate-600 rounded-lg hover:bg-slate-500 transition-colors cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="font-semibold">Direkt anrufen</p>
                    <p className="text-sm text-slate-400">+49 171 8275144</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:info@flaschnerei-just.de" 
                  className="flex items-center gap-3 p-3 bg-slate-600 rounded-lg hover:bg-slate-500 transition-colors cursor-pointer"
                >
                  <Mail className="w-5 h-5 text-orange-600" />
                  <div>
                    <p className="font-semibold">E-Mail schreiben</p>
                    <p className="text-sm text-slate-400">info@flaschnerei-just.de</p>
                  </div>
                </a>
              </div>
              
              <div className="mt-6 p-4 bg-orange-600/10 border border-orange-600/20 rounded-lg">
                <p className="text-sm text-slate-300 text-center">
                  <strong>Kostenlose Beratung</strong><br />
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
