// Datos de contacto de Arbel Agroventas: única fuente de verdad.
// Se usan en navigation.ts y en las páginas. Para cambiar un dato, editalo acá.

export const BUSINESS_NAME = 'Arbel Agroventas';
export const OWNER_NAME = 'Carlos Arbel';

// Formato internacional sin "+", espacios ni guiones: 54 9 + área 3471 + número 357857
export const WHATSAPP_NUMBER = '5493471357857';
export const PHONE_DISPLAY = '3471 35-7857';
export const EMAIL = 'carlosarbel2020@gmail.com';
export const INSTAGRAM_URL = 'https://www.instagram.com/arbel.agroventas/';
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61555408143326';

export const WHATSAPP_BASE_MESSAGE = 'Hola, vengo de tu página web y quisiera consultar por…';
export const WHATSAPP_CTA_TEXT = 'Escribinos por WhatsApp';

/** Enlace de WhatsApp. Con `topic` el mensaje termina en el tema consultado. */
export const waLink = (topic?: string): string => {
  const message = topic
    ? `${WHATSAPP_BASE_MESSAGE.replace('…', '')} ${topic}`
    : WHATSAPP_BASE_MESSAGE;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

/** Botón estándar de WhatsApp (mismo texto en todo el sitio). */
export const whatsappAction = (topic?: string) => ({
  variant: 'primary' as const,
  text: WHATSAPP_CTA_TEXT,
  href: waLink(topic),
  target: '_blank',
  icon: 'tabler:brand-whatsapp',
});
