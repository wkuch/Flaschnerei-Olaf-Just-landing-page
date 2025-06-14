
import { Card, CardContent } from "@/components/ui/card";
import { Award, Calendar, Hammer, Users } from "lucide-react";

export const Team = () => {
  return (
    <section className="py-24 bg-zinc-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-amber-200 mb-6">Die Meister hinter der Qualität</h2>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Lernen Sie unser Vater-Sohn-Team kennen - zwei Generationen vereint 
            durch die Leidenschaft für traditionelles Handwerk und höchste Qualität.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <Card className="text-center hover:shadow-2xl transition-all duration-300 border-2 border-amber-600/30 bg-gradient-to-br from-zinc-900 to-zinc-800 group">
            <CardContent className="p-10">
              <div className="bg-gradient-to-br from-zinc-700 to-zinc-600 rounded-full w-40 h-40 mx-auto mb-8 flex items-center justify-center border-2 border-amber-600/30 shadow-lg group-hover:border-amber-500/50 transition-all duration-300">
                <p className="text-zinc-400 font-medium">Foto Olaf Just</p>
              </div>
              <h3 className="text-3xl font-bold text-amber-200 mb-3">Olaf Just</h3>
              <p className="text-amber-500 font-bold mb-6 text-lg">Flaschnerei-Meister & Gründer</p>
              <p className="text-zinc-300 mb-8 leading-relaxed">
                Seit über 30 Jahren selbstständig im Flaschnerei-Handwerk tätig. 
                Gründer des Betriebs und Experte für alle traditionellen Metallarbeiten am Haus. 
                Seine Erfahrung und sein Können sind das Fundament unseres Erfolgs.
              </p>
              <div className="flex justify-center gap-8 text-sm">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Award className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold">Meister seit 1990</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Calendar className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold">30+ Jahre Erfahrung</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-2xl transition-all duration-300 border-2 border-amber-600/30 bg-gradient-to-br from-zinc-900 to-zinc-800 group">
            <CardContent className="p-10">
              <div className="bg-gradient-to-br from-zinc-700 to-zinc-600 rounded-full w-40 h-40 mx-auto mb-8 flex items-center justify-center border-2 border-amber-600/30 shadow-lg group-hover:border-amber-500/50 transition-all duration-300">
                <p className="text-zinc-400 font-medium">Foto Sohn</p>
              </div>
              <h3 className="text-3xl font-bold text-amber-200 mb-3">[Name des Sohnes]</h3>
              <p className="text-amber-500 font-bold mb-6 text-lg">Flaschnerei-Meister</p>
              <p className="text-zinc-300 mb-8 leading-relaxed">
                Bringt als Meister der zweiten Generation frische Ideen und moderne 
                Techniken in den Traditionsbetrieb ein. Seine Leidenschaft für das 
                Handwerk und innovative Ansätze ergänzen perfekt die bewährte Erfahrung.
              </p>
              <div className="flex justify-center gap-8 text-sm">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Award className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold">Meistertitel</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Users className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold">2. Generation</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
