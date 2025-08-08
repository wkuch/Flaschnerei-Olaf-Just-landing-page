
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar } from "lucide-react";

export const Team = () => {
  return (
    <section className="py-20 bg-slate-50 section-pattern-2">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl heading-secondary text-slate-800 mb-4">Familienbetrieb</h2>
          <div className="enhanced-divider w-full max-w-md"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Handwerkskunst in der Familie: Lernen Sie unsere Meister kennen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <Card className="text-center craft-card premium-card">
            <CardContent className="p-8 accent-line">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-orange-600 shadow-lg flex items-center justify-center ring-4 ring-orange-100">
                <span className="text-4xl font-bold text-white">OJ</span>
              </div>
              <h3 className="text-2xl heading-secondary text-slate-800 mb-2">Olaf Just</h3>
              <p className="text-orange-700 font-semibold mb-4">Flaschnerei-Meister & Gründer</p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Seit über 25 Jahren selbstständig als Flaschnerei-Meister tätig. 
                Gründer des Betriebs und Experte für alle traditionellen Flaschnerarbeiten am Haus.
              </p>
              <div className="flex justify-center gap-4 text-sm text-slate-500">
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span>Meister seit 1998</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>25+ Jahre Erfahrung</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center craft-card premium-card">
            <CardContent className="p-8 accent-line">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-slate-700 shadow-lg flex items-center justify-center ring-4 ring-slate-200">
                <span className="text-4xl font-bold text-white">LJ</span>
              </div>
              <h3 className="text-2xl heading-secondary text-slate-800 mb-2">Lucas Just</h3>
              <p className="text-orange-700 font-semibold mb-4">Flaschnerei-Meister</p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Als Sohn des Gründers bringt er frische Ideen und moderne Techniken ein. 
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
