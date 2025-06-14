
import { Phone, Mail } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-zinc-900 border-b border-amber-600/30 py-6 sticky top-0 z-50 shadow-lg backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-amber-200">Flaschnerei Olaf Just</h1>
              <span className="text-sm text-amber-400/80 font-medium">Meisterbetrieb seit 1990</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-2 text-amber-200">
              <Phone className="w-5 h-5 text-amber-500" />
              <span className="font-medium">+49 XXX XXXXXXX</span>
            </div>
            <div className="flex items-center space-x-2 text-amber-200">
              <Mail className="w-5 h-5 text-amber-500" />
              <span className="font-medium">info@flaschnerei-just.de</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
