
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
              <div className="bg-slate-600 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                <p className="text-slate-400 text-sm">Foto Olaf Just</p>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Olaf Just</h3>
              <p className="text-orange-600 font-semibold mb-4">Flaschnerei-Meister & Gründer</p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Seit über 30 Jahren selbstständig im Flaschnerei-Handwerk tätig. 
                Gründer des Betriebs und Experte für alle traditionellen Metallarbeiten am Haus.
              </p>
              <div className="flex justify-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span>Meister seit 1990</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>30+ Jahre Erfahrung</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="bg-slate-600 rounded-full w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                <p className="text-slate-400 text-sm">Foto Sohn</p>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">[Name des Sohnes]</h3>
              <p className="text-orange-600 font-semibold mb-4">Flaschnerei-Meister</p>
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
