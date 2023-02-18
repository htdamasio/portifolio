import { MetaFunction, SerializeFrom } from "@remix-run/node";
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

export const loader = () => {
  return {
    ENV: {
      VERCEL_ANALYTICS_ID: process.env.VERCEL_ANALYTICS_ID,
    },
  }
};

declare global {
  interface Window {
    ENV: SerializeFrom<typeof loader>['ENV']
  }
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyles() },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Henrique Tomé Damsio",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const initialState = React.useContext(ApolloContext);
  const {ENV} = useLoaderData<typeof loader>();
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
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />        
      </body>
    </html>
  );
}
