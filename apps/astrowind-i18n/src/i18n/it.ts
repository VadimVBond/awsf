import saas from './lp/saas.it';
import startup from './lp/startup.it';
import mobileApp from './lp/mobile-app.it';
import landings from './lp/landings.it';

export const it = {
  header: {
    homes: {
      title: 'Home',
      saas: 'Saas',
      startup: 'Startup',
      app: 'Download App',
      personal: 'Personale',
    },
    pages: {
      title: 'Pagine',
      features: 'Caratteristiche (Ancora)',
      services: 'Servizi',
      pricing: 'Prezzi',
      aboutUs: 'Chi siamo',
      contactUs: 'Contatti',
      terms: 'Termini',
      privacyPolicy: 'Informativa sulla privacy',
    },
    landing: {
      title: 'Landing',
      leadGeneration: 'Generazione di lead',
      sales: 'Vendite',
      clickThrough: 'Click-Through',
      squeeze: 'Squeeze',
      product: 'Dettagli prodotto',
      comingSoon: 'In arrivo',
      gallery: 'Galleria',
    },
    blog: {
      title: 'Blog',
      blogList: 'Elenco articoli',
      article: 'Articolo',
      articleMdx: 'Articolo (con MDX)',
      category: 'Categoria',
      tag: 'Tag',
    },
    widgets: 'Widget',
    contact: 'Contatto',
    download: 'Download',
  },
  footer: {
    product: {
      title: 'Prodotto',
      features: 'Caratteristiche',
      security: 'Sicurezza',
      team: 'Team',
      enterprise: 'Enterprise',
      customerStories: 'Storie dei Clienti',
      pricing: 'Prezzi',
      resources: 'Risorse',
    },
    platform: {
      title: 'Piattaforma',
      developerAPIs: 'API per Sviluppatori',
      partners: 'Partner',
      atom: 'Atom',
      electron: 'Electron',
      astrowindDesktop: 'AstroWind Desktop',
    },
    support: {
      title: 'Supporto',
      docs: 'Documentazione',
      communityForum: 'Forum della Comunità',
      professionalServices: 'Servizi Professionali',
      skills: 'Competenze',
      status: 'Stato',
    },
    company: {
      title: 'Azienda',
      about: 'Informazioni',
      blog: 'Blog',
      careers: 'Carriere',
      press: 'Stampa',
      inclusion: 'Inclusione',
      socialImpact: 'Impatto Sociale',
      shop: 'Negozio',
    },
    legal: {
      terms: 'Termini',
      privacy: 'Privacy',
    },
  },
  index: {
    metadata: {
      title: 'AstroWind — Modello gratuito per la creazione di siti web con Astro + Tailwind CSS',
    },
    hero: {
      cta: 'Ottieni il modello',
      cta2: 'Scopri di più',
      imageAlt: 'Immagine Hero di AstroWind',
      title: {
        part1: 'Modello gratuito per ',
        part2: 'la creazione di siti web con',
      },
      subtitle: 'è un modello gratuito, personalizzabile e pronto per la produzione per Astro 3.0 ',
      description:
        'Adatto per Startups, Piccole Imprese, siti SaaS, Portafogli Professionali, Siti di Marketing, Pagine di Atterraggio e Blog.',
    },
    features: {
      tagline: 'Caratteristiche',
      title: 'Cosa ottieni con AstroWind',
      subtitle:
        'Uno dei modelli più professionali e completi attualmente sul mercato. Tema Astro più stellato del 2022.',
      items: [
        {
          title: 'Integrazione di Astro + Tailwind CSS',
          description:
            "Un'integrazione senza soluzione di continuità tra due grandi framework che offrono alta produttività, performance e versatilità.",
          icon: 'tabler:brand-tailwind',
        },
        {
          title: "Componenti pronti all'uso",
          description:
            'Widget realizzati con Tailwind CSS pronti per essere utilizzati in Siti Web di Marketing, SaaS, Blog, Profili Personali, Piccole Imprese...',
          icon: 'tabler:components',
        },
        {
          title: 'Migliori Pratiche',
          description:
            'Creazione di siti web sicuri, efficienti e user-friendly che offrono esperienze eccezionali e valore duraturo.',
          icon: 'tabler:list-check',
        },
        {
          title: 'Eccellente Velocità di Pagina',
          description:
            "Avere una buona velocità di pagina influisce sul ranking delle ricerche organiche, migliora l'esperienza utente ed incrementa le conversioni.",
          icon: 'tabler:rocket',
        },
        {
          title: 'Ottimizzazione SEO',
          description:
            "L'efficacia della SEO risiede nella visibilità. Raggiungi il tuo pubblico con facilità e naturalezza.",
          icon: 'tabler:arrows-right-left',
        },
        {
          title: 'Aperto all\'innovazione',
          description:
            "Abbracciare una cultura aperta a nuove idee è fondamentale per favorire collaborazioni positive e di successo.",
          icon: 'tabler:bulb',
        },
      ],
    },
    content: {
      tagline: 'Interno del modello',
      title: 'La Bozza di AstroWind: Divertimento Incontra Funzionalità!',
      imageAlt: 'Immagine colorata',
      additionalTitle: 'Basato su fondamenta moderne',
      additionalDescription: 'Ottenere un vantaggio competitivo incorporando pratiche leader del settore',
      items: [
        {
          title: 'Costruito su Astro 3.0',
          description:
            'Beneficiando delle prestazioni e delle funzionalità di questo moderno generatore di siti statici.',
        },
        {
          title: 'Stilizzato utilizzando Tailwind CSS',
          description:
            'Agevolando il design rapido e lo styling coerente con questo framework ultra popolare.',
        },
        {
          title: 'Compatibilità cross-browser',
          description:
            "Assicurare che il tuo sito web appaia e funzioni in modo coerente su diversi browser web.",
        },
      ],
    },
    content2: {
      additionalDescription: 'Assicurati che la tua presenza online ti rappresenti davvero.',
      items: [
        {
          title: 'Alto livello di personalizzazione',
          description: `Personalizza il modello senza sforzo per adattarlo all'identità ed estetica del tuo brand.`,
        },
        {
          title: 'Possibilità di layout multiple',
          description:
            "Esplora diverse opzioni di layout per trovare la struttura che presenta in pieno i tuoi valori.",
        },
        {
          title: 'Design completamente responsivo',
          description:
            "Assicura prestazioni ottimali del tuo sito su vari dispositivi e differenti dimensioni dello schermo cellulare/tablet.",
        },
        {
          title: 'Integrazione dei media',
          description:
            'Incorpora senza soluzione di discontinuità clip video mozzafiato, animazioni, infografiche e musica.',
        },
      ],
    },
    content3: {
      additionalDescription: 'Progettato per favorire la crescita e il successo.',
      items: [
        {
          title: "Coinvolgimento dell'utente potenziato",
          description:
            'Cattura il tuo pubblico con elementi interattivi, navigazione intuitiva e layout di avanguardia.',
        },
        {
          title: 'Miglioramento continuo',
          description:
            'Assicurati che il tuo sito web rimanga allineato alle ultime tendenze per una durata a lungo termine.',
        },
        {
          title: 'Efficienza e risparmio di risorse',
          description:
            'Salta il processo time-consuming di costruzione di un sito da zero passando subito al sodo.',
        },
        {
          title: 'Supporto della comunità',
          description: `Unisciti alla grande e inarrestabile famiglia per trovare i migliori trucchetti e configurazioni.`,
        },
      ],
    },
    steps: {
      title: 'Ottieni il tuo sito web dei sogni in pochissimo tempo.',
      imageAlt: 'Immagine dei passaggi',
      items: [
        {
          title: 'Passo 1: <span class="font-medium">Scarica</span>',
          description:
            'Accedi subito al pacchetto software base per avviare il tool localmente nel tuo PC.',
          icon: 'tabler:package',
        },
        {
          title: 'Passo 2: <span class="font-medium">Aggiungi contenuto</em>',
          description:
            'Inserisci tutto il testo che i tuoi clienti avranno il piacere di visionare.',
          icon: 'tabler:letter-case',
        },
        {
          title: 'Passo 3: <span class="font-medium">Personalizza stili</span>',
          description:
            'Configura font, grandezza lettere, palette cromatica attraverso dei comodi file adibiti.',
          icon: 'tabler:paint',
        },
        {
          title: 'Pronto!',
          icon: 'tabler:check',
        },
      ],
    },
    features2: {
      title: 'Widget più utilizzati',
      subtitle: 'Fornisce componenti frequentemente utilizzati per la costruzione immediata',
      tagline: 'Componenti',
      items: [
        {
          title: 'Intestazioni',
          description:
            "Evita l'assenza di gravità. Le intestazioni danno orientamento utile.",
          icon: 'flat-color-icons:template',
        },
        {
          title: 'Eroi (Heros)',
          description:
            "Sezione iniziale per attrarre subitaneamente visualizzazioni con enormi poster e pulsanti in bella vista.",
          icon: 'flat-color-icons:gallery',
        },
        {
          title: 'Caratteristiche',
          description:
            'Dove i siti web mostrano le loro abilità. Nessun freno per vantarsi qui!',
          icon: 'flat-color-icons:approval',
        },
        {
          title: 'Contenuto',
          description:
            'Immergiti nella sostanza testuale centrale di un sito; senza di esso, si fatica a convincere. Il contenuto è il re.',
          icon: 'flat-color-icons:document',
        },
        {
          title: 'Call-to-Action',
          description:
            "Sì, è questo il pulsante dorato che ti spinge verso l'acquisto conclusivo che stavi aspettando con tanta ansia.",
          icon: 'flat-color-icons:advertising',
        },
        {
          title: 'Prezzi',
          description: 'Ecco il menù opzioni. Abbonamenti periodici mensili oppure Lifetime per un uso smodato senza limiti.',
          icon: 'flat-color-icons:currency-exchange',
        },
        {
          title: 'Testimonianza',
          description:
            'Qui i visitatori raccontano positività e condividono dettagli elogianti dei traguardi raggiunti.',
          icon: 'flat-color-icons:voice-presentation',
        },
        {
          title: 'Contatti',
          description:
            'Lascia un messaggio, fai una domanda o invia semplicemente un sorriso. Risponderemo tempestivamente.',
          icon: 'flat-color-icons:business-contact',
        },
        {
          title: 'Piè di pagina (Footers)',
          description:
            'I titoli di coda di una magnifica permanenza virtuale nel tuo regno.',
          icon: 'flat-color-icons:database',
        },
      ],
    },
    blogLatestPosts: {
      title: 'Scopri altri contenuti nel nostro Blog',
      information: `Esplora la nostra vastissima sezione contenente dritte essenziali sulle pratiche odierne.`,
    },
    faqs: {
      title: 'Domande frequenti',
      subtitle:
        'Approfondisci per sciogliere qualsiasi perplessità tecnica sull\'infrastruttura di lavoro.',
      tagline: 'Domande',
      items: [
        {
          title: 'Perché AstroWind?',
          description:
            'Permette una flessibilità rara coniugando prestazioni ultra-veloci in fase di interazione e fluidità d\'animazione CSS.',
        },
        {
          title: 'Cosa mi serve per iniziare?',
          description:
            "Conoscenze intermedie di Node, e dimestichezza con un terminale. Al resto pensa il configuratore integrato.",
        },
        {
          title: 'Come installare il modello?',
          description:
            "Lancia un rapido comando clone e scarica tutto il corredo npm install per esser operativo in pochi istanti.",
        },
      ],
    },
    stats: {
      stats: [
        { title: 'Download', amount: '132K' },
        { title: 'Stelle', amount: '24.8K' },
        { title: 'Fork', amount: '10.3K' },
        { title: 'Utenti', amount: '48.4K' },
      ],
    },
    callToAction: {
      cta: {
        text: 'Ottieni modello',
      },
      subtitle: {
        part1: 'Impresa impressionata dal coraggio?',
        part2: 'Allora muoviti!',
      },
    },
  },
  blog: {
    title: 'Il Blog',
    subtitle: 'Un esempio di blog generato staticamente con notizie e tutorial correlati ad AstroWind',
    tags: 'Tag:',
  },
  personal_p: {
    cta: {
      title: "Creiamo insieme",
      subtitle: "Pronto a trasformare la tua visione in un design accattivante?",
      cta: {
        text: "Assumimi",
        href: "/contact"
      },
    },
    metadata: {
      title: "Demo Homepage Personale",
    },
    links: [
      { text: "Home", href: "#" },
      { text: "Bio", href: "#about" },
      { text: "Curriculum", href: "#resume" },
      { text: "Portfolio", href: "#portfolio" },
      { text: "Blog", href: "#blog" },
      { text: "Github", href: "https://github.com/" },
    ],
    actions: [
      { text: "Assumimi", href: "#contact" },
    ],
    hero: {
      title: "Sono Sarah Johnson",
      tagline: "Sito Personale",
      cta: {
        text: "Contattami",
        href: "/contact"
      },
      subtitle: "Sono un graphic designer appassionata di storie visive. <br /> Porto vita ai brand e ai concept, trasformandoli in realtà.",
    },
    about: {
      title: "Chi Sono",
      paragraph1: "Benvenuto nel viaggio. Il mio lavoro è una dichiarazione al mondo del design, dove ogni pixel diventa una pennellata nell'immaginazione.",
      paragraph2: "Trovo l'ispirazione nei dettagli della tipografia odierna, ma anche nel classico.",
      paragraph3: "Se sei curioso segui i miei canali:",
      items: [
        { title: "Dribbble", icon: 'tabler:brand-dribbble' },
        { title: "Behance", icon: 'tabler:brand-behance' },
        { title: "Pinterest", icon: 'tabler:brand-pinterest' }
      ],
      image: {
        src: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        alt: "Ritratto Artistico Colorato"
      }
    },
    content: {
      portfolio: {
        title: "Creazione narrativa visuale",
        subtitle: "Imbarcati in un viaggio oltre i pixel per entrare in un reame di creatività fusa.",
        items: [
          {
            title: "Identità di marca per startup hi-tech",
            description: "Sviluppato asset corporativi completi per comunicare un'immagine vibrante alle imprese B2B in forte crescita.",
            role: "Realizzazione processi e coordinamento inter-aziendale. Palette loghi e manuale di stampa su carta.",
          },
          {
            title: "Poster per festival musicale",
            description: "Modellazione illustrativa volta ad incoraggiare la fusione emotiva di sinergie e suoni estivi di massa.",
            role: "Sfruttamento elementi astratti per colpire lo sguardo di passanti abituati al caos visivo metropolitano.",
          },
          {
            title: "Redesign modulo carrello per e-commerce",
            description: "L'obiettivo fu abbassare ad ogni costo l'altissimo rateo di abbandono al check-out dovuto a rallentamenti visivi e scarsa intutitività dei bottoni a schermo. Il layout minimalista ha giovato.",
            role: "Analisi scrupolosa di A/B test multivariati e ri-allestimento del funnel d'immissione dei flussi economici.",
          },
        ],
        image: ""
      },
    },
    steps: {
      workExperience: [
        {
          title: "Graphic Designer presso Studio ABCD, New York, NY (2021 - Presente)",
          description: "Dinamico confronto con enormi clienti per inquadrare limitazioni oggettive. Realizzazione report e asset d'impatto con programmi Adobe vettoriali e mockup digitali.",
          icon: 'tabler:briefcase',
        },
        {
          title: "Junior Designer presso XYZ Agency, Los Angeles, CA (2018 - 2021)",
          description: "Assistenza ai designer senipr nel correggere bozze ed elaborare varianti del medesimo artwork. Applicazione filtri e maschere grafiche sotto rigida guida temporale per l'adempimento di urgenti presentazioni serali direzionali.",
          icon: 'tabler:briefcase',
        },
      ],
      education: [
        {
          title: "Master in Retorica e Design, Scuola delle Arti di Milano (2018 - 2020)",
          icon: 'tabler:school',
        },
        {
          title: "Laurea triennale in Arti Visuali, Politecnico Sud (2014 - 2018)",
          icon: 'tabler:school',
        },
      ],
    },
    skills: {
      title: "Competenze di Spicco",
      subtitle: "Scopri quali peculiarità sfrutto per fare miracoli con la fantasia pura",
      items: [
        {
          title: 'Design Grafico',
          description: 'Abile nel creare messaggi visivi diretti e inequivocabili.',
        },
        {
          title: 'Branding e marchio',
          description: 'Ingegnosa formulazione di guide manuali per trasmettere essenza coerentissima.',
        },
        {
          title: 'Design per l\'utente',
          description: 'Metto sempre al centro l\'esperienza empatica provata dall\'uomo davanti ad uno smartphone.',
        },
        {
          title: 'Suite Adobe Creative',
          description: 'Esperta assoluta in InDesign, Premiere e chiaramente Photoshop con le ultime IA generative di firefly.',
        },
        {
          title: 'Teoria dei colori',
          description: 'Padronanza chimica dei contrasti, sfumature ed impatto per risvegliare sensazioni latenti e spingere l\'azione.',
        },
      ],
    },
    testimonials: {
      title: "Testimonianze",
      subtitle: "Cosa si dice in giro sul mio conto",
      items: [
        {
          testimonial: "Ha preso un nostro concetto informe e grezzo e lo ha forgiato tramutandolo in armamento visuale capace di allinearsi brutalmente con i nostri target finali prefissati a inizio trimestre. Sorprendente.",
          name: "Marco Thomson",
          job: "Direttore creativo",
          image: {
            src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
            alt: 'Profilo Marco',
          },
        },
        {
          testimonial: "Ha elevato radicalmente il nostro posizionamento premium col suo estro sottile ed impareggiabile. In ogni minimo bottone traspare l'impegno.",
          name: "Emilio Martinez",
          job: "Amministratore Delegato",
          image: {
            src: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=772&q=80',
            alt: 'Profilo Emilio',
          },
        },
      ],
    },
    portfolio: {
      callToAction: {
        title: "Sviluppiamo insieme",
        subtitle: "Traduciamo la tua immaginazione limitata in infiniti regni d'oro massiccio ed etereo?",
        action: "Iniziamo",
        button: "Hire Me",
        href: "/",
      },
    },
    blog: {
      title: "Esplora novità sagge tra i miei articoli del blog",
      information: "Immergiti nella saggezza accumulata tra centinaia di notti scure passate a ricolorare fondali e mascherare fastidiosi pixel non allineati in Figma.",
    },
  },
  lp: {
    saas,
    startup,
    mobileApp,
    landings,
  },
};


