import { Link, useLocation, useParams } from "@remix-run/react"
import { AnimatePresence, motion } from "framer-motion"
import clsx from "clsx"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      {children}
      <NavBar />
    </AnimatePresence>
  )
}

const NavBar = () => {
  return (
    <motion.div
      key="2"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut" }}
      className="w-full h-24"
    >
      <nav className="bg-white/10 rounded-full mx-auto container flex items-center justify-between px-2 py-2 gap-x-4 shadow-sm shadow-white">
        {LINKS.map((val, i) => (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <NavLink key={i} {...val} />
        ))}
      </nav>
    </motion.div>
  )
}

type NavLinkProps = {
  name: string
  to: string
}
const NavLink = (props: NavLinkProps) => {
  const isActive = useLocation().pathname.includes(props.to)
  return (
    <Link
      to={props.to}
      className={clsx(
        "px-5 py-3 hover:bg-slate-300 hover:text-black transition-colors duration-200 rounded-full w-full text-center",
        {
          "!bg-white !text-black shadow-2xl shadow-red-400": isActive,
        }
      )}
    >
      {props.name}
    </Link>
  )
}

const LINKS: NavLinkProps[] = [
  { to: "/latarbelakang", name: "Latar Belakang" },
  { to: "/home", name: "Home" },
  { to: "/masalah", name: "Masalah" },
]
