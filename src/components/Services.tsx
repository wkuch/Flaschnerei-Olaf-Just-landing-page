
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    image: "/Regenrinne.png",
    title: "Regenrinnen & Fallrohre",
    description: "Komplette Entwässerungssysteme für Ihr Dach im Großraum Heilbronn - fachgerecht geplant und montiert."
  },
  {
    image: "/gaube.png",
    title: "Gauben & Dacharbeiten", 
    description: "Professionelle Gaubenverkleidung und sämtliche Blecharbeiten am Dach."
  },
  {
    image: "/Mauerabdeckung.png",
    title: "Mauerabdeckungen",
    description: "Langlebiger Schutz für Ihre Mauern mit maßgefertigten Abdeckungen."
  },
  {
    image: "/Fenstersimse.png",
    title: "Fenstersimse",
    description: "Wetterbeständige Fensterbänke aus hochwertigem Metall nach Maß."
  },
  {
    image: "/Reperatur.png",
    title: "Reparaturen & Wartung",
    description: "Schnelle Reparaturen und regelmäßige Wartung Ihrer Blechkonstruktionen."
  },
  {
    image: "/sonderanfertigung.png",
    title: "Sonderanfertigungen",
    description: "Individuelle Flaschnerarbeiten nach Ihren Wünschen und Anforderungen in Talheim und Umgebung."
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-50 services-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl heading-secondary text-slate-800 mb-4">Unsere Leistungen</h2>
          <div className="craft-divider h-4 mb-6"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Alles was am Haus aus Blech ist - wir sind Ihr kompetenter Partner im Großraum Heilbronn
            für sämtliche Flaschnerei- und Blecharbeiten.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-orange-600 craft-card hover-lift overflow-hidden">
              <div className="aspect-square relative overflow-hidden bg-slate-100 max-w-64 mx-auto mt-6 rounded-lg shadow-sm">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-slate-800">{service.title}</CardTitle>
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
