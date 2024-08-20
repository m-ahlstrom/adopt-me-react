# Adopt Me - Pet Adoption Site with React

A pet adoption site written in React. Search for pets waiting to be adopted. Get detailed information on them before you make your choice. All pets are coming from the Petfinder API. Technologies used: **Vite**, **React**, **Redux**, **Tailwind CSS**, **TypeScript**, **React Testing Library**, **Vitest**.

The code in this project is based on [The Complete Intro to React](https://frontendmasters.com/courses/complete-react-v8/) and [Intermediate React](https://frontendmasters.com/courses/intermediate-react-v5/) courses by Brian Holt from [Frontend Masters](https://www.frontendmasters.com).

## Features

- **✓** Navbar, Footer: **Done**
- **✓** Light/Dark Mode with React Context: **Done**
- **✓** Pagination: **Done**
- **✓** Migration to Tailwind CSS: **Done**
- **✓** Migration to TypeScript: **Done**
- **✓** Migrating some of the state management to Redux/RTK: **Done**
- X Migration to the Petfinder API: *Not Complete*
- **✓** Test components with Vitest and React Testing Library: **Partially done**

## How to use

- `npm run dev` : start local dev server with Vite.
- `npm run build` : `tsc --noEmit` will typecheck the project, and then build it to the `dist` folder with Vite.
- `npm run preview` : preview the built project on a local dev server with Vite.
- `npm run format` : format all files according to the Prettier config.
- `npm run lint` : lint all files using ESLint with a different parser for `.js`/`.jsx` and `.ts`/`.tsx` files.
- `npm run typecheck` : typecheck the project with `tsc --noEmit`.

## Running tests

- `npm test` will run all test suites once in `src/__tests__`. The command calls `vitest --run` under the hood.
- `npm run test:watch` will run all test suites in watch mode.
- `npm run coverage` will show a detailed test coverage report of what is and what is not tested in the project.
