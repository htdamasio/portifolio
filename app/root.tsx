import { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useOutletContext
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";
import { globalStyles } from "./configuration.stitches";
import React from 'react'
import ApolloContext from "./context/apollo"
import { Analytics } from '@vercel/analytics/react';

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyles() },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Henrique Tomé Damsio",
  viewport: "width=device-width,initial-scale=1",
});

export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const initialState = React.useContext(ApolloContext)
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Analytics />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />

        <script
          dangerouslySetInnerHTML={{
            __html: `window.__INITIAL_STATE__=${JSON.stringify(
              initialState
            ).replace(/</g, "\\u003c")}`
          }}
        />
      </body>
    </html>
  );
}
