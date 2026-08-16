# Dreamland Micro Lending

![Dreamland logo](public/logo.png)

Dreamland Micro Lending is a multi-page website for a micro-lending and small-business finance brand in Ghana.
The site is static, hosted with Firebase Hosting, and built with plain HTML, CSS, and JavaScript — no framework or
build step required.

## Pages

- `public/index.html` — home page (hero, features, process, loan products, team, FAQ preview, loan calculator)
- `public/about.html` — mission, story, stats, and leadership team
- `public/loans.html` — detailed loan products, comparison table, eligibility, and how to apply
- `public/apply.html` — functional loan application form (validates, then opens a pre-filled email to the Dreamland inbox)
- `public/contact.html` — contact details, office map, and a callback request form
- `public/faq.html` — accordion FAQ
- `public/terms.html` — terms & conditions
- `public/privacy.html` — privacy policy
- `public/cookies.html` — cookie policy
- `public/404.html` — custom error page (served automatically by Firebase Hosting)

## Project Structure

```
public/
  index.html            Home page
  about.html            About page
  loans.html            Loan products
  apply.html            Application form
  contact.html          Contact page
  faq.html              FAQ
  terms.html            Terms & conditions
  privacy.html          Privacy policy
  cookies.html          Cookie policy
  assets/
    css/styles.css      Shared design system
    js/main.js          Shared behavior (mobile nav, reveals, FAQ, back-to-top)
  logo.png, *.jpg       Brand and team images
  robots.txt            Crawler rules
  sitemap.xml           XML sitemap
firebase.json           Firebase Hosting configuration
```

## Run Locally

Open `public/index.html` in a browser, or serve the folder with any static server, for example:

```bash
npx serve public
```

## Deploy to Firebase

This project is configured for Firebase Hosting. To deploy updates, run:

```bash
firebase deploy
```

## Notes

- The site is a multi-page static site, so Firebase Hosting serves each page directly; `404.html` is used for
  missing routes.
- All forms are backend-free: they validate in the browser and open a pre-filled email to
  `info@dreamlandmicro.com` via `mailto:`. To capture submissions server-side, hook the forms up to a service such
  as Formspree or a Cloud Function.
- Assets live inside `public` so they are published correctly.
