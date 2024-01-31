## 📌 Overview

This guide details the steps to build a blog application, emphasizing project setup, technology integration, and basic CRUD operations. Live version [here](https://application-excercise-one.vercel.app/).

## ⚗️ Tech Stack:

- TypeScript
- Next.js
- tRPC
- Prisma
- PlanetScale

## ⚙️ Setting Up

### Step 1: Clone the Repository

First, clone the `application-excercise` repository to get the project onto your local machine:

```sh
git clone https://github.com/manuelpastorringuelet/application-excercise
cd application-excercise
```

1. **Create a Database**:

   - Sign up or log in to [PlanetScale](https://planetscale.com/).
   - Create a new database. Take note of the connection details provided after creation.

2. **Configure Your Application**:
   - In the root directory of your cloned project, locate or create a `.env` file.
   - Add your PlanetScale database credentials in the `.env` file as follows:
     ```env
     DATABASE_URL="your_planetscale_database_connection_string"
     ```
   - Replace `"your_planetscale_database_connection_string"` with the actual connection string provided by PlanetScale.

### Step 3: Install Dependencies

Install the project dependencies using your preferred package manager. Here are the commands for common package managers:

```bash
# Using pnpm
pnpm install

# Using bun
bun install

# Using npm
npm install

# Using yarn
yarn install
```

### Step 4: Start Development Server

Once the dependencies are installed, start the development server using the corresponding command for your package manager:

```bash
# Using pnpm
pnpm dev

# Using bun
bun dev

# Using npm
npm run dev

# Using yarn
yarn dev
```

Navigate to [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

## Application Features

- **Homepage**: Lists all blog posts with titles and dates. Clicking on a post redirects to the post detail page.
- **Blog Post Detail Page**: Displays the full content of a blog post. Contains a button to delete the post and a button to go back to the homepage.
- **Create Blog Post Page**: Form for new posts with Zod validation.

## UI Components

Utilizes custom components (`Layout.tsx`, `Navbar.tsx`, `Footer.tsx`, `BlogPostCard.tsx`) alongside elements from the Shadcn library for a consistent design approach.

## Utilities and Packages

- `faker-js`: Generates dummy data.
- `dateformat`: Ensures consistent date presentation across the application.

## Backend Services

- Powered by tRPC for API endpoints.
- Utilizes Prisma for database interactions.
- PlanetScale serves as the database provider.
