# Blue.Ai Landing Page

A Nextjs Application representing [Blue.AI](https://blue.ai) official Landing Page.

## Table of Contents

- [Setup](#Setup)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Available Scripts](#scripts)
- [Deployment](#deployment)
- [Nextjs Docs](#docs)

## Setup

This project is built with Next.js, Typescript, Tailwindcss, Nodemailer for SMTP emails, and Framer Motion for animations.

## Prerequisites

To order to install and run project smoothly, please make sure to have the following installed:

- Node.js (version 18.0.0 or higher)
- pnpm package manager

## Installation

1. Clone the repository:

```bash
git clone https://gitlab.com/a10179/omni-channel/frontend/blue.ai-frontend.git
```

2. Install all the dependencies needed:

```bash
pnpm i
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with the browser to see the result.

## Configuration

To configure project correctly, create a new `.env.local` file and add the following variables:

- `BASE_URL`: Base url for Live website (production), used for seo configuration in the project

Next, we have to add additional configuration for the SMTP server:

1. Open the `.env.local` file in the root directory of the project.

2. Add the following environment variables to the file:

```
SMTP_HOST=our_smtp_host
SMTP_AUTH=our_smtp_auth
SMTP_PASS=our_smtp_password
```

Replace `our_smtp_host`, `our_smtp_auth`, and `our_smtp_password` with the actual values provided by our SMTP server provider.

3. Save the `.env.local` file.

4. Restart the development server for the changes to take effect.

5. The project is now configured to use the provided SMTP server for sending emails.

## Scripts

In the project directory, you can run the following scripts:

- `pnpm dev`: Starts the Next.js development server.
- `pnpm dev:clean`: Cleans cache and re-installs modules, then Starts a clean Next.js development server.
- `pnpm build`: Builds the production-ready optimized version of the Next.js project.
- `pnpm postbuild`: Generates a sitemap after the build process. (Requires next-sitemap package to be installed)
- `pnpm start`: Starts the production server.
- `pnpm cy:open`: Open Cypress Test Runner for interactive test execution and debugging.
- `pnpm cy:run`: Run Cypress tests in headless mode, suitable for automated testing and CI environments.
- `pnpm lint`: Runs the Next.js linter to check for code style and formatting issues.
- `pnpm check-types`: Checks TypeScript types without emitting any files.
- `pnpm check-all`: Runs the linting and type checking scripts.
- `pnpm clean`: Removes the dist and .next directories.
- `pnpm clean-all`: Removes the node_modules directory and clears the package cache.

## Deployment

### Checking For Bugs

In order to deploy the project, we have to make sure that the project is bug-free, without linting issues, by running `pnpm check-all` to check for linting and Typescript errors.

### Building Locally

Next, we can test a local verison for a production build by following these steps:

1. Build The project:

```
pnpm run build
```

2. Start server:

```
pnpm run start
```

3. Open [http://localhost:3000](http://localhost:3000) with the browser to see production built verison

### Deploying to Vercel

1. Log in to the Vercel dashboard.

2. Connect Vercel to the repo of the project, Which automatically builds and deploys project (Master branch) and anytime we Push to Master branch. Pushing to any other branch creates a Preview deployment useful for testing.

3. Go to project settings.

4. Navigate to the "Environment Variables" section.

5. Add the following environment variables:

- Variable: `SMTP_HOST`, Value: `our_smtp_host`
- Variable: `SMTP_AUTH`, Value: `our_smtp_auth`
- Variable: `SMTP_PASS`, Value: `our_smtp_password`

Replace `our_smtp_host`, `our_smtp_auth`, and `our_smtp_password` with the actual values provided by our SMTP server provider.

6. Save the environment variables.

7. Vercel will redeploy the project with the updated environment variables, enabling the SMTP server configuration for the production environment.

8. The project is now configured to use the provided SMTP server for sending emails in the production environment.

## Docs

To read Next.js documentation, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn/foundations/about-nextjs) - an interactive Next.js tutorial.
