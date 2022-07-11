import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { AnimatePresence } from "framer-motion";
import tailwindCss from "./styles/tailwind.css";

export const links: LinksFunction = () => [
  { href: tailwindCss, rel: "stylesheet" },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="id">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="w-screen h-screen overflow-hidden bg-slate-900 text-white font-sans">
        <AnimatePresence>
          <Outlet />
        </AnimatePresence>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
