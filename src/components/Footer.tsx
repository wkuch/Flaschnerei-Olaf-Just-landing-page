
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-amber-200 mb-6">Flaschnerei Olaf Just</h3>
            <p className="text-amber-200 leading-relaxed mb-6">
              Ihr zuverlässiger Meisterbetrieb für alle Metallarbeiten am Haus. 
              Seit über 30 Jahren in der Region tätig - Tradition, die Sie spüren können.
            </p>
            <div className="flex gap-4 text-sm">
              <span className="bg-orange-600 px-3 py-1 rounded-full font-medium text-white">Familienbetrieb</span>
              <span className="bg-orange-600 px-3 py-1 rounded-full font-medium text-white">Meister-Qualität</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-amber-200 mb-6 text-lg">Unsere Meisterleistungen</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Regenrinnen & Fallrohre</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Gauben & Dacharbeiten</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Mauerabdeckungen</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Fenstersimse</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Reparaturen & Wartung</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                <span>Sonderanfertigungen</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-amber-200 mb-6 text-lg">Kontakt</h4>
            <div className="space-y-4">
              <p className="text-lg font-medium">+49 XXX XXXXXXX</p>
              <p className="text-lg font-medium">info@flaschnerei-just.de</p>
              <p>[Ihre Adresse]</p>
              <div className="mt-6 p-4 bg-amber-800 rounded-lg">
                <p className="font-medium text-amber-200 mb-1">Öffnungszeiten</p>
                <p>Mo-Fr: 7:00 - 17:00 Uhr</p>
                <p className="text-sm text-amber-300 mt-1">Notfälle nach Absprache</p>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-amber-700 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-amber-300">
          <p>&copy; 2024 Flaschnerei Olaf Just. Alle Rechte vorbehalten.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-amber-200 transition-colors font-medium">Impressum</a>
            <a href="#" className="hover:text-amber-200 transition-colors font-medium">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
