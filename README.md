# PowerSync + Supabase NextJS Demo: Todo List 

**Deploy to Vercel**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpowersync-ja%2Fpowersync-supabase-vercel-todolist-demo&project-name=powersync-supabase-vercel-demo&repository-name=powersync-supabase-vercel-demo&demo-title=PowerSync%20NextJS%20App&demo-description=NextJS%20offline-first%20demo%20using%20Supabase%20and%20PowerSync&demo-url=https%3A%2F%2Fgithub.com%2Fpowersync-ja%2Fpowersync-supabase-vercel-todolist-demo&demo-image=https%3A%2F%2Fuploads-ssl.webflow.com%2F651d89402147985dc475ff48%2F655dc65e63f0529b22e92a3b_img-ja-powersync-logo-vercel-001.png)

## Note: Alpha Release

This package is currently in a alpha release.

## Overview

Demo app demonstrating use of the [PowerSync SDK for Web](https://www.npmjs.com/package/@journeyapps/powersync-sdk-web) together with Supabase.

A step-by-step guide on Supabase<>PowerSync integration is available [here](https://docs.powersync.co/integration-guides/supabase).

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Set up the Environment variables: Copy the `.env.local.template` file:

```bash
cp .env.local.template .env.local
```

And then edit `.env.local` to insert your credentials for Supabase.

Run the development server:

```bash
pnpm watch
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Progressive Web App (PWA)

This demo is PWA compatible. PWA is not available in development (watch) mode.

Build the production codebase

```bash
pnpm build
```

Run the production server

```bash
pnpm start
```

Open a browser on the served URL and install the PWA.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

Also check out [the PowerSync Web SDK GitHub repository](https://github.com/powersync-ja/powersync-web-sdk) - your feedback and contributions are welcome!

To learn more about PowerSync, see the [PowerSync docs](https://docs.powersync.com).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
