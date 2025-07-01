
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";
import { ContactFormData, ServiceType, FormSubmissionResult } from "@/types/contact";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<FormSubmissionResult | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<ContactFormData>();

  const watchedService = watch("service");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const formData = new FormData();
      formData.append("access_key", "6947f10c-c96e-4514-b200-3bba8f60bd23");
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone || "");
      formData.append("service", data.service);
      formData.append("message", data.message);
      formData.append("subject", `Kontaktanfrage von ${data.name} - ${data.service}`);
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setSubmitResult({ success: true, message: "Ihre Nachricht wurde erfolgreich versendet! Wir melden uns bald bei Ihnen." });
        reset();
      } else {
        setSubmitResult({ success: false, message: "Fehler beim Versenden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt." });
      }
    } catch (error) {
      setSubmitResult({ success: false, message: "Fehler beim Versenden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions: ServiceType[] = [
    "Sonstiges/Mehrere Arbeiten",
    "Regenrinnen & Fallrohre",
    "Gauben & Dacharbeiten",
    "Mauerabdeckungen",
    "Fenstersimse",
    "Reparaturen & Wartung",
    "Sonderanfertigungen",
    "Beratung"
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800 text-white texture-metal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl heading-secondary mb-4">Kontakt & Beratung</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Haben Sie ein Projekt im Großraum Heilbronn oder Fragen? Wir beraten Sie gerne unverbindlich 
            und erstellen Ihnen ein kostenloses Angebot.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl heading-secondary mb-8 text-orange-600">Nehmen Sie Kontakt auf</h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-600 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Telefon</h4>
                  <a href="tel:+4917182751441" className="text-slate-300 hover:text-orange-600 transition-colors">+49 171 8275144</a>
                  <p className="text-sm text-slate-400">Mo-Fr: 8:00 - 17:00 Uhr</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-600 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">E-Mail</h4>
                  <a href="mailto:info@flaschnerei-just.de" className="text-slate-300 hover:text-orange-600 transition-colors">info@flaschnerei-just.de</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-600 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Standort</h4>
                  <p className="text-slate-300">Schmalzberg 7<br />74388 Talheim</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-600 rounded-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Öffnungszeiten</h4>
                  <p className="text-slate-300">Mo-Fr: 8:00 - 17:00 Uhr</p>
                  <p className="text-sm text-slate-400">Notfälle nach Absprache</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-slate-700 border-slate-600">
            <CardHeader>
              <CardTitle className="text-white">Nehmen Sie Kontakt auf</CardTitle>
            </CardHeader>
            <CardContent>
              {submitResult ? (
                <div className={`p-4 rounded-lg border ${
                  submitResult.success 
                    ? "bg-green-600/10 border-green-600/20 text-green-400" 
                    : "bg-red-600/10 border-red-600/20 text-red-400"
                }`}>
                  <div className="flex items-center gap-2">
                    {submitResult.success ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    <p className="text-sm">{submitResult.message}</p>
                  </div>
                  {submitResult.success && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-3 text-green-700 border-green-600/20 hover:bg-green-600/10"
                      onClick={() => setSubmitResult(null)}
                    >
                      Weitere Nachricht senden
                    </Button>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Name *</Label>
                    <Input
                      id="name"
                      {...register("name", { required: "Name ist erforderlich" })}
                      className="bg-slate-600 border-slate-500 text-white placeholder:text-slate-400"
                      placeholder="Ihr vollständiger Name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">E-Mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", { 
                        required: "E-Mail ist erforderlich",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Ungültige E-Mail-Adresse"
                        }
                      })}
                      className="bg-slate-600 border-slate-500 text-white placeholder:text-slate-400"
                      placeholder="ihre.email@beispiel.de"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Telefon</Label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      className="bg-slate-600 border-slate-500 text-white placeholder:text-slate-400"
                      placeholder="Ihre Telefonnummer (optional)"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-white">Gewünschte Leistung *</Label>
                    <Select onValueChange={(value) => setValue("service", value)} value={watchedService}>
                      <SelectTrigger className="bg-slate-600 border-slate-500 text-white">
                        <SelectValue placeholder="Wählen Sie eine Leistung aus" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-600 border-slate-500">
                        {serviceOptions.map((service) => (
                          <SelectItem key={service} value={service} className="text-white hover:bg-slate-500">
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <input 
                      type="hidden" 
                      {...register("service", { required: "Bitte wählen Sie eine Leistung aus" })} 
                    />
                    {errors.service && (
                      <p className="text-red-400 text-sm">{errors.service.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Nachricht *</Label>
                    <Textarea
                      id="message"
                      {...register("message", { required: "Nachricht ist erforderlich" })}
                      className="bg-slate-600 border-slate-500 text-white placeholder:text-slate-400 min-h-[100px]"
                      placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm">{errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Wird gesendet...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Anfrage senden
                      </div>
                    )}
                  </Button>
                </form>
              )}
              
              <div className="mt-6 space-y-3">
                <div className="text-center text-slate-300 text-sm mb-3">
                  Oder kontaktieren Sie uns direkt:
                </div>
                
                <div className="space-y-2">
                  <a 
                    href="tel:+4917182751441" 
                    className="flex items-center gap-3 p-3 bg-slate-600 rounded-lg hover:bg-slate-500 transition-colors cursor-pointer"
                  >
                    <Phone className="w-5 h-5 text-orange-600" />
                    <div className="text-left">
                      <p className="font-semibold text-white">Direkt anrufen</p>
                      <p className="text-sm text-slate-300">+49 171 8275144</p>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:info@flaschnerei-just.de" 
                    className="flex items-center gap-3 p-3 bg-slate-600 rounded-lg hover:bg-slate-500 transition-colors cursor-pointer"
                  >
                    <Mail className="w-5 h-5 text-orange-600" />
                    <div className="text-left">
                      <p className="font-semibold text-white">E-Mail schreiben</p>
                      <p className="text-sm text-slate-300">info@flaschnerei-just.de</p>
                    </div>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
