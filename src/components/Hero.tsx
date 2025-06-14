
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Hammer } from "lucide-react";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-amber-900/20 py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6">
              <span className="inline-block bg-amber-600/20 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-amber-600/30">
                Tradition seit 1990
              </span>
            </div>
            <h2 className="text-5xl font-bold mb-8 leading-tight text-amber-100">
              Meisterhafte 
              <span className="text-amber-500 block"> Metallarbeiten am Haus</span>
            </h2>
            <p className="text-xl text-zinc-300 mb-10 leading-relaxed font-medium">
              Seit über drei Jahrzehnten steht die Flaschnerei Olaf Just für zuverlässige 
              Handwerkskunst und Qualität. Als Familienbetrieb mit zwei Meistertiteln 
              verbinden wir bewährte Tradition mit modernem Fachwissen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg border-0">
                Kostenvoranschlag anfordern
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-amber-600 text-amber-400 hover:bg-amber-600/10 bg-transparent">
                Unsere Leistungen
              </Button>
            </div>
            <div className="flex gap-12">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-600/20 rounded-lg border border-amber-600/30">
                  <Award className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <span className="text-amber-200 font-semibold block">Doppelter Meistertitel</span>
                  <span className="text-zinc-400 text-sm">Vater & Sohn</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-600/20 rounded-lg border border-amber-600/30">
                  <Hammer className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <span className="text-amber-200 font-semibold block">30+ Jahre</span>
                  <span className="text-zinc-400 text-sm">Erfahrung</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-2xl h-96 flex items-center justify-center border-2 border-amber-600/30 shadow-2xl">
              <p className="text-zinc-400 font-medium">Platz für Hauptbild des Betriebs</p>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-amber-600 to-amber-700 text-white p-4 rounded-xl shadow-lg border border-amber-500/30">
              <p className="font-bold text-lg">30+</p>
              <p className="text-sm">Jahre Tradition</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
