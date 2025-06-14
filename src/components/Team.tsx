
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar } from "lucide-react";

export const Team = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Unser Team</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Lernen Sie die Meister kennen, die hinter der Qualität unserer Arbeit stehen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="/Herr Just senior.png" 
                  alt="Olaf Just - Flaschnerei-Meister & Gründer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Olaf Just</h3>
              <p className="text-orange-700 font-semibold mb-4">Flaschnerei-Meister & Gründer</p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Seit über 25 Jahren selbstständig als Flaschnerei-Meister tätig. 
                Gründer des Betriebs und Experte für alle traditionellen Flaschnerarbeiten am Haus.
              </p>
              <div className="flex justify-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span>Meister seit 1997</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>25+ Jahre Erfahrung</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="/Herr just junior.png" 
                  alt="Lucas Schmidt - Flaschnerei-Meister" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Lucas Schmidt</h3>
              <p className="text-orange-700 font-semibold mb-4">Flaschnerei-Meister</p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Bringt frische Ideen und moderne Techniken in den Traditionsbetrieb ein. 
                Meister der zweiten Generation mit Leidenschaft für das Handwerk.
              </p>
              <div className="flex justify-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span>Meistertitel</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Neue Generation</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
