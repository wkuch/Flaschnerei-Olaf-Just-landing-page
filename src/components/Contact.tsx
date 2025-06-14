
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Kontakt & Beratung</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Haben Sie ein Projekt oder Fragen? Wir beraten Sie gerne unverbindlich 
            und erstellen Ihnen ein kostenloses Angebot.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-orange-600">Nehmen Sie Kontakt auf</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-600 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Telefon</h4>
                  <p className="text-slate-300">+49 XXX XXXXXXX</p>
                  <p className="text-sm text-slate-400">Mo-Fr: 7:00 - 17:00 Uhr</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-600 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">E-Mail</h4>
                  <p className="text-slate-300">info@flaschnerei-just.de</p>
                  <p className="text-sm text-slate-400">Antwort innerhalb von 24h</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-600 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Standort</h4>
                  <p className="text-slate-300">[Ihre Adresse]</p>
                  <p className="text-sm text-slate-400">Vor Ort Termine nach Vereinbarung</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-600 rounded-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Öffnungszeiten</h4>
                  <p className="text-slate-300">Mo-Fr: 7:00 - 17:00 Uhr</p>
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
              <div className="grid sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="Ihr Name" 
                  className="bg-slate-600 border-slate-500 text-white placeholder:text-slate-400"
                />
                <Input 
                  placeholder="Telefon" 
                  className="bg-slate-600 border-slate-500 text-white placeholder:text-slate-400"
                />
              </div>
              <Input 
                placeholder="E-Mail Adresse" 
                className="bg-slate-600 border-slate-500 text-white placeholder:text-slate-400"
              />
              <Input 
                placeholder="Ort des Projekts" 
                className="bg-slate-600 border-slate-500 text-white placeholder:text-slate-400"
              />
              <Textarea 
                placeholder="Beschreiben Sie Ihr Projekt..." 
                rows={4}
                className="bg-slate-600 border-slate-500 text-white placeholder:text-slate-400"
              />
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                Kostenvoranschlag anfordern
              </Button>
              <p className="text-xs text-slate-400 text-center">
                Kostenlose Beratung und unverbindliches Angebot
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
