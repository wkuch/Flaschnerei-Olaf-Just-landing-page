
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
    description: "Komplette Entwässerungssysteme für Ihr Dach im Großraum Heilbronn - fachgerecht geplant und montiert."
  },
  {
    icon: Building,
    title: "Gauben & Dacharbeiten",
    description: "Professionelle Gaubenverkleidung und sämtliche Blecharbeiten am Dach."
  },
  {
    icon: Shield,
    title: "Mauerabdeckungen",
    description: "Langlebiger Schutz für Ihre Mauern mit maßgefertigten Abdeckungen."
  },
  {
    icon: Settings,
    title: "Fenstersimse",
    description: "Wetterbeständige Fensterbänke aus hochwertigem Metall nach Maß."
  },
  {
    icon: Wrench,
    title: "Reparaturen & Wartung",
    description: "Schnelle Reparaturen und regelmäßige Wartung Ihrer Metallkonstruktionen."
  },
  {
    icon: Hammer,
    title: "Sonderanfertigungen",
    description: "Individuelle Metallarbeiten nach Ihren Wünschen und Anforderungen in Talheim und Umgebung."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Unsere Leistungen</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Alles was am Haus aus Metall ist - wir sind Ihr kompetenter Partner im Großraum Heilbronn
            für sämtliche Flaschnerei- und Metallarbeiten.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-orange-600">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-200 rounded-lg">
                    <service.icon className="w-6 h-6 text-orange-700" />
                  </div>
                  <CardTitle className="text-slate-800">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
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
