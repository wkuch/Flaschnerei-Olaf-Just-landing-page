
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Handshake, Star } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl heading-secondary text-slate-800 mb-6">
              Über 25 Jahre Erfahrung als Meisterbetrieb
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Die Flaschnerei Olaf Just aus Talheim ist ein traditioneller Familienbetrieb, der seit 1997 
              im Großraum Heilbronn für Qualität und Zuverlässigkeit steht. Was als Ein-Mann-Betrieb begann, 
              ist heute ein erfolgreiches Vater-Sohn-Unternehmen.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Beide Inhaber verfügen über den Meistertitel und bringen jahrzehntelange 
              Erfahrung mit. Diese Kombination aus Tradition und frischen Ideen macht 
              uns zu Ihrem idealen Partner für alle Flaschnerarbeiten am Haus im Raum Heilbronn.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-orange-300">
                <CardContent className="p-6 text-center">
                  <Award className="w-8 h-8 text-orange-700 mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-800 mb-2">Doppelte Meister-Kompetenz</h3>
                  <p className="text-slate-600 text-sm">Vater und Sohn mit Meistertitel</p>
                </CardContent>
              </Card>
              
              <Card className="border-orange-300">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-orange-700 mx-auto mb-3" />
                  <h3 className="font-semibold text-slate-800 mb-2">25+ Jahre Erfahrung</h3>
                  <p className="text-slate-600 text-sm">Seit 1997 als Meisterbetrieb tätig</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-6">
            <img 
              src="/Werkstatt.jpg" 
              alt="Werkstatt der Flaschnerei Olaf Just" 
              className="rounded-lg h-64 w-full object-cover shadow-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/HeroSectionFoto.jpg" 
                alt="Betriebsansicht" 
                className="rounded-lg h-32 w-full object-cover shadow-lg"
              />
              <img 
                src="/gauben und rinnenarbeit.jpg" 
                alt="Gauben und Rinnenarbeit" 
                className="rounded-lg h-32 w-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
