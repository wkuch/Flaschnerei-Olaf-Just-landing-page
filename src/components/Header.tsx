
import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-slate-800 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="/logo.png" 
              alt="Flaschnerei Olaf Just Logo" 
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-orange-600">Flaschnerei Olaf Just</h1>
              <span className="text-sm text-slate-300">Meisterbetrieb seit 1990</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-orange-600" />
              <span className="text-sm">+49 XXX XXXXXXX</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-orange-600" />
              <span className="text-sm">info@flaschnerei-just.de</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
