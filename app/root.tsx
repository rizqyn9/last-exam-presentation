import type { LinksFunction, MetaFunction } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import React from "react"
import Cursor from "./component/cursor"
import Layout from "./component/layout"
import tailwindCss from "./styles/tailwind.css"
import useMouse from "beautiful-react-hooks/useMouse"

export const links: LinksFunction = () => [
  { href: tailwindCss, rel: "stylesheet" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preload",
    href: "https://fonts.gstatic.com",
    crossOrigin: "use-credentials",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&family=Poppins:wght@200;400;600;800&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;500;700&display=swap",
  },
]

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
})

export default function App() {
  const ref = React.useRef<HTMLBodyElement>(null)

  return (
    <html lang="id">
      <head>
        <Meta />
        <Links />
      </head>
      <body
        ref={ref}
        className="w-screen h-screen overflow-hidden bg-slate-900 text-white font-sans relative flex flex-col"
      >
        <Layout>
          <Outlet />
        </Layout>
        <Cursor />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
