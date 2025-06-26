
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users } from "lucide-react";

export const Hero = () => {
  const scrollToServices = () => {
    const servicesElement = document.getElementById('services');
    servicesElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    contactElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-24 hero-pattern relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl heading-primary mb-8 leading-tight">
            Ihr zuverlässiger Partner für 
            <span className="text-orange-600 heading-accent block mt-2"> Flaschnerarbeiten am Haus</span>
          </h2>
          <p className="text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Seit über 25 Jahren steht die Flaschnerei Olaf Just im Großraum Heilbronn für höchste Qualität 
            und Handwerkskunst. Als Vater-Sohn-Meisterbetrieb aus Talheim vereinen wir Tradition 
            mit modernen Techniken.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mb-16 justify-center">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg"
              onClick={scrollToContact}
            >
              Kontakt aufnehmen
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white bg-transparent hover:bg-white hover:text-slate-800 px-8 py-4 text-lg"
              onClick={scrollToServices}
            >
              Unsere Leistungen
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-12 justify-center items-center">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-600/20 rounded-full">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-lg">Meisterbetrieb</div>
                <div className="text-slate-400 text-sm">Seit 1997</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-600/20 rounded-full">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-lg">Familienunternehmen</div>
                <div className="text-slate-400 text-sm">2 Generationen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
