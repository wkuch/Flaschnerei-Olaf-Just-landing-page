
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-zinc-900 via-zinc-800 to-amber-900/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6 text-amber-200">Persönliche Beratung & Kontakt</h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Haben Sie ein Projekt oder Fragen? Als Familienbetrieb nehmen wir uns gerne Zeit 
            für Sie und erstellen Ihnen ein ehrliches, kostenloses Angebot.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-10 text-amber-200">Sprechen Sie uns an</h3>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-lg text-amber-200">Telefon</h4>
                  <p className="text-white text-lg font-medium">+49 XXX XXXXXXX</p>
                  <p className="text-zinc-400">Mo-Fr: 7:00 - 17:00 Uhr</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-lg text-amber-200">E-Mail</h4>
                  <p className="text-white text-lg font-medium">info@flaschnerei-just.de</p>
                  <p className="text-zinc-400">Antwort innerhalb von 24h</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-lg text-amber-200">Standort</h4>
                  <p className="text-white text-lg font-medium">[Ihre Adresse]</p>
                  <p className="text-zinc-400">Vor-Ort-Termine nach Vereinbarung</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl shadow-lg">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-lg text-amber-200">Öffnungszeiten</h4>
                  <p className="text-white text-lg font-medium">Mo-Fr: 7:00 - 17:00 Uhr</p>
                  <p className="text-zinc-400">Notfälle nach Absprache</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-gradient-to-br from-zinc-800 to-zinc-700 border-2 border-amber-600/30 shadow-2xl">
            <CardHeader className="pb-6">
              <CardTitle className="text-amber-200 text-2xl">Kostenvoranschlag anfordern</CardTitle>
              <p className="text-zinc-400">Unverbindlich und kostenlos</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="Ihr Name" 
                  className="border-2 border-amber-600/30 focus:border-amber-500 bg-zinc-700 text-white placeholder:text-zinc-400"
                />
                <Input 
                  placeholder="Telefon" 
                  className="border-2 border-amber-600/30 focus:border-amber-500 bg-zinc-700 text-white placeholder:text-zinc-400"
                />
              </div>
              <Input 
                placeholder="E-Mail Adresse" 
                className="border-2 border-amber-600/30 focus:border-amber-500 bg-zinc-700 text-white placeholder:text-zinc-400"
              />
              <Input 
                placeholder="Ort des Projekts" 
                className="border-2 border-amber-600/30 focus:border-amber-500 bg-zinc-700 text-white placeholder:text-zinc-400"
              />
              <Textarea 
                placeholder="Beschreiben Sie Ihr Projekt..." 
                rows={4}
                className="border-2 border-amber-600/30 focus:border-amber-500 bg-zinc-700 text-white placeholder:text-zinc-400"
              />
              <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold py-3 text-lg shadow-lg border-0">
                Kostenvoranschlag anfordern
              </Button>
              <p className="text-xs text-zinc-400 text-center font-medium">
                Persönliche Beratung • Ehrliche Preise • Kostenlose Besichtigung
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
