# Showcase SvelteKit Workshop Repo

This repository is the home of the "Showcase SvelteKit Workshop", leveraging the latest in SvelteKit, CSR / SSR, authentication with Lucia, PostgreSQL adapter, and comprehensive testing strategies.

## Authentication with Lucia and PostgreSQL

- **Lucia**: Integrated for streamlined authentication.
- **PostgreSQL Adapter**: Utilizes `@lucia-auth/adapter-postgresql` for secure database interactions.

## Testing

- **Unit Testing**: Implemented with `vitest`.
- **Integration Testing**: Conducted using `@playwright/test`.
- **Testing Utilities**: Svelte components tested with `@testing-library/svelte`.

## Development and Building

- **Developing**: Run `npm run dev` to start the development server.
- **Building**: Use `npm run build` to create a production build.

Refer to the provided scripts in `package.json` for a full range of commands available for testing, linting, and development.

> Ensure to install dependencies with `npm install` before starting development. For deploying, an appropriate [adapter](https://kit.svelte.dev/docs/adapters) might be required.
