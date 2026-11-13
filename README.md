# Yassine Founounou — Portfolio

A multi-page, statically generated portfolio built with Astro and Tailwind CSS. It has no server runtime, API routes, or required backend. `npm run build` writes the complete site to `dist/` for static hosting.

## Run locally

```sh
npm install
npm run dev
```

Build and preview the static output:

```sh
npm run build
npm run preview
```

Upload the contents of `dist/` to the document root of the static host. Pages are emitted as `index.html`, `about/index.html`, `projects/index.html`, and `contact/index.html`; navigation uses clean directory URLs.

The contact form opens a pre-filled email in the visitor's mail app. It requires no form service or server endpoint. To use Formspree later, replace the form submit handler and add the endpoint URL in `src/pages/contact/index.astro`.
>>>>>>> 6e9b1b7 (Add personal portfolio website)
