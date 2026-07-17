# Dreamland Micro Lending

Dreamland Micro Lending is a simple, polished landing page for a micro-lending and small-business finance brand in Ghana. The site is built as a static web page and hosted with Firebase.

## Project Overview

- Responsive one-page website
- SEO-friendly metadata and structured data
- Sticky navigation and mobile menu
- Clear call-to-action sections for loan inquiries

## Project Structure

- public/index.html — main landing page markup and styles
- firebase.json — Firebase Hosting configuration
- public/ — static assets such as images and icons

## Run Locally

Open [public/index.html](public/index.html) in a browser to view the page locally.

If you want a local preview server, you can use any simple static server, for example:

```bash
npx serve public
```

## Deploy to Firebase

This project is configured for Firebase Hosting. To deploy updates, run:

```bash
firebase deploy
```

## Notes

- The site uses Firebase Hosting rewrites to serve the single-page app behavior.
- Assets should be placed inside the public directory so they are published correctly.
