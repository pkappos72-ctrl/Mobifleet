"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Globe, Menu, X } from "lucide-react"

export default function MobiFleetWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState("en")

  const content = {
    en: {
      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        contact: "Contact",
      },
      hero: {
        headline: "MobiFleet — Making Mobility Possible",
        subheadline: "We retrofit vehicles for accessibility, safety, and independence.",
        cta: "Contact Us for a Quote",
      },
      about: {
        title: "About Us",
        text: "At MobiFleet, we believe mobility is freedom. Our mission is to retrofit vehicles with the latest accessibility technologies, ensuring safety, comfort, and independence for our clients. From wheelchair lifts to adaptive driving controls, our team is committed to quality craftsmanship and compassionate service.",
      },
      services: {
        title: "Vehicles & Services",
        subtitle: "Comprehensive accessibility solutions for every need",
        items: [
          {
            title: "Wheelchair Vans",
            description: "Side-entry and rear-entry ramps for easy wheelchair access",
            features: ["Lowered floors", "Tie-down systems", "Power ramps"],
          },
          {
            title: "SUV Lift Systems",
            description: "Hydraulic and platform lifts for larger vehicles",
            features: ["Heavy-duty lifts", "Weather protection", "Remote operation"],
          },
          {
            title: "Adaptive Driving Controls",
            description: "Hand controls and pedal extensions for independent driving",
            features: ["Push-pull controls", "Spinner knobs", "Left-foot accelerators"],
          },
          {
            title: "Transfer Seats",
            description: "Swivel bases and transfer seats for easier vehicle entry",
            features: ["360° rotation", "Height adjustment", "Safety locks"],
          },
          {
            title: "Custom Solutions",
            description: "Tailored retrofitting options for unique mobility needs",
            features: ["Personal consultation", "Custom fabrication", "Ongoing support"],
          },
        ],
      },
      contact: {
        title: "Get a Quote or Ask Us Anything",
        subtitle: "We'll guide you through the process of making your vehicle accessible.",
        form: {
          name: "Full Name",
          email: "Email Address",
          phone: "Phone Number",
          vehicle: "Vehicle Type",
          message: "Message or Special Requirements",
          submit: "Request Quote",
        },
      },
      footer: {
        slogan: "Mobility without limits.",
        copyright: "© 2025 MobiFleet. All rights reserved.",
      },
    },
    fr: {
      nav: {
        home: "Accueil",
        about: "À propos",
        services: "Services",
        contact: "Contact",
      },
      hero: {
        headline: "MobiFleet — Rendre la mobilité possible",
        subheadline: "Nous adaptons les véhicules pour l'accessibilité, la sécurité et l'indépendance.",
        cta: "Contactez-nous pour un devis",
      },
      about: {
        title: "À propos de nous",
        text: "Chez MobiFleet, nous croyons que la mobilité est la liberté. Notre mission est d'adapter les véhicules avec les dernières technologies d'accessibilité, garantissant sécurité, confort et indépendance pour nos clients. Des élévateurs pour fauteuils roulants aux commandes de conduite adaptatives, notre équipe s'engage à offrir un savoir-faire de qualité et un service compatissant.",
      },
      services: {
        title: "Véhicules et Services",
        subtitle: "Solutions d'accessibilité complètes pour tous les besoins",
        items: [
          {
            title: "Fourgonnettes pour fauteuils roulants",
            description: "Rampes d'entrée latérale et arrière pour un accès facile en fauteuil roulant",
            features: ["Planchers abaissés", "Systèmes d'arrimage", "Rampes électriques"],
          },
          {
            title: "Systèmes d'élévation SUV",
            description: "Élévateurs hydrauliques et plateformes pour véhicules plus grands",
            features: ["Élévateurs robustes", "Protection météo", "Fonctionnement à distance"],
          },
          {
            title: "Commandes de conduite adaptatives",
            description: "Commandes manuelles et extensions de pédales pour une conduite indépendante",
            features: ["Commandes push-pull", "Boutons rotatifs", "Accélérateurs pied gauche"],
          },
          {
            title: "Sièges de transfert",
            description: "Bases pivotantes et sièges de transfert pour faciliter l'entrée du véhicule",
            features: ["Rotation 360°", "Réglage en hauteur", "Verrous de sécurité"],
          },
          {
            title: "Solutions personnalisées",
            description: "Options d'adaptation sur mesure pour des besoins de mobilité uniques",
            features: ["Consultation personnelle", "Fabrication sur mesure", "Support continu"],
          },
        ],
      },
      contact: {
        title: "Obtenez un devis ou posez-nous vos questions",
        subtitle: "Nous vous guiderons dans le processus de rendre votre véhicule accessible.",
        form: {
          name: "Nom complet",
          email: "Adresse e-mail",
          phone: "Numéro de téléphone",
          vehicle: "Type de véhicule",
          message: "Message ou exigences spéciales",
          submit: "Demander un devis",
        },
      },
      footer: {
        slogan: "Mobilité sans limites.",
        copyright: "© 2025 MobiFleet. Tous droits réservés.",
      },
    },
  }

  const t = content[language as keyof typeof content]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-primary">MobiFleet</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-foreground hover:text-primary transition-colors">
                  {t.nav.home}
                </a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors">
                  {t.nav.about}
                </a>
                <a href="#services" className="text-foreground hover:text-primary transition-colors">
                  {t.nav.services}
                </a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                  {t.nav.contact}
                </a>
              </div>
            </div>

            {/* Language Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                className="hidden sm:flex items-center space-x-1"
              >
                <Globe className="h-4 w-4" />
                <span>{language === "en" ? "FR" : "EN"}</span>
              </Button>

              <div className="md:hidden">
                <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary">
                {t.nav.home}
              </a>
              <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary">
                {t.nav.about}
              </a>
              <a href="#services" className="block px-3 py-2 text-foreground hover:text-primary">
                {t.nav.services}
              </a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary">
                {t.nav.contact}
              </a>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                className="mx-3 mt-2 flex items-center space-x-1"
              >
                <Globe className="h-4 w-4" />
                <span>{language === "en" ? "FR" : "EN"}</span>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/modern-accessible-van-with-wheelchair-ramp--profes.jpg"
            alt="Modern accessible van with wheelchair ramp"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">{t.hero.headline}</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">{t.hero.subheadline}</p>
          <Button size="lg" className="text-lg px-8 py-4" asChild>
            <a href="#contact">{t.hero.cta}</a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">{t.about.title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{t.about.text}</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.services.title}</h2>
            <p className="text-lg text-muted-foreground">{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.items.map((service, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="w-full h-48 mb-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <img
                      src={
                        index === 0
                          ? `/wheelchair-van-ramp.jpg`
                          : index === 1
                            ? `/suv-lift-system.jpg`
                            : index === 2
                              ? `/adaptive-driving-controls.jpg`
                              : index === 3
                                ? `/transfer-seat-swivel.jpg`
                                : `/custom-retrofitting.jpg`
                      }
                      alt={service.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-pretty">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full bg-transparent">
                    {language === "en" ? "Request Quote" : "Demander un devis"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.contact.title}</h2>
            <p className="text-lg text-muted-foreground text-pretty">{t.contact.subtitle}</p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t.contact.form.name}</Label>
                    <Input id="name" placeholder={t.contact.form.name} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t.contact.form.email}</Label>
                    <Input id="email" type="email" placeholder={t.contact.form.email} required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t.contact.form.phone}</Label>
                    <Input id="phone" type="tel" placeholder={t.contact.form.phone} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vehicle">{t.contact.form.vehicle}</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t.contact.form.vehicle} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="van">Van</SelectItem>
                        <SelectItem value="suv">SUV</SelectItem>
                        <SelectItem value="truck">Truck</SelectItem>
                        <SelectItem value="car">Car</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t.contact.form.message}</Label>
                  <Textarea id="message" placeholder={t.contact.form.message} rows={4} />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  {t.contact.form.submit}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">MobiFleet</h3>
              <p className="text-muted-foreground mb-4">{t.footer.slogan}</p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">
                {language === "en" ? "Contact Info" : "Informations de contact"}
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>1-800-MOBIFLEET</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@mobifleet.ca</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <div>7300 Warden Ave</div>
                    <div>Markham, Ontario L3R9Y6</div>
                    <div>Canada</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">
                {language === "en" ? "Quick Links" : "Liens rapides"}
              </h4>
              <div className="space-y-2">
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.about}
                </a>
                <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.services}
                </a>
                <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.contact}
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
