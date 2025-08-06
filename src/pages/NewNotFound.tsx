import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Home, Phone, Mail } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero / 404 Section */}
      <main className="flex-1 flex flex-col">
        <section className="relative overflow-hidden bg-slate-900">
          {/* Background image layer (optional placeholder gradient) */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-slate-900/80 to-black/70" />
            <div className="services-pattern absolute inset-0 opacity-20" />
          </div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-6xl mx-auto py-24">
              
                <h1 className="heading-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight mb-6">
                  Seite nicht gefunden
                </h1>
              

              <p className="text-slate-200 text-lg sm:text-xl md:text-2xl max-w-3xl">
                Die Seite, die Sie suchen, existiert nicht oder wurde
                verschoben. Lassen Sie uns zurück zur Startseite gehen oder
                kontaktieren Sie uns – wir helfen gerne weiter.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                >
                  <Link to="/">
                    <Home className="mr-2 size-5" />
                    Zur Startseite
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white bg-transparent hover:bg-white hover:text-slate-800"
                >
                  <a href="tel:+4917182751441">
                    <Phone className="mr-2 size-5" />
                    Jetzt anrufen
                  </a>
                </Button>
              </div>

            </div>
          </div>
        </section>

        {/* Helpful links section on light background */}
        <section className="bg-slate-50 pb-0 flex-1 flex flex-col justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto pt-16 pb-16">
              <h3 className="heading-secondary text-2xl sm:text-3xl text-slate-800 mb-4">
                Beliebte Bereiche
              </h3>
              <p className="text-slate-600 mb-8">
                Hier sind ein paar schnelle Links, die Sie zu den wichtigsten
                Seiten führen.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { to: "/", title: "Startseite" },
                  { to: "/impressum", title: "Impressum" },
                  { to: "/datenschutz", title: "Datenschutz" },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="group block rounded-lg border border-[hsl(214.3,31.8%,91.4%)] bg-white p-6 hover-lift hover:shadow-lg transition-shadow craft-card border-l-4 border-l-orange-600 overflow-hidden"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="heading-secondary text-slate-800 text-xl">
                        {item.title}
                      </h4>
                      <span className="text-orange-600 group-hover:text-orange-700">
                        →
                      </span>
                    </div>
                    <p className="mt-2 text-[hsl(215.4,16.3%,46.9%)]">
                      {item.title === 'Startseite' ? 'Zurück zur Hauptseite mit allen Informationen.' : 
                       item.title === 'Impressum' ? 'Rechtliche Informationen und Kontaktdaten.' :
                       'Informationen zum Datenschutz.'}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </div>
  );
}
