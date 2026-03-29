
const navBarLinks = [
  { name: "Главная", url: "/ru/" },
  { name: "Продукты", url: "/ru/products" },
  { name: "Услуги", url: "/ru/services" },
  { name: "Блог", url: "/ru/blog" },
  { name: "Контакт", url: "/ru/contact" },
];

const footerLinks = [
  {
    section: "Экосистема",
    links: [
      { name: "Документация", url: "/ru/welcome-to-docs/" },
      { name: "Outils et Équipements", url: "/ru/products" },
      { name: "Services de Construction", url: "/ru/services" },
    ],
  },
  {
    section: "Société",
    links: [
      { name: "À propos de nous", url: "#" },
      { name: "Blog", url: "/ru/blog" },
      { name: "Carrières", url: "#" },
      { name: "Clients", url: "#" },
    ],
  },
];

const socialLinks = {
  facebook: "#",
  x: "#",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "#",
  slack: "#",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};