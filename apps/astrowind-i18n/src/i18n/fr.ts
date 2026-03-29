import saas from './lp/saas.fr';
import startup from './lp/startup.fr';
import mobileApp from './lp/mobile-app.fr';
import landings from './lp/landings.fr';

export const fr = {
  header: {
    homes: { title: 'Accueil', saas: 'Saas', startup: 'Startup', app: 'Télécharger l\'app', personal: 'Personnel' },
    pages: { title: 'Pages', features: 'Fonctionnalités (Lien ancre)', services: 'Services', pricing: 'Tarifs', aboutUs: 'À propos', contactUs: 'Contact', terms: 'Conditions', privacyPolicy: 'Politique de confidentialité' },
    landing: { title: 'Landing', leadGeneration: 'Génération de leads', sales: 'Ventes longue forme', clickThrough: 'Clic à travers', squeeze: 'Squeeze', product: 'Détails du produit (ou services)', comingSoon: 'Bientôt disponible', gallery: 'Galerie',
      galleryHero: { tagline: 'Portfolio', title: 'Nos Projets', subtitle: 'Découvrez nos projets récents et nos cas de réussite.', goBack: 'Retour' }, },
    blog: { title: 'Blog', blogList: 'Liste des articles', article: 'Article', articleMdx: 'Article (avec MDX)', category: 'Page de catégorie', tag: 'Page de tag' },
    widgets: 'Widgets', contact: 'Contact', download: 'Télécharger',
  },
  footer: {
    product: {
      title: 'Produit',
      features: 'Fonctionnalités',
      security: 'Sécurité',
      team: 'Équipe',
      enterprise: 'Entreprise',
      customerStories: 'Témoignages clients',
      pricing: 'Tarification',
      resources: 'Ressources',
    },
    platform: {
      title: 'Plateforme',
      developerAPIs: 'API Développeurs',
      partners: 'Partenaires',
      atom: 'Atom',
      electron: 'Electron',
      astrowindDesktop: 'AstroWind Desktop',
    },
    support: {
      title: 'Support',
      docs: 'Documentation',
      communityForum: 'Forum communautaire',
      professionalServices: 'Services professionnels',
      skills: 'Compétences',
      status: 'Statut',
    },
    company: {
      title: 'Entreprise',
      about: 'À propos',
      blog: 'Blog',
      careers: 'Carrières',
      press: 'Presse',
      inclusion: 'Inclusion',
      socialImpact: 'Impact social',
      shop: 'Boutique',
    },
    legal: {
      terms: 'Conditions',
      privacy: 'Confidentialité',
    },
  },
  index: {
    metadata: {
      title: 'AstroWind — Modèle gratuit pour créer des sites web avec Astro + Tailwind CSS',
    },
    hero: {
      cta: 'Obtenir le modèle',
      cta2: 'En savoir plus',
      imageAlt: 'AstroWind Image principale',
      title: {
        part1: 'Modèle gratuit pour ',
        part2: 'créer des sites avec',
      },
      subtitle: 'est un modèle gratuit, personnalisable et prêt pour la production pour Astro 3.0 ',
      description:
        'Adapté aux Startups, aux Petites Entreprises, aux sites web SaaS, aux Portfolios professionnels, aux sites Marketing, etc.',
    },
    features: {
      tagline: 'Fonctionnalités',
      title: 'Ce que vous obtenez avec AstroWind',
      subtitle:
        'Un des modèles les plus professionnels et complets actuellement sur le marché.',
      items: [
        {
          title: 'Intégration d\'Astro + Tailwind CSS',
          description:
            'Une intégration fluide entre deux grands frameworks qui offrent une haute productivité, performance et polyvalence.',
          icon: 'tabler:brand-tailwind',
        },
        {
          title: 'Composants prêts à l\'emploi',
          description:
            'Widgets créés avec Tailwind CSS prêts à être utilisés pour les sites Marketing, SaaS, Blogs, Profils.',
          icon: 'tabler:components',
        },
        {
          title: 'Meilleures pratiques',
          description:
            'Créer des sites web sécurisés, efficaces et conviviaux qui offrent des expériences exceptionnelles et une valeur durable.',
          icon: 'tabler:list-check',
        },
        {
          title: 'Excellente vitesse de page',
          description:
            'Avoir une bonne vitesse de page a un impact sur le classement organique, améliore l\'expérience utilisateur (UI/UX).',
          icon: 'tabler:rocket',
        },
        {
          title: 'Optimisation SEO',
          description:
            "Le SEO améliore la visibilité du site, attire du trafic organique et atteint un public plus large.",
          icon: 'tabler:arrows-right-left',
        },
        {
          title: 'Ouvert à l\'innovation',
          description:
            'Adopter une culture ouverte à l\'innovation est indispensable au succès d\'une équipe de développeurs.',
          icon: 'tabler:bulb',
        },
      ],
    },
    content: {
      tagline: 'Aperçu du modèle',
      title: "Plan d'AstroWind : Là où l’utile s'allie au fun !",
      imageAlt: 'Image colorée',
      additionalTitle: 'Construit sur des fondations modernes',
      additionalDescription: 'Obtenez un avantage compétitif en intégrant les meilleures pratiques',
      items: [
        {
          title: 'Conçu sur Astro 3.0',
          description:
            'Bénéficiez de la performance et de la fluidité qu\'offre ce générateur de site moderne.',
        },
        {
          title: 'Stilisé avec Tailwind CSS',
          description:
            'Facilite la création rapide de designs et un style cohérent grâce à ce framework CSS de référence.',
        },
        {
          title: 'Compatibilité inter-navigateurs',
          description:
            'Garantissez un affichage et un fonctionnement consistants sur tous les navigateurs majeurs.',
        },
      ],
    },
    content2: {
      additionalDescription: 'Garantissez que votre présence en ligne vous représente vraiment.',
      items: [
        {
          title: 'Haut niveau de personnalisation',
          description: `Adaptez le modèle avec un effort minimal pour qu'il corresponde à votre image de marque.`,
        },
        {
          title: 'Nombreux layouts',
          description:
            'Explorez plusieurs options de mise en page pour trouver la structure qui présente au mieux vos idées.',
        },
        {
          title: 'Design totalement réactif',
          description:
            "Assurez le fonctionnement optimal de votre site sur différents appareils et tailles d'écrans.",
        },
        {
          title: 'Intégration multimédia',
          description:
            'Incorporez de manière fluide des images, des vidéos et du contenu divers interactif.',
        },
      ],
    },
    content3: {
      additionalDescription: 'Conçu pour encourager la croissance et le succès.',
      items: [
        {
          title: 'Engagement maximal',
          description:
            'Captivez votre audience avec des éléments interactifs et une navigation intuitive.',
        },
        {
          title: 'Amélioration continue',
          description:
            'Gardez votre site à jour par rapport aux dernières évolutions technologiques grâce aux mises à jour.',
        },
        {
          title: 'Gain de temps',
          description:
            'Sautez l\'étape laborieuse de créer un site de A à Z et lancez-vous sans attendre.',
        },
        {
          title: 'Support communautaire',
          description: `Rejoignez la communauté grandissante pour échanger et progresser ensemble.`,
        },
      ],
    },
    steps: {
      title: 'Mettez en ligne le site de vos rêves en un rien de temps.',
      imageAlt: 'Image des étapes',
      items: [
        {
          title: 'Étape 1 : <span class="font-medium">Téléchargement</span>',
          description:
            'Téléchargez le pack initial et décompressez le code sur votre machine de développement.',
          icon: 'tabler:package',
        },
        {
          title: 'Étape 2 : <span class="font-medium">Ajout de contenu</em>',
          description:
            'Remplissez le squelette de l\'application avec vos textes, images, et vidéos créatives.',
          icon: 'tabler:letter-case',
        },
        {
          title: 'Étape 3 : <span class="font-medium">Personnalisation</span>',
          description:
            'Stylisez l\'interface selon les couleurs et la typographie de votre propre marque ou identité.',
          icon: 'tabler:paint',
        },
        {
          title: 'Prêt !',
          icon: 'tabler:check',
        },
      ],
    },
    features2: {
      title: 'Widgets incontournables',
      subtitle: 'Retrouvez les composants les plus appréciés, préconfigurés dans la technologie Tailwind CSS',
      tagline: 'Composants',
      items: [
        {
          title: 'En-têtes',
          description: "La navigation est la boussole de tout visiteur égaré.",
          icon: 'flat-color-icons:template',
        },
        {
          title: 'Encarts héros',
          description:
            "Réalisez une entrée fracassante avec ces zones de contenu au-dessus de la ligne de flottaison.",
          icon: 'flat-color-icons:gallery',
        },
        {
          title: 'Avantages',
          description:
            'Lieu idéal pour exposer sans complexe vos points forts et superpouvoirs !',
          icon: 'flat-color-icons:approval',
        },
        {
          title: 'Contenu',
          description:
            "Le véritable cœur du sujet. Le style c'est bien, mais le texte est ce qui compte vraiment.",
          icon: 'flat-color-icons:document',
        },
        {
          title: 'Passage à l\'action',
          description:
            'Ces appels clairs qui poussent l\'internaute à franchir le pas pour acheter ou s\'inscrire.',
          icon: 'flat-color-icons:advertising',
        },
        {
          title: 'Prix',
          description: 'Affichez clairement la valeur et le détail de ce que vous proposez.',
          icon: 'flat-color-icons:currency-exchange',
        },
        {
          title: 'Témoignages',
          description: 'Le coin confidence des utilisateurs qui ont pris le temps de donner un avis constructif.',
          icon: 'flat-color-icons:voice-presentation',
        },
        {
          title: 'Contact',
          description:
            'Une messagerie digitale rapide et performante pour lier vos visiteurs à votre support client.',
          icon: 'flat-color-icons:business-contact',
        },
        {
          title: 'Pieds de page',
          description: "La fin du périple. L'endroit où stocker les liens obscurs et informations légales.",
          icon: 'flat-color-icons:database',
        },
      ],
    },
    blogLatestPosts: {
      title: 'Plus d\'information sur le blog',
      information: `Retrouvez du tutoriel et des découvertes pertinentes que nous avons rédigés après de nombreuses heures de pratique de ce framework de nouvelle génération.`,
    },
    faqs: {
      title: 'Foire Aux Questions',
      subtitle:
        'Résolvez les mystères persistants entourant le fonctionnement et les prérequis de cet écosystème.',
      tagline: 'FAQ',
      items: [
        {
          title: 'Pourquoi AstroWind ?',
          description:
            "Astro est à la pointe en terme de performance. Ne pas utiliser Tailwind serait refuser le futur.",
        },
        {
          title: 'De quoi ai-je besoin pour commencer ?',
          description:
            'Seulement la base : Git, Node.js et votre éditeur de code préféré prêt à servir.',
        },
        {
          title: 'Comment installer Astro et son template ?',
          description:
            "Clonez simplement le projet depuis GitHub puis utilisez npm/yarn/pnpm pour installer les dépendances.",
        },
      ],
    },
    stats: {
      stats: [
        { title: 'Téléchargements', amount: '132K' },
        { title: 'Étoiles', amount: '24.8K' },
        { title: 'Forks', amount: '10.3K' },
        { title: 'Utilisateurs', amount: '48.4K' },
      ],
    },
    callToAction: {
      cta: {
        text: 'Obtenir le modèle',
      },
      subtitle: {
        part1: 'Soyez surpris par ces chiffres aléatoirement immenses !',
        part2: "N'attendez plus !",
      },
    },
  },
  blog: {
    title: 'Blog',
    subtitle: 'Exemple de blog statique avec actualités, tutoriels, ressources et autres contenus intéressants sur AstroWind',
    tags: 'Tags:',
  },
  personal_p: {
    cta: {
      title: "Créons ensemble",
      subtitle: "Prêt à transformer votre vision en designs captivants ?",
      cta: {
        text: "Engagez-moi",
        href: "/contact"
      },
      },
    metadata: {
      title: "Démo de page d'accueil personnelle",
    },
    links: [
      { text: "Accueil", href: "/" },
      { text: "À propos", href: "#about" },
      { text: "CV", href: "#resume" },
      { text: "Portfolio", href: "#portfolio" },
      { text: "Blog", href: "#blog" },
      { text: "Github", href: "https://github.com/" },
    ],
    actions: [
      { text: "Engagez-moi", href: "#contact" },
    ],
    hero: {
      title: "Sarah Johnson",
      tagline: "Démo de site web personnel",
      cta: {
        text: "Engagez-moi",
        href: "/contact"
      },
      subtitle: "Je suis une designer graphique passionnée par les histoires visuelles. Avec 5 ans d'expérience.",
    },
    about: {
      title: "À propos",
      paragraph1: "Bienvenue dans mon voyage créatif.",
      paragraph2: "Je trouve mon inspiration dans le monde qui m'entoure.",
      paragraph3: "Si vous êtes curieux, suivez-moi :",
      items: [
        { title: "Dribbble", icon: 'tabler:brand-dribbble' },
        { title: "Behance", icon: 'tabler:brand-behance' },
        { title: "Pinterest", icon: 'tabler:brand-pinterest' }
      ],
      image: {
        src: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?auto=format&fit=crop&w=774&q=80",
        alt: "Image colorée"
      }
    },
    content: {
      portfolio: {
        title: "Élever les récits visuels",
        subtitle: "Embarquez pour un voyage de design qui dépasse les pixels.",
        items: [
          {
            title: "Identité de marque pour innovateurs technologiques",
            description: "Développement d'une identité de marque complète.",
            role: "Direction de l'ensemble du processus de branding.",
          },
        ],
        image: ""
      },
    },
    steps: {
      workExperience: [
        {
          title: "Designer graphique chez ABC Design Studio (2021 - Présent)",
          description: "Collaboration avec les clients.",
          icon: 'tabler:briefcase',
        },
      ],
      education: [
        {
          title: "Master of Fine Arts en Design Graphique (2018 - 2020)",
          icon: 'tabler:school',
        },
      ],
    },
    skills: {
      title: "Compétences",
      subtitle: "Découvrez les expertises que je mets à votre service.",
      items: [
        { title: 'Design graphique', description: 'Expertise dans la création de designs attrayants.' },
      ],
    },
    testimonials: {
      title: "Témoignages",
      subtitle: "Ce que l'on dit de mon travail",
      items: [
        {
          testimonial: "Elle a transformé notre concept flou en un chef-d'œuvre visuel.",
          name: "Mark Thompson",
          job: "Directeur créatif",
          image: { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=774&q=80', alt: 'Mark Thompson' },
        },
      ],
    },
    portfolio: {
      callToAction: {
        title: "Créons ensemble",
        subtitle: "Prêt pour des designs captivants ?",
        action: "Engagez-moi",
        button: "Engagez-moi",
        href: "/",
      },
    },
    blog: {
      title: "Explorez des articles inspirants sur mon blog",
      information: "Plongez dans un univers de sagesse design.",
    },
  },
  lp: {
    saas,
    startup,
    mobileApp,
    landings,
  },
};






