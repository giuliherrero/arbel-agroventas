import { getPermalink } from './utils/permalinks';
import { BUSINESS_NAME, EMAIL, FACEBOOK_URL, INSTAGRAM_URL, whatsappAction, waLink } from './data/contact';

export const headerData = {
  links: [
    { text: 'Inicio', href: getPermalink('/') },
    { text: 'Servicios', href: getPermalink('/services') },
    { text: 'Nosotros', href: getPermalink('/about') },
    { text: 'Contacto', href: getPermalink('/contact') },
  ],
  actions: [whatsappAction()],
};

export const footerData = {
  links: [
    {
      title: 'Sitio',
      links: [
        { text: 'Inicio', href: getPermalink('/') },
        { text: 'Servicios', href: getPermalink('/services') },
        { text: 'Nosotros', href: getPermalink('/about') },
        { text: 'Contacto', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Contacto',
      links: [
        { text: 'WhatsApp', href: waLink() },
        { text: 'Email', href: `mailto:${EMAIL}` },
        { text: 'Instagram', href: INSTAGRAM_URL },
        { text: 'Facebook', href: FACEBOOK_URL },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: INSTAGRAM_URL },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: FACEBOOK_URL },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: waLink() },
  ],
  footNote: `© ${new Date().getFullYear()} ${BUSINESS_NAME}. Todos los derechos reservados.`,
};
