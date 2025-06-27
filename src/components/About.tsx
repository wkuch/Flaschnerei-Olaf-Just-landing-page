
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, MapPin, Star, Hammer, Shield } from "lucide-react";

export const About = () => {
  return (
    <section className="py-20 bg-white texture-subtle-grid relative">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl heading-secondary text-slate-800 mb-6">
              Über 25 Jahre Erfahrung als Meisterbetrieb
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Die Flaschnerei Olaf Just aus Talheim ist ein traditioneller Familienbetrieb, der seit 1998 
                im Großraum Heilbronn für Qualität und Zuverlässigkeit steht. Was als Ein-Mann-Betrieb begann, 
                ist heute ein erfolgreiches Vater-Sohn-Unternehmen.
              </p>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Beide Inhaber verfügen über den Meistertitel und bringen jahrzehntelange 
                Erfahrung mit. Diese Kombination aus Tradition und frischen Ideen macht 
                uns zu Ihrem idealen Partner für alle Flaschnerarbeiten am Haus im Raum Heilbronn.
              </p>
            </div>
            <div className="lg:col-span-1">
              <Card className="border-orange-300 craft-card hover-lift bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-8 text-center">
                  <MapPin className="w-12 h-12 text-orange-700 mx-auto mb-4" />
                  <h3 className="font-bold text-slate-800 mb-3 text-lg">Standort Talheim</h3>
                  <p className="text-slate-600 text-sm mb-4">Im Herzen des Großraums Heilbronn</p>
                  <div className="text-orange-700 font-semibold">Schmalzberg 7<br />74388 Talheim</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-orange-300 craft-card hover-lift">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-orange-100 rounded-full w-fit mx-auto mb-4">
                  <Award className="w-8 h-8 text-orange-700" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Doppelte Meister-Kompetenz</h3>
                <p className="text-slate-600 text-sm">Vater und Sohn mit Meistertitel</p>
              </CardContent>
            </Card>
            
            <Card className="border-orange-300 craft-card hover-lift">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-orange-100 rounded-full w-fit mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-700" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">25+ Jahre Erfahrung</h3>
                <p className="text-slate-600 text-sm">Seit 1998 als Meisterbetrieb tätig</p>
              </CardContent>
            </Card>
            
            <Card className="border-orange-300 craft-card hover-lift">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-orange-100 rounded-full w-fit mx-auto mb-4">
                  <Star className="w-8 h-8 text-orange-700" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Qualitätsversprechen</h3>
                <p className="text-slate-600 text-sm">Höchste Handwerkskunst garantiert</p>
              </CardContent>
            </Card>
            
            <Card className="border-orange-300 craft-card hover-lift">
              <CardContent className="p-6 text-center">
                <div className="p-3 bg-orange-100 rounded-full w-fit mx-auto mb-4">
                  <Shield className="w-8 h-8 text-orange-700" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Vollversichert</h3>
                <p className="text-slate-600 text-sm">Umfassender Versicherungsschutz</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-3xl heading-secondary mb-4">Traditionelles Handwerk, moderne Lösungen</h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Wir verbinden bewährte Handwerkstechniken mit innovativen Ansätzen, 
                  um Ihnen langlebige und ästhetische Lösungen für alle Blecharbeiten am Haus zu bieten.
                </p>
              </div>
              <div className="p-6 bg-orange-600/20 rounded-full">
                <Hammer className="w-16 h-16 text-orange-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
