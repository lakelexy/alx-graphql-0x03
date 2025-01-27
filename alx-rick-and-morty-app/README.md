# ALX Rick and Morty App

This project is part of the ALX GraphQL module. It demonstrates how to set up a basic Next.js app with Apollo Client to interact with the Rick and Morty GraphQL API.

## Prerequisites

- Node.js and npm installed
- Basic understanding of GraphQL and Next.js

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/alx-graphql-0x01.git
   cd alx-graphql-0x01/alx-rick-and-morty-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Project Structure

```
.
├── graphql
│   ├── apolloClient.ts   # Apollo Client configuration
│   └── queries.ts        # GraphQL queries
├── pages
│   └── _app.tsx          # Custom App component with ApolloProvider
├── public                # Static assets
├── styles                # Global and component-specific styles
└── README.md             # Project documentation
```

## Configuration

### Apollo Client Setup

The Apollo Client is configured in `graphql/apolloClient.ts` to interact with the Rick and Morty GraphQL API:

```typescript
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://rickandmortyapi.com/graphql",
  }),
  cache: new InMemoryCache(),
});

export default client;
```

### GraphQL Query

The `GET_EPISODES` query is defined in `graphql/queries.ts` to fetch episodes data:

```typescript
import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query getEpisodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        pages
        next
        prev
        count
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;
```

### Custom App Component

The `_app.tsx` file sets up the ApolloProvider to make the client accessible across the app:

```typescript
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
```

## Running the Project

To start the development server:

```bash
npm run dev
```

Open your browser and navigate to:

```
http://localhost:3000
```

### Expected Output

After starting the development server and navigating to `http://localhost:3000`, the following should be achieved:

- A functional Next.js application with Apollo Client configured.
- Queries to the Rick and Morty GraphQL API can be successfully executed.
- Display of Rick and Morty episodes when integrated with additional components.

## Repository

GitHub Repository: [alx-graphql-0x01](https://github.com/lakelexy/alx-graphql-0x01)
