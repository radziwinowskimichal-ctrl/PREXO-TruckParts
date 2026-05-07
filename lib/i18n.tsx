'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'DE' | 'EN' | 'PL';

type Translations = Record<string, string>;

const translations: Record<Language, Translations> = {
  DE: {
    // Navbar
    'nav.sortiment': 'Sortiment',
    'nav.service': 'Service',
    'nav.about': 'Über uns',
    'nav.inquire': 'Anfrage Starten',

    // Hero
    'hero.precision': 'Präzision in jedem Teil',
    'hero.title1': 'Heute bestellt,',
    'hero.title2': 'morgen da.',
    'hero.description': 'Ihr verlässlicher Partner für Nutzfahrzeugteile. LKW, Transporter oder PKW – wir liefern die passenden Ersatzteile direkt aus unserem hochmodernen Logistikzentrum in Nürnberg.',
    'hero.btn.inquire': 'Ersatzteil anfragen',
    'hero.btn.assortment': 'Unser Sortiment',

    // Category Cards
    'cat.title': 'Unser Sortiment',
    'cat.desc': 'Wir bieten ein umfassendes Portfolio an Ersatzteilen in Erstausrüsterqualität für alle Klassen.',
    'cat.1.title': 'LKW',
    'cat.1.desc': 'Hochwertige Komponenten für schwere Nutzfahrzeuge ab 7,5t. Bremsen, Fahrwerk, Motor.',
    'cat.2.title': 'Transporter',
    'cat.2.desc': 'Robuste Teile für den Verteilerverkehr. Verschleißteile sofort ab Lager Nürnberg verfügbar.',
    'cat.3.title': 'PKW',
    'cat.3.desc': 'Premium-Ersatzteile für alle gängigen Marken. Qualitätsteile für den Flottenbetrieb.',
    'cat.more': 'Mehr Erfahren',
    'cat.focus': 'Fokus-Marken',
    'cat.inquire': 'Jetzt anfragen',

    // Wizard
    'wiz.pretitle': 'Schnellanfrage',
    'wiz.title': 'Teil anfragen.',
    'wiz.desc': 'In 4 einfachen Schritten zum passenden Ersatzteil. Unser erfahrenes Team in Nürnberg bearbeitet Ihre Anfrage umgehend.',
    
    'wiz.step1.title': 'Fahrzeugtyp wählen',
    'wiz.step1.desc': 'Bitte wählen Sie die Art Ihres Fahrzeugs aus, für das Sie Ersatzteile benötigen.',
    
    'wiz.step2.title': 'Fahrzeugdaten',
    'wiz.step2.desc': 'Geben Sie die genauen Details Ihres Fahrzeugs an, um die Passgenauigkeit zu garantieren.',
    'wiz.brand': 'Marke / Modell *',
    'wiz.brand.ph': 'z.B. MAN TGX oder MB Sprinter',
    'wiz.vin': 'Fahrgestellnummer (VIN)',
    'wiz.optional': '- Optional',
    
    'wiz.step3.title': 'Benötigtes Teil',
    'wiz.step3.desc': 'Beschreiben Sie das Ersatzteil so genau wie möglich.',
    'wiz.part.desc': 'Beschreibung / OE-Nummer *',
    'wiz.part.ph': 'Beschreiben Sie das Teil oder fügen Sie eine Teilenummer ein...',
    
    'wiz.step4.title': 'Kontaktdaten',
    'wiz.step4.desc': 'Wohin dürfen wir unser Angebot senden?',
    'wiz.company': 'Firma / Werkstatt',
    'wiz.name': 'Ansprechpartner *',
    'wiz.phone': 'Telefon für Rückfragen *',
    'wiz.email': 'E-Mail für Angebot *',
    
    'wiz.btn.back': 'Zurück',
    'wiz.btn.next': 'Weiter',
    'wiz.btn.sending': 'Wird gesendet...',
    'wiz.btn.send': 'Anfrage senden',
    
    'wiz.success.title': 'Anfrage erfolgreich versendet',
    'wiz.success.desc': 'Unser Logistik-Team prüft aktuell Ihren Bedarf. Wir melden uns in Kürze mit allen weiteren Details.',
    'wiz.consent': 'Ich stimme zu, dass meine Daten und Informationen aus dem Kontaktformular zur Beantwortung meiner Anfrage nach Verfügbarkeit oder Lieferung von LKW- und Nutzfahrzeugteilen elektronisch erhoben und gespeichert werden. Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an adalbert.preuss@gmail.com widerrufen. Weitere Informationen finden Sie in unserer <a href="/privacy" class="underline hover:text-prexo-gold">Datenschutzerklärung</a>. *',

    // About Us Page
    'about.hero.title': 'Über uns',
    'about.hero.subtitle': 'Lernen Sie das Team und die Vision hinter PREXO kennen.',
    'about.mission.title': 'Mission & Vision',
    'about.mission.desc': 'Anstatt nur zu sagen, was wir tun, möchten wir erklären, warum wir es tun. Welches Problem lösen wir für unsere Kunden? Wir glauben daran, dass die Beschaffung von Ersatzteilen nahtlos, schnell und zuverlässig sein sollte, um Ausfallzeiten in der Transportbranche zu minimieren.',
    'about.uvp.title': 'Unsere Einzigartigkeit (UVP)',
    'about.uvp.desc': 'Was unterscheidet uns? Es ist unsere Kombination aus erstklassigem Kundenservice, tiefem Fachwissen im Bereich Nutzfahrzeuge, hochmoderner Logistik und unserer Fähigkeit, selbst die seltensten Teile in Rekordzeit zu beschaffen.',
    'about.story.title': 'Unsere Geschichte',
    'about.story.desc': 'Wir begannen mit einer klaren Vision und haben uns zu einem der vertrauenswürdigsten Namen in der Nutzfahrzeugteile-Branche entwickelt. Aus Leidenschaft für Präzision und Geschwindigkeit haben wir ein Logistikzentrum aufgebaut, das seinesgleichen sucht.',
    'about.values.title': 'Unsere 3 Kernwerte',
    'about.values.1.title': 'Zuverlässigkeit',
    'about.values.1.desc': 'Ihre Flotte muss rollen. Ein Wort ist ein Wort.',
    'about.values.2.title': 'Qualität',
    'about.values.2.desc': 'Wir gehen keine Kompromisse bei der Erstausrüsterqualität ein.',
    'about.values.3.title': 'Partnerschaft',
    'about.values.3.desc': 'Wir sehen uns als Verlängerung Ihres Fuhrparkmanagements.',
    'about.proof.title': 'PREXO in Zahlen',
    'about.proof.1.val': '10+',
    'about.proof.1.label': 'Jahre am Markt',
    'about.proof.2.val': '5000+',
    'about.proof.2.label': 'Zufriedene Kunden',
    'about.proof.3.val': '1M+',
    'about.proof.3.label': 'Ausgelieferte Teile',
    'about.team.title': 'Unser Team',
    'about.team.desc': 'Hinter PREXO stehen Menschen, die die Transportbranche in ihrer DNA haben. Experten, die genau wissen, welches Teil Sie brauchen.',

    // Assortment Pages
    'assortment.filters': 'Filter',
    'assortment.oils': 'Öle & Chemie',
    'assortment.chassis': 'Fahrwerk',
    'assortment.body': 'Karosserie',
    'assortment.electrical': 'Elektrik',
    'assortment.brakes': 'Bremsen',
    'assortment.engine': 'Motor',
    'assortment.transmission': 'Getriebe',
    'assortment.workshop': 'Werkstattausrüstung',

    // Footer
    'footer.desc': 'Ihr innovativer B2B-Partner in der Welt der Nutzfahrzeugteile. Wir nutzen fortschrittliche Logistik direkt aus dem Herzen Nürnbergs, um Ihre Flotte in ständiger Bewegung zu halten. Wir schätzen Ihre Zeit – in der Region Nürnberg und Umgebung liefern wir bis 16:00 Uhr bestellte Teile schon am nächsten Tag!',
    'footer.express': 'Express Logistik',
    'footer.contact': 'Kontakt',
    'footer.legal': 'Rechtliches',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',
    'footer.terms': 'AGB',
    'footer.revocation': 'Widerruf',
    'footer.rights': 'Alle Rechte vorbehalten.'
  },
  EN: {
    // Navbar
    'nav.sortiment': 'Assortment',
    'nav.service': 'Service',
    'nav.about': 'About Us',
    'nav.inquire': 'Start Request',

    // Hero
    'hero.precision': 'Precision in every part',
    'hero.title1': 'Ordered today,',
    'hero.title2': 'delivered tomorrow.',
    'hero.description': 'Your reliable partner for commercial vehicle parts. Truck, van or car – we deliver the right spare parts directly from our state-of-the-art logistics center in Nuremberg.',
    'hero.btn.inquire': 'Request Spare Part',
    'hero.btn.assortment': 'Our Assortment',

    // Category Cards
    'cat.title': 'Our Assortment',
    'cat.desc': 'We offer a comprehensive portfolio of OEM quality spare parts for all vehicle classes.',
    'cat.1.title': 'Truck',
    'cat.1.desc': 'High-quality components for heavy commercial vehicles from 7.5t. Brakes, chassis, engine.',
    'cat.2.title': 'Van',
    'cat.2.desc': 'Robust parts for distribution traffic. Wear parts immediately available from our Nuremberg warehouse.',
    'cat.3.title': 'Car',
    'cat.3.desc': 'Premium spare parts for all common brands. Quality parts for fleet operations.',
    'cat.more': 'Learn More',
    'cat.focus': 'Focus Brands',
    'cat.inquire': 'Request now',

    // Wizard
    'wiz.pretitle': 'Quick Request',
    'wiz.title': 'Request a part.',
    'wiz.desc': 'In 4 simple steps to the right spare part. Our experienced team in Nuremberg will process your request immediately.',
    
    'wiz.step1.title': 'Select Vehicle Type',
    'wiz.step1.desc': 'Please select the type of vehicle for which you need spare parts.',
    
    'wiz.step2.title': 'Vehicle Data',
    'wiz.step2.desc': 'Provide the exact details of your vehicle to guarantee a perfect fit.',
    'wiz.brand': 'Brand / Model *',
    'wiz.brand.ph': 'e.g., MAN TGX or MB Sprinter',
    'wiz.vin': 'Vehicle Identification Number (VIN)',
    'wiz.optional': '- Optional',
    
    'wiz.step3.title': 'Required Part',
    'wiz.step3.desc': 'Describe the spare part as accurately as possible.',
    'wiz.part.desc': 'Description / OE Number *',
    'wiz.part.ph': 'Describe the part or enter a part number...',
    
    'wiz.step4.title': 'Contact Details',
    'wiz.step4.desc': 'Where may we send our offer?',
    'wiz.company': 'Company / Workshop',
    'wiz.name': 'Contact Person *',
    'wiz.phone': 'Phone for Queries *',
    'wiz.email': 'E-Mail for Offer *',
    
    'wiz.btn.back': 'Back',
    'wiz.btn.next': 'Next',
    'wiz.btn.sending': 'Sending...',
    'wiz.btn.send': 'Send Request',
    
    'wiz.success.title': 'Request successfully sent',
    'wiz.success.desc': 'Our logistics team is currently checking your requirements. We will contact you shortly with all further details.',
    'wiz.consent': 'I agree that my details and data from the contact form will be collected and stored electronically to answer my inquiry regarding the availability or delivery of truck and commercial vehicle parts. Note: You can revoke your consent at any time for the future by sending an email to adalbert.preuss@gmail.com. Further information can be found in our <a href="/privacy" class="underline hover:text-prexo-gold">Privacy Policy</a>. *',

    // About Us Page
    'about.hero.title': 'About Us',
    'about.hero.subtitle': 'Get to know the team and vision behind PREXO.',
    'about.mission.title': 'Mission & Vision',
    'about.mission.desc': 'Instead of just saying what we do, we want to explain why we do it. What problem do we solve for our customers? We believe that sourcing spare parts should be seamless, fast, and reliable to minimize downtime in the transport industry.',
    'about.uvp.title': 'Unique Value Proposition',
    'about.uvp.desc': 'What sets us apart? It is our combination of premium customer service, deep expertise in commercial vehicles, state-of-the-art logistics, and our ability to source even the rarest parts in record time.',
    'about.story.title': 'Our Story',
    'about.story.desc': 'We started with a clear vision and have grown into one of the most trusted names in the commercial vehicle parts industry. Out of a passion for precision and speed, we have built a logistics center that is second to none.',
    'about.values.title': 'Our 3 Core Values',
    'about.values.1.title': 'Reliability',
    'about.values.1.desc': 'Your fleet must roll. A promise is a promise.',
    'about.values.2.title': 'Quality',
    'about.values.2.desc': 'We make no compromises when it comes to OEM quality.',
    'about.values.3.title': 'Partnership',
    'about.values.3.desc': 'We see ourselves as an extension of your fleet management.',
    'about.proof.title': 'PREXO in Numbers',
    'about.proof.1.val': '10+',
    'about.proof.1.label': 'Years in the market',
    'about.proof.2.val': '5000+',
    'about.proof.2.label': 'Satisfied Customers',
    'about.proof.3.val': '1M+',
    'about.proof.3.label': 'Parts Delivered',
    'about.team.title': 'Our Team',
    'about.team.desc': 'Behind PREXO are people who have the transport industry in their DNA. Experts who know exactly which part you need.',

    // Assortment Pages
    'assortment.filters': 'Filters',
    'assortment.oils': 'Oils & Chemicals',
    'assortment.chassis': 'Chassis',
    'assortment.body': 'Body',
    'assortment.electrical': 'Electrical',
    'assortment.brakes': 'Brakes',
    'assortment.engine': 'Engine',
    'assortment.transmission': 'Transmission',
    'assortment.workshop': 'Workshop Equipment',

    // Footer
    'footer.desc': 'Your innovative B2B partner in the world of commercial vehicle parts. We use advanced logistics right from the heart of Nuremberg to keep your fleet in constant motion. We value your time - in the Nuremberg region and surrounding areas, we deliver parts ordered by 4:00 PM the very next day!',
    'footer.express': 'Express Logistics',
    'footer.contact': 'Contact',
    'footer.legal': 'Legal',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.revocation': 'Revocation',
    'footer.rights': 'All rights reserved.'
  },
  PL: {
    // Navbar
    'nav.sortiment': 'Asortyment',
    'nav.service': 'Usługi',
    'nav.about': 'O nas',
    'nav.inquire': 'Wyślij Zapytanie',

    // Hero
    'hero.precision': 'Precyzja w każdej części',
    'hero.title1': 'Zamawiasz dziś,',
    'hero.title2': 'odbierasz jutro.',
    'hero.description': 'Twój niezawodny partner w zakresie części do pojazdów użytkowych. Ciężarówka, pojazd dostawczy czy auto osobowe – dostarczamy odpowiednie części prosto z naszego nowoczesnego centrum logistycznego w Norymberdze.',
    'hero.btn.inquire': 'Zapytaj o część',
    'hero.btn.assortment': 'Nasz Asortyment',

    // Category Cards
    'cat.title': 'Nasz Asortyment',
    'cat.desc': 'Oferujemy kompleksowe portfolio części zamiennych jakości OEM dla wszystkich klas pojazdów.',
    'cat.1.title': 'Ciężarowe',
    'cat.1.desc': 'Wysokiej jakości komponenty do ciężkich pojazdów użytkowych od 7,5t. Hamulce, podwozie, silnik.',
    'cat.2.title': 'Dostawcze',
    'cat.2.desc': 'Solidne części do transportu dystrybucyjnego. Części eksploatacyjne dostępne z magazynu w Norymberdze.',
    'cat.3.title': 'Osobowe',
    'cat.3.desc': 'Części zamienne premium do wszystkich popularnych marek. Wysokiej jakości części dla flot.',
    'cat.more': 'Więcej Informacji',
    'cat.focus': 'Główne marki',
    'cat.inquire': 'Zapytaj teraz',

    // Wizard
    'wiz.pretitle': 'Szybkie Zapytanie',
    'wiz.title': 'Zapytaj o część.',
    'wiz.desc': 'W 4 prostych krokach do odpowiedniej części. Nasz zespół w Norymberdze niezwłocznie przetworzy Twoje zapytanie.',
    
    'wiz.step1.title': 'Wybierz typ pojazdu',
    'wiz.step1.desc': 'Proszę wybrać typ pojazdu, do którego potrzebujesz części zamiennych.',
    
    'wiz.step2.title': 'Dane pojazdu',
    'wiz.step2.desc': 'Podaj dokładne dane swojego pojazdu, aby zagwarantować idealne dopasowanie.',
    'wiz.brand': 'Marka / Model *',
    'wiz.brand.ph': 'np. MAN TGX lub MB Sprinter',
    'wiz.vin': 'Numer nadwozia (VIN)',
    'wiz.optional': '- Opcjonalnie',
    
    'wiz.step3.title': 'Potrzebna część',
    'wiz.step3.desc': 'Opisz część zamienną tak dokładnie, jak to możliwe.',
    'wiz.part.desc': 'Opis / Numer OE *',
    'wiz.part.ph': 'Opisz część lub wprowadź numer części...',
    
    'wiz.step4.title': 'Dane kontaktowe',
    'wiz.step4.desc': 'Gdzie możemy wysłać naszą ofertę?',
    'wiz.company': 'Firma / Warsztat',
    'wiz.name': 'Osoba kontaktowa *',
    'wiz.phone': 'Telefon kontaktowy *',
    'wiz.email': 'E-mail na potrzeby oferty *',
    
    'wiz.btn.back': 'Wstecz',
    'wiz.btn.next': 'Dalej',
    'wiz.btn.sending': 'Wysyłanie...',
    'wiz.btn.send': 'Wyślij zapytanie',
    
    'wiz.success.title': 'Zapytanie wysłane pomyślnie',
    'wiz.success.desc': 'Nasz zespół logistyczny obecnie sprawdza Twoje zapotrzebowanie. Wkrótce skontaktujemy się z Tobą podając wszelkie szczegóły.',
    'wiz.consent': 'Wyrażam zgodę na to, aby moje dane i informacje z formularza kontaktowego były gromadzone i przechowywane elektronicznie w celu udzielenia odpowiedzi na moje zapytanie dotyczące dostępności lub dostawy części do samochodów ciężarowych i użytkowych. Uwaga: Możesz w każdej chwili odwołać swoją zgodę na przyszłość, wysyłając e-mail na adres adalbert.preuss@gmail.com. Dalsze informacje znajdziesz w naszej <a href="/privacy" class="underline hover:text-prexo-gold">Polityce Prywatności</a>. *',

    // About Us Page
    'about.hero.title': 'O nas',
    'about.hero.subtitle': 'Poznaj zespół i wizję stojącą za PREXO.',
    'about.mission.title': 'Misja i Wizja',
    'about.mission.desc': 'Zamiast pisać, co robimy, chcemy wyjaśnić, dlaczego to robimy. Jaki problem rozwiązujemy dla naszych klientów? Wierzymy, że pozyskiwanie części zamiennych powinno być płynne, szybkie i niezawodne, aby zminimalizować przestoje w branży transportowej.',
    'about.uvp.title': 'Unikalna Propozycja Wartości (UVP)',
    'about.uvp.desc': 'Czym się wyróżniamy? To nasze połączenie doskonałej obsługi klienta, głębokiej wiedzy o pojazdach użytkowych, nowoczesnej logistyki i naszej zdolności do sprowadzania nawet najrzadszych części w rekordowym czasie.',
    'about.story.title': 'Nasza Historia',
    'about.story.desc': 'Zaczęliśmy od jasnej wizji i staliśmy się jedną z najbardziej zaufanych marek w branży części do pojazdów użytkowych. Z pasji do precyzji i szybkości zbudowaliśmy centrum logistyczne nie mające sobie równych.',
    'about.values.title': 'Nasze 3 Główne Wartości',
    'about.values.1.title': 'Niezawodność',
    'about.values.1.desc': 'Twoja flota musi być w ruchu. Słowo to słowo.',
    'about.values.2.title': 'Jakość',
    'about.values.2.desc': 'Nie idziemy na kompromisy, jeśli chodzi o jakość pierwszego montażu (OEM).',
    'about.values.3.title': 'Partnerstwo',
    'about.values.3.desc': 'Postrzegamy siebie jako przedłużenie Twojego zarządzania flotą.',
    'about.proof.title': 'PREXO w Liczbach',
    'about.proof.1.val': '10+',
    'about.proof.1.label': 'Lat na rynku',
    'about.proof.2.val': '5000+',
    'about.proof.2.label': 'Zadowolonych Klientów',
    'about.proof.3.val': '1M+',
    'about.proof.3.label': 'Dostarczonych Części',
    'about.team.title': 'Ludzka Twarz Zespołu',
    'about.team.desc': 'Za PREXO stoją ludzie, którzy mają branżę transportową w swoim DNA. Eksperci, którzy dokładnie wiedzą, jakiej części potrzebujesz.',

    // Assortment Pages
    'assortment.filters': 'Filtry',
    'assortment.oils': 'Oleje i Chemia',
    'assortment.chassis': 'Podwozie',
    'assortment.body': 'Nadwozie',
    'assortment.electrical': 'Elektryka',
    'assortment.brakes': 'Hamulce',
    'assortment.engine': 'Silnik',
    'assortment.transmission': 'Skrzynia Biegów',
    'assortment.workshop': 'Wyposażenie Warsztatu',

    // Footer
    'footer.desc': 'Twój innowacyjny partner B2B w świecie części do pojazdów użytkowych. Wykorzystujemy zaawansowaną logistykę prosto z serca Norymbergi, aby utrzymać Twoją flotę w ciągłym ruchu. Cenimy Twój czas – w regionie Norymbergi i okolicach części zamówione do 16:00 dostarczamy już następnego dnia!',
    'footer.express': 'Logistyka Ekspresowa',
    'footer.contact': 'Kontakt',
    'footer.legal': 'Informacje Prawne',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Polityka Prywatności',
    'footer.terms': 'Regulamin (OWH)',
    'footer.revocation': 'Odstąpienie',
    'footer.rights': 'Wszelkie prawa zastrzeżone.'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('DE');

  useEffect(() => {
    // Try to load language from localStorage on mount
    const saved = localStorage.getItem('prexo_language');
    if (saved && (saved === 'DE' || saved === 'EN' || saved === 'PL')) {
      setLanguageState(saved as Language);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('prexo_language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
