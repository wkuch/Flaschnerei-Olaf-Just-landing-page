
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Flaschnerei Olaf Just Logo" 
                className="h-10 w-auto"
              />
              <h3 className="text-xl font-bold text-orange-400">Flaschnerei Olaf Just</h3>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Ihr zuverlässiger Meisterbetrieb für alle Metallarbeiten am Haus. 
              Seit über 30 Jahren in der Region tätig.
            </p>
            <p className="text-sm text-slate-500">
              Familienbetrieb • Meister-Qualität • Faire Preise
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Unsere Leistungen</h4>
            <ul className="space-y-2 text-sm">
              <li>Regenrinnen & Fallrohre</li>
              <li>Gauben & Dacharbeiten</li>
              <li>Mauerabdeckungen</li>
              <li>Fenstersimse</li>
              <li>Reparaturen & Wartung</li>
              <li>Sonderanfertigungen</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Kontakt</h4>
            <div className="space-y-2 text-sm">
              <p>+49 XXX XXXXXXX</p>
              <p>info@flaschnerei-just.de</p>
              <p>[Ihre Adresse]</p>
              <p className="text-slate-500 mt-4">Mo-Fr: 7:00 - 17:00 Uhr</p>
            </div>
          </div>
        </div>
        
        <Separator className="bg-slate-700 mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; 2024 Flaschnerei Olaf Just. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/impressum" className="hover:text-orange-400 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-orange-400 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
