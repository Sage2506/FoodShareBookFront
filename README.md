# FoodShareBookFront

FoodShareBookFront is the web client for FoodShareBook, a recipe-sharing
application. It provides screens for browsing and managing dishes and their
ingredients, as well as measures, users, roles, and permissions. The frontend
uses the ApiFoodShareBook Rails backend for data and authentication.

## Tech stack

- React 16 and Create React App (`react-scripts`)
- JavaScript/JSX, with TypeScript used for some interfaces and components
- React Router 5
- Redux and Redux Thunk, React Query, and Zustand for client state and data
- Axios for HTTP requests
- Bootstrap 4, React-Bootstrap, and Material-UI 4

## Run locally

### Prerequisites

- Node.js and npm
- A running ApiFoodShareBook backend (required for API-backed features)

The `package.json` engine field declares Node `10.16.0` and npm `6.9.0`, but
the checked-in `package-lock.json` uses lockfile version 3, which requires a
newer npm. For a local setup that can read this lockfile while avoiding the
OpenSSL compatibility issue in the older Create React App toolchain, use Node
`16.20.x` with npm `9.x`. For example, with nvm:

```sh
nvm install 16.20
nvm use 16.20
npm install --global npm@9
node --version
npm --version
```

Install dependencies and start the frontend from the repository root:

```sh
npm install
npm start
```

The development server opens at `http://localhost:3000`.

### Start the backend

In a separate terminal, start the ApiFoodShareBook backend on port `5000`.
Follow the local database and secret setup instructions in that repository's
README, then run:

```sh
bin/rails server -p 5000
```

The frontend's Axios client is configured to call
`http://localhost:5000/api/v1/`. The backend must allow requests from
`http://localhost:3000` through its CORS configuration. No frontend `.env` file
is required for the default local API URL.

## Application notes

- Sign in through the UI using an account available in the backend database.
  The frontend stores the returned authentication token in an
  `Authorization` cookie and uses it on API requests.
- Route visibility includes a hard-coded admin check for `current_user.id ===
  1`; do not treat it as a general role/permission check.
- The API base URL is currently hard-coded in
  `src/services/foodsharebook_api.js`.

## Common commands

Run the development server:

```sh
npm start
```

Run tests in non-interactive mode:

```sh
npm test -- --watchAll=false
```

Create a production build:

```sh
npm run build
```
