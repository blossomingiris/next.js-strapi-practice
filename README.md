# Next.js + Strapi app

## Tech stack

- [Next.js](https://nextjs.org/docs)
- [Strapi][https://docs.strapi.io/dev-docs/intro]
- [React Tanstack Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [Tailwind](https://tailwindcss.com/docs/installation)
- [Shadcn](https://ui.shadcn.com/docs)
- [React-hook-form](https://react-hook-form.com)
- [Zod](https://zod.dev)


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Poppins, a custom Google Font.

Second,  navigate to "backend" folder and run

 ```bash
npm run develop
```

You can login to Strapi Admin panel:

Open http://localhost:1337/admin and use following credentials:

 ```bash
email: admin@admin.com
password: Admin123
```

## Usage

There is few functionality available:

- User Creation: create new users with validation
- Users View: see all users listed in table
- User View: view user details by navigating through users table (only for default user with "slug" field")

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

