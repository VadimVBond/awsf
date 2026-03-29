import fs from 'fs';
import path from 'path';

const srcJson = 'm:/Web/Turborepo/awsf/apps/portfolio-master/src/data/projects.json';
const destJson = 'm:/Web/Turborepo/awsf/apps/astrowind-i18n/src/components/blocks/gallery/gallery.json';

const projects = JSON.parse(fs.readFileSync(srcJson, 'utf-8'));

const getCategory = (id) => {
  if (['hack4tools', 'midupass'].includes(id)) return 'Tools';
  if (['avocadoo', 'nananames'].includes(id)) return 'Web';
  return 'Other';
};

const mapProject = (p, langDesc, langSlogan) => ({
    ...p,
    title: p.projectTitle,
    description: langDesc,
    slogan: langSlogan,
    category: getCategory(p.id),
    images: p.carouselImages.map(img => `/projects/${p.id}/${img}`),
    technologies: p.projectTechnologies || []
});

const translations = {
  en: projects.map(p => mapProject(p, p.projectDescription.replace('en español', 'in English'), p.projectSlogan)),
  ru: projects.map((p) => mapProject(p, p.projectDescription + ' (Перевод на русский)', p.projectSlogan + ' (Слоган RU)')),
  uk: projects.map((p) => mapProject(p, p.projectDescription + ' (Переклад українською)', p.projectSlogan + ' (Слоган UK)')),
  it: projects.map((p) => mapProject(p, p.projectDescription + ' (Traduzione italiana)', p.projectSlogan + ' (Slogan IT)')),
  fr: projects.map((p) => mapProject(p, p.projectDescription + ' (Traduction française)', p.projectSlogan + ' (Slogan FR)')),
  de: projects.map((p) => mapProject(p, p.projectDescription + ' (Deutsche Übersetzung)', p.projectSlogan + ' (Slogan DE)'))
};

fs.mkdirSync(path.dirname(destJson), { recursive: true });
fs.writeFileSync(destJson, JSON.stringify(translations, null, 2), 'utf-8');
console.log('JSON generated successfully.');
