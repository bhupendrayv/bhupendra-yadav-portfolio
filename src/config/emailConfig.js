
function getEnv(name, value) {
  const v = typeof value === 'string' ? value.trim() : value;
  if (!v) {
    console.warn(`Missing environment variable ${name}. Contact form may not work.`);
    return '';
  }
  return v;
}

export const EMAILJS_SERVICE_ID = getEnv('VITE_EMAILJS_SERVICE_ID', import.meta.env.VITE_EMAILJS_SERVICE_ID);
export const EMAILJS_TEMPLATE_ID = getEnv('VITE_EMAILJS_TEMPLATE_ID', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
export const EMAILJS_PUBLIC_KEY = getEnv('VITE_EMAILJS_PUBLIC_KEY', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
