
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Handshake, Star, Users, Hammer } from "lucide-react";

export const About = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-zinc-900 to-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6">
              <span className="inline-block bg-amber-600/20 text-amber-400 px-4 py-2 rounded-full text-sm font-semibold border border-amber-600/30">
                Unsere Geschichte
              </span>
            </div>
            <h2 className="text-4xl font-bold text-amber-200 mb-8 leading-tight">
              Über 30 Jahre Tradition im Flaschnerei-Handwerk
            </h2>
            <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
              Die Flaschnerei Olaf Just ist ein traditioneller Familienbetrieb, der seit 1990 
              für Qualität, Zuverlässigkeit und ehrliche Handwerksarbeit steht. Was als 
              Ein-Mann-Betrieb mit viel Herzblut begann, ist heute ein erfolgreiches 
              Vater-Sohn-Unternehmen.
            </p>
            <p className="text-lg text-zinc-300 mb-10 leading-relaxed">
              Beide Inhaber verfügen über den Meistertitel und bringen gemeinsam über 
              fünf Jahrzehnte Erfahrung mit. Diese einzigartige Kombination aus bewährter 
              Tradition und frischen Ideen macht uns zu Ihrem idealen Partner für alle 
              Metallarbeiten am Haus.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-2 border-amber-600/30 bg-gradient-to-br from-zinc-800 to-zinc-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl w-fit mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-amber-200 mb-2 text-lg">Doppelte Meister-Kompetenz</h3>
                  <p className="text-zinc-400">Vater und Sohn mit Meistertitel</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-amber-600/30 bg-gradient-to-br from-zinc-800 to-zinc-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl w-fit mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-amber-200 mb-2 text-lg">Seit 1990</h3>
                  <p className="text-zinc-400">Über 30 Jahre Tradition</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-2xl h-64 flex items-center justify-center border-2 border-amber-600/30 shadow-2xl">
              <p className="text-zinc-400 font-medium">Platz für Betriebsbilder</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-xl h-32 flex items-center justify-center border border-amber-600/30">
                <p className="text-zinc-400 font-medium text-sm">Werkstatt</p>
              </div>
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-700 rounded-xl h-32 flex items-center justify-center border border-amber-600/30">
                <p className="text-zinc-400 font-medium text-sm">Projekte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
