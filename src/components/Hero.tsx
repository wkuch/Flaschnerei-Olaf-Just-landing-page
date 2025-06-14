
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users } from "lucide-react";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Ihr zuverlässiger Partner für 
              <span className="text-orange-400"> Metallarbeiten am Haus</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Seit über 30 Jahren steht die Flaschnerei Olaf Just für höchste Qualität 
              und Handwerkskunst. Als Vater-Sohn-Meisterbetrieb vereinen wir Tradition 
              mit modernen Techniken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Kostenvoranschlag anfordern
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-slate-400 text-slate-300 hover:bg-slate-700">
                Unsere Leistungen
              </Button>
            </div>
            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-orange-400" />
                <span className="text-slate-300">Meisterbetrieb</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-orange-400" />
                <span className="text-slate-300">Familienunternehmen</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-slate-600 rounded-lg h-96 flex items-center justify-center">
              <p className="text-slate-400">Platz für Hauptbild des Betriebs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
