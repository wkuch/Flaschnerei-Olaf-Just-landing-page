
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
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Ihr zuverlässiger Partner für 
              <span className="text-orange-600"> Flaschnerarbeiten am Haus</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Seit über 25 Jahren steht die Flaschnerei Olaf Just im Großraum Heilbronn für höchste Qualität 
              und Handwerkskunst. Als Vater-Sohn-Meisterbetrieb aus Talheim vereinen wir Tradition 
              mit modernen Techniken.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white"
                onClick={scrollToContact}
              >
                Kontakt aufnehmen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-slate-400 text-slate-800 hover:bg-slate-700 hover:text-white"
                onClick={scrollToServices}
              >
                Unsere Leistungen
              </Button>
            </div>
            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-orange-600" />
                <span className="text-slate-300">Meisterbetrieb</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-orange-600" />
                <span className="text-slate-300">Familienunternehmen</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/HeroSectionFoto.jpg" 
              alt="Flaschnerei Olaf Just Betrieb" 
              className="rounded-lg h-96 w-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
