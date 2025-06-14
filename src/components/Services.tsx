
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Home, 
  Wrench, 
  Shield, 
  Settings, 
  Building, 
  Hammer 
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Regenrinnen & Fallrohre",
    description: "Komplette Entwässerungssysteme für Ihr Dach - fachgerecht geplant und montiert nach bewährten Methoden."
  },
  {
    icon: Building,
    title: "Gauben & Dacharbeiten",
    description: "Traditionelle Gaubenverkleidung und sämtliche Blecharbeiten am Dach mit jahrzehntelanger Erfahrung."
  },
  {
    icon: Shield,
    title: "Mauerabdeckungen",
    description: "Langlebiger Schutz für Ihre Mauern mit handwerklich gefertigten, maßgeschneiderten Abdeckungen."
  },
  {
    icon: Settings,
    title: "Fenstersimse",
    description: "Wetterbeständige Fensterbänke aus hochwertigem Metall - präzise vermessen und fachmännisch montiert."
  },
  {
    icon: Wrench,
    title: "Reparaturen & Wartung",
    description: "Zuverlässige Reparaturen und fachgerechte Wartung Ihrer Metallkonstruktionen vom Meisterbetrieb."
  },
  {
    icon: Hammer,
    title: "Sonderanfertigungen",
    description: "Individuelle Metallarbeiten nach Ihren Wünschen - von der Planung bis zur handwerklichen Umsetzung."
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-zinc-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-amber-200 mb-6">Meisterhafte Leistungen</h2>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Alles was am Haus aus Metall ist - wir sind Ihr erfahrener Meisterbetrieb 
            für sämtliche Flaschnerei- und Metallarbeiten mit über 30 Jahren Tradition.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-300 border-2 border-amber-600/30 hover:border-amber-500/50 bg-gradient-to-br from-zinc-900 to-zinc-800 group">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl shadow-md group-hover:from-amber-500 group-hover:to-amber-600 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-amber-200 text-lg leading-tight">{service.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-zinc-400 leading-relaxed text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
