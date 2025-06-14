
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-amber-900 via-amber-800 to-orange-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">Persönliche Beratung & Kontakt</h2>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto leading-relaxed">
            Haben Sie ein Projekt oder Fragen? Als Familienbetrieb nehmen wir uns gerne Zeit 
            für Sie und erstellen Ihnen ein ehrliches, kostenloses Angebot.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-10 text-amber-200">Sprechen Sie uns an</h3>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-lg text-amber-100">Telefon</h4>
                  <p className="text-white text-lg font-medium">+49 XXX XXXXXXX</p>
                  <p className="text-amber-200">Mo-Fr: 7:00 - 17:00 Uhr</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-lg text-amber-100">E-Mail</h4>
                  <p className="text-white text-lg font-medium">info@flaschnerei-just.de</p>
                  <p className="text-amber-200">Antwort innerhalb von 24h</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-lg text-amber-100">Standort</h4>
                  <p className="text-white text-lg font-medium">[Ihre Adresse]</p>
                  <p className="text-amber-200">Vor-Ort-Termine nach Vereinbarung</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-lg text-amber-100">Öffnungszeiten</h4>
                  <p className="text-white text-lg font-medium">Mo-Fr: 7:00 - 17:00 Uhr</p>
                  <p className="text-amber-200">Notfälle nach Absprache</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-white/95 border-none shadow-2xl">
            <CardHeader className="pb-6">
              <CardTitle className="text-amber-900 text-2xl">Kostenvoranschlag anfordern</CardTitle>
              <p className="text-amber-700">Unverbindlich und kostenlos</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="Ihr Name" 
                  className="border-2 border-amber-200 focus:border-orange-500 bg-white"
                />
                <Input 
                  placeholder="Telefon" 
                  className="border-2 border-amber-200 focus:border-orange-500 bg-white"
                />
              </div>
              <Input 
                placeholder="E-Mail Adresse" 
                className="border-2 border-amber-200 focus:border-orange-500 bg-white"
              />
              <Input 
                placeholder="Ort des Projekts" 
                className="border-2 border-amber-200 focus:border-orange-500 bg-white"
              />
              <Textarea 
                placeholder="Beschreiben Sie Ihr Projekt..." 
                rows={4}
                className="border-2 border-amber-200 focus:border-orange-500 bg-white"
              />
              <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 text-lg shadow-lg">
                Kostenvoranschlag anfordern
              </Button>
              <p className="text-xs text-amber-600 text-center font-medium">
                Persönliche Beratung • Ehrliche Preise • Kostenlose Besichtigung
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
