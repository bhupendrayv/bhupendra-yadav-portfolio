# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Adding Contact Form Email Support 📧

This portfolio template ships with a contact form but no backend; to enable sending messages you can use a service such as [EmailJS](https://www.emailjs.com/) or your own API.

1. Sign up for EmailJS and create a service/template.
2. Copy `.env.example` to `.env` and fill in the values (or just edit the `.env` file you created earlier):
   ```bash
   cp .env.example .env
   # then edit the keys
   ```
   After changing `.env`, **restart the dev server** (`npm run dev`) so Vite picks up the new values.
3. Install the client library:
   ```bash
   npm install @emailjs/browser
   # or yarn add @emailjs/browser
   ```
4. The application reads the variables via `import.meta.env` (Vite requires the `VITE_` prefix).
5. See `src/config/emailConfig.js` for the exported constants, and `src/sections/Contact.jsx` for the form handling logic.

Feel free to swap EmailJS with any other service or a self‑hosted endpoint; just update the configuration accordingly.
