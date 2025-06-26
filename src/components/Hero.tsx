
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
        <div className="max-w-6xl mx-auto text-center px-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl heading-primary mb-8 leading-tight break-words">
            Ihr zuverlässiger Partner für 
            <span className="text-orange-600 heading-accent block mt-2"> Flaschnerarbeiten am Haus</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto px-2">
            Seit über 25 Jahren steht die Flaschnerei Olaf Just im Großraum Heilbronn für höchste Qualität 
            und Handwerkskunst. Als Vater-Sohn-Meisterbetrieb aus Talheim vereinen wir Tradition 
            mit modernen Techniken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16 justify-center px-2">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
              onClick={scrollToContact}
            >
              Kontakt aufnehmen
              <ArrowRight className="ml-2 w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white bg-transparent hover:bg-white hover:text-slate-800 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
              onClick={scrollToServices}
            >
              Unsere Leistungen
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 justify-center items-start sm:items-center px-2">
            <div className="flex items-center gap-3 w-full sm:w-auto max-w-full">
              <div className="p-2 sm:p-3 bg-orange-600/20 rounded-full flex-shrink-0">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
              </div>
              <div className="text-left min-w-0 flex-1 sm:flex-initial">
                <div className="text-white font-semibold text-base sm:text-lg">Meisterbetrieb</div>
                <div className="text-slate-400 text-xs sm:text-sm">Seit 1997</div>
              </div>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto max-w-full">
              <div className="p-2 sm:p-3 bg-orange-600/20 rounded-full flex-shrink-0">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
              </div>
              <div className="text-left min-w-0 flex-1 sm:flex-initial">
                <div className="text-white font-semibold text-base sm:text-lg">Familienunternehmen</div>
                <div className="text-slate-400 text-xs sm:text-sm">2 Generationen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
