# FoodShareBookFront (React + Redux)

FoodShareBookFront is the web client for FoodShareBook. It consumes the
`ApiFoodShareBook` backend and provides UI flows for dishes, ingredients,
measures, users, roles, and permissions.

This document is an onboarding guide intended for mid/senior developers.

## 1. Tech Stack and Runtime

- React `16.14`
- Redux + Redux Thunk
- React Router `v5`
- Axios for API calls
- Bootstrap + React-Bootstrap + Material UI v4
- TypeScript typings are present, but the app is mainly JS/JSX

Pinned engines in `package.json`:

- Node: `10.16.0`
- npm: `6.9.0`

Important: these versions are legacy. Newer Node/npm versions may work but can
introduce compatibility issues due to the older CRA/react-scripts toolchain.

## 2. Repository Structure

- `src/components`: feature and shared UI components
- `src/services`: API access layer and async request helpers
- `src/actions`: Redux actions
- `src/reducers`: Redux reducers and root reducer
- `src/routes.js`: application route map and role-based navigation
- `src/store.js`: Redux store configuration

## 3. Prerequisites

Install before bootstrapping:

1. Node.js `10.16.0` and npm `6.9.0` (recommended via nvm)
2. Git
3. Running local backend (`ApiFoodShareBook`) on `http://localhost:5000`

Suggested with nvm:

```bash
nvm install 10.16.0
nvm use 10.16.0
node -v
npm -v
```

## 4. First-Time Setup

From the `FoodShareBookFront` folder:

```bash
npm install
```

Start the app:

```bash
npm start
```

Default local URL:

- `http://localhost:3000`

## 5. Backend Integration Contract

The app is wired to this local API base URL:

- `http://localhost:5000/api/v1/`

It is configured in `src/services/foodsharebook_api.js`.

Before running frontend workflows, ensure backend is up:

```bash
# In ApiFoodShareBook
bin/rails s -p 5000
```

## 6. Authentication and Session Flow

Login flow:

1. `POST /users/login` with email/password.
2. If successful, frontend stores `auth_token` in cookie (`Authorization`) when
   "Remember me" is enabled.
3. Axios default header `Authorization` is set from token.
4. Frontend fetches `GET /users/current_user_data` and updates Redux state.

Startup behavior:

- On mount, layout checks cookie token and restores authenticated session if
  token exists.

Logout behavior:

- Deletes `Authorization` cookie and resets auth state.

## 7. Authorization and Route Access

Routing logic is role-aware in `src/routes.js`.

- Admin-like behavior is currently hardcoded as `current_user.id === 1`.
- Non-admin users get a reduced route set.

This is a practical implementation detail to be aware of when extending role
or permission logic.

## 8. State Management Conventions

- Global state is managed by Redux reducers under `src/reducers`.
- Async workflows use Redux Thunk service calls from `src/services`.
- API errors are surfaced through `errorReducer` and shown in a modal in the
  main layout.

## 9. Common Developer Commands

Run local dev server:

```bash
npm start
```

Run tests:

```bash
npm test
```

Create production build:

```bash
npm run build
```

## 10. Known Gotchas

1. The project targets an old Node/npm toolchain.
2. API URL is hardcoded in code (`foodsharebook_api.js`), not environment-based.
3. CORS must allow `localhost:3000` on backend.
4. Admin route visibility is tied to user id check (`id === 1`), not only role.

## 11. Recommended Day-to-Day Workflow

1. Start backend first on port 5000.
2. Start frontend with `npm start`.
3. Log in and verify token/cookie flow.
4. Implement feature changes in components/services/actions/reducers together.
5. Run tests and smoke critical routes before opening PR.

## 12. Production Hardening Checklist (Short)

- Move API base URL to environment variables.
- Replace hardcoded admin check with permission/role based guards.
- Add route-level tests for auth and authorization behavior.
- Add linting and CI quality gates if missing.
- Review dependency upgrade strategy (React Scripts and Node runtime).
