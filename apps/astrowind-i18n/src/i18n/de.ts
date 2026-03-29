import saas from './lp/saas.de';
import startup from './lp/startup.de';
import mobileApp from './lp/mobile-app.de';
import landings from './lp/landings.de';

export const de = {
  header: {
    homes: { title: 'Startseite', saas: 'Saas', startup: 'Startup', app: 'App herunterladen', personal: 'Persönlich' },
    pages: { title: 'Seiten', features: 'Funktionen (Ankerlink)', services: 'Dienstleistungen', pricing: 'Preise', aboutUs: 'Über uns', contactUs: 'Kontakt', terms: 'Bedingungen', privacyPolicy: 'Datenschutzrichtlinie' },
    landing: { title: 'Landing', leadGeneration: 'Lead-Generierung', sales: 'Langform-Verkäufe', clickThrough: 'Klickrate', squeeze: 'Squeeze', product: 'Produktdetails (oder Dienstleistungen)', comingSoon: 'Bald verfügbar', gallery: 'Galerie',
      galleryHero: { tagline: 'Portfolio', title: 'Unsere Projekte', subtitle: 'Entdecken Sie unsere aktuellen Projekte und Erfolgsgeschichten.', goBack: 'Zurück' }, },
    blog: { title: 'Blog', blogList: 'Artikelliste', article: 'Artikel', articleMdx: 'Artikel (mit MDX)', category: 'Kategorie-Seite', tag: 'Tag-Seite' },
    widgets: 'Widgets', contact: 'Kontakt', download: 'Herunterladen',
  },
  footer: {
    product: {
      title: 'Produkt',
      features: 'Funktionen',
      security: 'Sicherheit',
      team: 'Team',
      enterprise: 'Unternehmen',
      customerStories: 'Kundenberichte',
      pricing: 'Preise',
      resources: 'Ressourcen',
    },
    platform: {
      title: 'Plattform',
      developerAPIs: 'Entwickler-APIs',
      partners: 'Partner',
      atom: 'Atom',
      electron: 'Electron',
      astrowindDesktop: 'AstroWind Desktop',
    },
    support: {
      title: 'Support',
      docs: 'Dokumentation',
      communityForum: 'Community-Forum',
      professionalServices: 'Professionelle Dienste',
      skills: 'Fähigkeiten',
      status: 'Status',
    },
    company: {
      title: 'Unternehmen',
      about: 'Über uns',
      blog: 'Blog',
      careers: 'Karriere',
      press: 'Presse',
      inclusion: 'Inklusion',
      socialImpact: 'Soziale Auswirkungen',
      shop: 'Shop',
    },
    legal: {
      terms: 'Bedingungen',
      privacy: 'Datenschutz',
    },
  },
  index: {
    metadata: {
      title: 'AstroWind — Kostenlose Vorlage für die Erstellung von Websites mit Astro + Tailwind CSS',
    },
    hero: {
      cta: 'Vorlage holen',
      cta2: 'Mehr erfahren',
      imageAlt: 'AstroWind Hero Bild',
      title: {
        part1: 'Kostenlose Vorlage für ',
        part2: 'die Erstellung von Websites mit',
      },
      subtitle: 'ist eine kostenlose, anpassbare und produktionsbereite Vorlage für Astro 3.0 ',
      description:
        'Geeignet für Startups, kleine Unternehmen, SaaS-Websites, professionelle Portfolios, Marketing-Websites, Landing-Pages & Blogs.',
    },
    features: {
      tagline: 'Funktionen',
      title: 'Was Sie mit AstroWind bekommen',
      subtitle:
        'Eine der professionellsten und umfassendsten Vorlagen, die derzeit auf dem Markt sind. Das Astro-Theme mit den meisten Sternen und Forks im Jahr 2022.',
      items: [
        {
          title: 'Astro + Tailwind CSS Integration',
          description:
            'Eine nahtlose Integration zwischen zwei großartigen Frameworks, die hohe Produktivität, Leistung und Vielseitigkeit bieten.',
          icon: 'tabler:brand-tailwind',
        },
        {
          title: 'Gebrauchsfertige Komponenten',
          description:
            'Mit Tailwind CSS erstellte Widgets, die bereit sind für den Einsatz in Marketing-Websites, SaaS, Blogs, persönlichen Profilen, kleinen Unternehmen...',
          icon: 'tabler:components',
        },
        {
          title: 'Bewährte Methoden',
          description:
            'Erstellung sicherer, effizienter und benutzerfreundlicher Websites, die außergewöhnliche Erfahrungen und dauerhaften Wert liefern.',
          icon: 'tabler:list-check',
        },
        {
          title: 'Hervorragende Seitengeschwindigkeit',
          description:
            'Eine gute Seitengeschwindigkeit wirkt sich auf das organische Suchranking aus, verbessert die Benutzererfahrung (UI/UX) und erhöht die Konversionsraten.',
          icon: 'tabler:rocket',
        },
        {
          title: 'Suchmaschinenoptimierung (SEO)',
          description:
            "SEO liegt in der Fähigkeit, die Sichtbarkeit einer Website zu verbessern, den organischen Verkehr zu steigern und ein breiteres Publikum zu erreichen.",
          icon: 'tabler:arrows-right-left',
        },
        {
          title: 'Offen für neue Ideen',
          description:
            'Eine Kultur, die offen für neue Ideen und Beiträge ist, ist integraler Bestandteil der Förderung von Innovation, Zusammenarbeit und einer dynamischen Benutzererfahrung.',
          icon: 'tabler:bulb',
        },
      ],
    },
    content: {
      tagline: 'Im Inneren der Vorlage',
      title: "Der Bauplan von AstroWind: Spaß trifft Funktionalität!",
      imageAlt: 'Buntes Bild',
      additionalTitle: 'Aufbauend auf modernen Fundamenten',
      additionalDescription: 'Verschaffen Sie sich einen Wettbewerbsvorteil durch die Einbindung branchenführender Praktiken',
      items: [
        {
          title: 'Aufgebaut auf Astro 3.0',
          description:
            'Profitieren Sie von der Leistung und den entwicklerfreundlichen Funktionen dieses modernen Static Site Generators.',
        },
        {
          title: 'Gestylt mit Tailwind CSS',
          description:
            'Erleichtert schnelles Design und konsistentes Styling mit diesem sehr beliebten Utility-First CSS-Framework.',
        },
        {
          title: 'Cross-Browser-Kompatibilität',
          description:
            'Stellen Sie sicher, dass Ihre Website über verschiedene Webbrowser hinweg konsistent aussieht und funktioniert, und bieten Sie allen Benutzern ein nahtloses Erlebnis.',
        },
      ],
    },
    content2: {
      additionalDescription: 'Stellen Sie sicher, dass Ihre Online-Präsenz Sie wirklich repräsentiert.',
      items: [
        {
          title: 'Hohes Maß an Anpassung',
          description: `Passen Sie die Vorlage mühelos an die Identität und Anforderungen Ihrer Marke an, machen Sie Ihre Website unverwechselbar und sparen Sie Zeit.`,
        },
        {
          title: 'Umfassende Layout-Möglichkeiten',
          description:
            'Erkunden Sie verschiedene Layout-Optionen, um die Struktur zu finden, die Ihre Inhalte am besten präsentiert und die Einbindung der Benutzer und die Navigation verbessert.',
        },
        {
          title: 'Vollständig responsives Design',
          description:
            "Stellen Sie die optimale Leistung Ihrer Website auf verschiedenen Geräten und Bildschirmgrößen sicher und bieten Sie ein konsistentes und angenehmes Benutzererlebnis.",
        },
        {
          title: 'Integration von Medien',
          description:
            'Integrieren Sie nahtlos Bilder, Videos und Multimedia-Elemente, die Ihre Inhalte verbessern und Besucher effektiv einbinden.',
        },
      ],
    },
    content3: {
      additionalDescription: 'Entwickelt, um Wachstum und Erfolg zu fördern.',
      items: [
        {
          title: 'Verbesserte Benutzerbindung',
          description:
            'Fesseln Sie Ihr Publikum mit interaktiven Elementen, intuitiver Navigation und visuell ansprechenden Layouts, die zu längeren Besuchen ermutigen.',
        },
        {
          title: 'Kontinuierliche Verbesserung',
          description:
            'Stellen Sie sicher, dass Ihre Website durch regelmäßige Updates und Erweiterungen auf dem neuesten Stand der Trends und Technologien bleibt.',
        },
        {
          title: 'Zeit- und Ressourceneffizienz',
          description:
            'Überspringen Sie den zeitaufwendigen Prozess der Erstellung einer Website von Grund auf und starten Sie Ihre Online-Präsenz schneller mit AstroWind.',
        },
        {
          title: 'Community-Support',
          description: `Treten Sie der wachsenden AstroWind-Community bei, um Einblicke, Ressourcen und Unterstützung zu erhalten, damit Sie auf Ihrer Reise zur Webentwicklung nie allein sind.`,
        },
      ],
    },
    steps: {
      title: 'Bringen Sie Ihre Traum-Website mit AstroWind im Handumdrehen zum Laufen.',
      imageAlt: 'Schritte Bild',
      items: [
        {
          title: 'Schritt 1: <span class="font-medium">Herunterladen</span>',
          description:
            'Laden Sie das Paket herunter und entpacken Sie es. Beginnen Sie Ihr Projekt mit einer soliden Grundlage.',
          icon: 'tabler:package',
        },
        {
          title: 'Schritt 2: <span class="font-medium">Inhalt hinzufügen</em>',
          description:
            'Fügen Sie Ihren eigenen Text, Bilder und andere Medien hinzu. Passen Sie die Struktur nach Ihren Wünschen an.',
          icon: 'tabler:letter-case',
        },
        {
          title: 'Schritt 3: <span class="font-medium">Stile anpassen</span>',
          description:
            'Ändern Sie Farben, Schriftarten und Layouts passend zu Ihrem Markenimage. AstroWind macht es Ihnen leicht.',
          icon: 'tabler:paint',
        },
        {
          title: 'Fertig!',
          icon: 'tabler:check',
        },
      ],
    },
    features2: {
      title: 'Meistgenutzte Widgets',
      subtitle: 'Bietet häufig verwendete Komponenten für die Erstellung von Websites mit Tailwind CSS',
      tagline: 'Komponenten',
      items: [
        {
          title: 'Header',
          description: "Schon mal versucht, ohne GPS zu fahren? Genau deshalb brauchen Websites Header zur Orientierung.",
          icon: 'flat-color-icons:template',
        },
        {
          title: 'Heros',
          description:
            "Stellen Sie sich die Landung eines Superhelden vor – episch, oder? Das ist die Aufgabe eines Hero-Bereichs!",
          icon: 'flat-color-icons:gallery',
        },
        {
          title: 'Features',
          description:
            'Wo Websites ihre Fähigkeiten und Superkräfte zeigen. Hier wird nicht mit Angeberei gespart!',
          icon: 'flat-color-icons:approval',
        },
        {
          title: 'Inhalt',
          description:
            "Tauchen Sie in den Hauptteil ein; ohne ihn würden Sie nur Schaufensterbummel machen. Inhalt ist König.",
          icon: 'flat-color-icons:document',
        },
        {
          title: 'Call-to-Action',
          description:
            'Dieser enthusiastische Freund, der immer drängt: "Mach es! Mach es!"? Ja, dieser Button ist es.',
          icon: 'flat-color-icons:advertising',
        },
        {
          title: 'Preise',
          description: 'Betrachten Sie die Dessertkarte der Website-Welt. Es warten verlockende Möglichkeiten.',
          icon: 'flat-color-icons:currency-exchange',
        },
        {
          title: 'Testimonials',
          description: 'Treten Sie in die Klatschecke ein! Hier teilen andere Besucher ihre saftigen Details.',
          icon: 'flat-color-icons:voice-presentation',
        },
        {
          title: 'Kontakt',
          description:
            'Wie ein digitaler Briefkasten, nur schneller! Schreiben Sie eine Nachricht, stellen Sie eine Frage.',
          icon: 'flat-color-icons:business-contact',
        },
        {
          title: 'Footer',
          description: "Der Footer ist wie der Abspann eines Films, gespickt mit Easter Eggs. Zeit zum Suchen!",
          icon: 'flat-color-icons:database',
        },
      ],
    },
    blogLatestPosts: {
      title: 'Entdecken Sie mehr Inhalte in unserem Blog',
      information: `Der Blog wird für die Dokumentation von AstroWind verwendet. Neue Artikel sind wertvolle Ressourcen für die Entwickler.`,
    },
    faqs: {
      title: 'Häufig gestellte Fragen',
      subtitle:
        'Tauchen Sie in die folgenden Fragen ein, um Einblicke in die leistungsstarken Funktionen von AstroWind zu erhalten.',
      tagline: 'FAQs',
      items: [
        {
          title: 'Warum AstroWind?',
          description:
            "Weil es einfach, anpassbar und blitzschnell ist. Es integriert Astro und Tailwind absolut nahtlos.",
        },
        {
          title: 'Was brauche ich, um anzufangen?',
          description:
            'Etwas Grundwissen in HTML und CSS reicht bereits. NodeJS muss installiert sein.',
        },
        {
          title: 'Wie installiere ich die Astro + Tailwind CSS Vorlage?',
          description:
            "Verwenden Sie npm, yarn oder pnpm, um die Abhängigkeiten zu installieren und den Server zu starten.",
        },
      ],
    },
    stats: {
      stats: [
        { title: 'Downloads', amount: '132K' },
        { title: 'Sterne', amount: '24.8K' },
        { title: 'Forks', amount: '10.3K' },
        { title: 'Nutzer', amount: '48.4K' },
      ],
    },
    callToAction: {
      cta: {
        text: 'Vorlage holen',
      },
      subtitle: {
        part1: 'Seien Sie sehr überrascht von diesen riesigen falschen Zahlen auf dieser Seite.',
        part2: "Verschwenden Sie keine weitere Zeit! :P",
      },
    },
  },
  blog: {
    title: 'Blog',
    subtitle: 'Ein statisch generiertes Blog-Beispiel mit Nachrichten, Tutorials, Ressourcen und anderen interessanten Inhalten zu AstroWind',
    tags: 'Tags:',
  },
  personal_p: {
    cta: {
      title: "Lassen Sie uns gemeinsam gestalten",
      subtitle: "Bereit, Ihre Vision in fesselnde Designs zu verwandeln?",
      cta: {
        text: "Engagiere mich",
        href: "/contact"
      },
      },
    metadata: {
      title: "Persönliche Homepage Demo",
    },
    links: [
      { text: "Startseite", href: "/" },
      { text: "Über mich", href: "#about" },
      { text: "Lebenslauf", href: "#resume" },
      { text: "Portfolio", href: "#portfolio" },
      { text: "Blog", href: "#blog" },
      { text: "Github", href: "https://github.com/" },
    ],
    actions: [
      { text: "Engagiere mich", href: "#contact" },
    ],
    hero: {
      title: "Sarah Johnson",
      tagline: "Persönliche Website Demo",
      cta: {
        text: "Engagiere mich",
        href: "/contact"
      },
      subtitle: "Ich bin eine Grafikdesignerin mit Leidenschaft für visuelle Geschichten. Mit 5 Jahren Erfahrung und einem Abschluss der School of Design der New York University erwecke ich Marken zum Leben.",
    },
    about: {
      title: "Über mich",
      paragraph1: "Willkommen auf meiner kreativen Reise. Meine Arbeit ist ein Zeugnis meines Engagements, Ideen zum Leben zu erwecken.",
      paragraph2: "Ich finde Inspiration in der Welt um mich herum, sei es in den Seiten eines fesselnden Romans oder in den vibrierenden Farben der Natur.",
      paragraph3: "Wenn Sie mehr über meine Arbeit erfahren möchten, folgen Sie mir hier:",
      items: [
        { title: "Dribbble", icon: 'tabler:brand-dribbble' },
        { title: "Behance", icon: 'tabler:brand-behance' },
        { title: "Pinterest", icon: 'tabler:brand-pinterest' }
      ],
      image: {
        src: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?auto=format&fit=crop&w=774&q=80",
        alt: "Farbenfrohes Bild"
      }
    },
    content: {
      portfolio: {
        title: "Visuelle Erzählungen aufwerten",
        subtitle: "Begeben Sie sich auf eine Designreise, die über Pixel hinausgeht. Erkunden Sie mein Portfolio.",
        items: [
          {
            title: "Markenidentität für Tech-Innovatoren",
            description: "Umfassende Markenidentität für ein Tech-Startup entwickelt.",
            role: "Den gesamten Branding-Prozess vom Konzept bis zur Ausführung geleitet.",
          },
          {
            title: "Veranstaltungsplakat für Kunst- & Musikfestival",
            description: "Fesselndes Veranstaltungsplakat für das Festival 'ArtWave Fusion' entworfen.",
            role: "Das kreative Thema des Festivals in ein visuell beeindruckendes Plakat übersetzt.",
          },
          {
            title: "E-Commerce-Website-Redesign für Modemarke",
            description: "Die E-Commerce-Website für die umweltbewusste Modemarke GreenVogue neu gestaltet.",
            role: "Eine gründliche Analyse der Markenwerte durchgeführt, um die Designrichtung vorzugeben.",
          },
        ],
        image: ""
      },
    },
    steps: {
      workExperience: [
        {
          title: "Grafikdesignerin im ABC Design Studio (2021 - Heute)",
          description: "Zusammenarbeit mit Kunden zur Erarbeitung von Designanforderungen.",
          icon: 'tabler:briefcase',
        },
        {
          title: "Junior Grafikdesignerin in der XYZ Creative Agency (2018 - 2021)",
          description: "Unterstützung von Senior-Designern bei der Erstellung von Designkonzepten.",
          icon: 'tabler:briefcase',
        },
      ],
      education: [
        {
          title: "Master of Fine Arts in Grafikdesign (2018 - 2020)",
          icon: 'tabler:school',
        },
        {
          title: "Bachelor of Arts in Grafikdesign (2014 - 2018)",
          icon: 'tabler:school',
        },
      ],
    },
    skills: {
      title: "Fähigkeiten",
      subtitle: "Entdecken Sie die Kompetenzen, die es mir ermöglichen, Fantasie zum Leben zu erwecken.",
      items: [
        { title: 'Grafikdesign', description: 'Profiliert in der Gestaltung visuell ansprechender Designs.' },
        { title: 'Branding und Identität', description: 'Erfahren in der Entwicklung kohärenter Markenidentitäten.' },
        { title: 'Benutzerzentriertes Design', description: 'Erfahren in der Erstellung benutzerfreundlicher Oberflächen.' },
        { title: 'Adobe Creative Suite', description: 'Sicher im Umgang mit Photoshop, Illustrator und InDesign.' },
      ],
    },
    testimonials: {
      title: "Testimonials",
      subtitle: "Was die Leute über meine Arbeit sagen",
      items: [
        {
          testimonial: "Sie hat unser vages Konzept in ein visuelles Meisterwerk verwandelt.",
          name: "Mark Thompson",
          job: "Art Director",
          image: { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=774&q=80', alt: 'Mark Thompson' },
        },
      ],
    },
    portfolio: {
      callToAction: {
        title: "Lassen Sie uns gemeinsam gestalten",
        subtitle: "Bereit für fesselnde Designs?",
        action: "Engagiere mich",
        button: "Engagiere mich",
        href: "/",
      },
    },
    blog: {
      title: "Erkunden Sie aufschlussreiche Artikel in meinem Blog",
      information: "Tauchen Sie ein in eine Welt voller Design-Weisheit und kreativer Inspiration.",
    },
  },
  lp: {
    saas,
    startup,
    mobileApp,
    landings,
  },
};






