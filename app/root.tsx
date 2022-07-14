import type { LinksFunction, MetaFunction } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import { AnimatePresence } from "framer-motion"
import Layout from "./component/layout"
import tailwindCss from "./styles/tailwind.css"

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
]

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
})

export default function App() {
  return (
    <html lang="id">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="w-screen h-screen max-w-screen-lg overflow-hidden bg-slate-900 text-white font-sans relative container mx-auto flex flex-col">
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
