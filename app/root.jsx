import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useLoaderData
} from "@remix-run/react";
import { ApolloProvider, gql } from '@apollo/client/core/core.cjs'; 
import { client } from './apolloClient'

export async function loader () {
  return await client
    .query({
      query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
    });
};

export default function App() {
  const locations = useLoaderData();

  return (
    <html>
      <head>
        <link
          rel="icon"
          href="data:image/x-icon;base64,AA"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Hello world!</h1>
        {locations.data.locations.map(data => (
          <>
            <h2>{data.name}</h2>
            <div>{data.description}</div>
          </>
        ))}
        <Outlet />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}