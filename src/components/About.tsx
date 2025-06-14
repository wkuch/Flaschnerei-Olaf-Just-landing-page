
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Handshake, Star } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">
              Über 30 Jahre Erfahrung im Flaschnerei-Handwerk
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Die Flaschnerei Olaf Just ist ein traditioneller Familienbetrieb, der seit 1990 
              für Qualität und Zuverlässigkeit steht. Was als Ein-Mann-Betrieb begann, 
              ist heute ein erfolgreiches Vater-Sohn-Unternehmen.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Beide Inhaber verfügen über den Meistertitel und bringen jahrzehntelange 
              Erfahrung mit. Diese Kombination aus Tradition und frischen Ideen macht 
              uns zu Ihrem idealen Partner für alle Metallarbeiten am Haus.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-orange-200">
                <CardContent className="p-6 text-center">
                  <Award className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-800 mb-2">Doppelte Meister-Kompetenz</h3>
                  <p className="text-slate-600 text-sm">Vater und Sohn mit Meistertitel</p>
                </CardContent>
              </Card>
              
              <Card className="border-orange-200">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-800 mb-2">30+ Jahre Erfahrung</h3>
                  <p className="text-slate-600 text-sm">Seit 1990 im Handwerk tätig</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-600 rounded-lg h-64 flex items-center justify-center">
              <p className="text-slate-400">Platz für Betriebsbilder</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-600 rounded-lg h-32 flex items-center justify-center">
                <p className="text-slate-400 text-sm">Werkstatt</p>
              </div>
              <div className="bg-slate-600 rounded-lg h-32 flex items-center justify-center">
                <p className="text-slate-400 text-sm">Projekte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
