
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Handshake, Star, Users, Hammer } from "lucide-react";

export const About = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6">
              <span className="inline-block bg-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                Unsere Geschichte
              </span>
            </div>
            <h2 className="text-4xl font-bold text-amber-900 mb-8 leading-tight">
              Über 30 Jahre Tradition im Flaschnerei-Handwerk
            </h2>
            <p className="text-lg text-amber-800 mb-6 leading-relaxed">
              Die Flaschnerei Olaf Just ist ein traditioneller Familienbetrieb, der seit 1990 
              für Qualität, Zuverlässigkeit und ehrliche Handwerksarbeit steht. Was als 
              Ein-Mann-Betrieb mit viel Herzblut begann, ist heute ein erfolgreiches 
              Vater-Sohn-Unternehmen.
            </p>
            <p className="text-lg text-amber-800 mb-10 leading-relaxed">
              Beide Inhaber verfügen über den Meistertitel und bringen gemeinsam über 
              fünf Jahrzehnte Erfahrung mit. Diese einzigartige Kombination aus bewährter 
              Tradition und frischen Ideen macht uns zu Ihrem idealen Partner für alle 
              Metallarbeiten am Haus.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-2 border-orange-200 bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl w-fit mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-amber-900 mb-2 text-lg">Doppelte Meister-Kompetenz</h3>
                  <p className="text-amber-700">Vater und Sohn mit Meistertitel</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-orange-200 bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl w-fit mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-amber-900 mb-2 text-lg">Seit 1990</h3>
                  <p className="text-amber-700">Über 30 Jahre Tradition</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-amber-200 rounded-2xl h-64 flex items-center justify-center border-4 border-amber-300 shadow-lg">
              <p className="text-amber-700 font-medium">Platz für Betriebsbilder</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-amber-200 rounded-xl h-32 flex items-center justify-center border-2 border-amber-300">
                <p className="text-amber-700 font-medium text-sm">Werkstatt</p>
              </div>
              <div className="bg-amber-200 rounded-xl h-32 flex items-center justify-center border-2 border-amber-300">
                <p className="text-amber-700 font-medium text-sm">Projekte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
