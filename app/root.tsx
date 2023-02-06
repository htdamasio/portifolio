import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";
import { globalStyles } from "./configuration.stitches";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyles() },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Henrique Tomé Damsio",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
