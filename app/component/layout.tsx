import { Link, useLocation, useParams } from "@remix-run/react"
import { AnimatePresence, motion } from "framer-motion"
import clsx from "clsx"

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

const NavBar = () => {
  return (
    <motion.div
      key="123123"
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut" }}
      className="w-full h-24"
    >
      <nav className="bg-white/10 rounded-full h-14 mx-auto container flex items-center justify-between p-2 gap-x-2 shadow-sm shadow-white">
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
        "p-1 h-full hover:bg-slate-300 hover:text-black transition-all duration-200 first:rounded-l-full last:rounded-r-full w-full text-center flex items-center justify-center",
        {
          "!bg-white/80 !text-black shadow-xl shadow-slate-400": isActive,
        }
      )}
    >
      {/* <div
        className={clsx(
          "border-black rounded-full w-full",
          isActive && "border-2"
        )}
      > */}
      {props.name}
      {/* </div> */}
    </Link>
  )
}

const LINKS: NavLinkProps[] = [
  { to: "/latarbelakang", name: "Latar Belakang" },
  { to: "/home", name: "Home" },
  { to: "/masalah", name: "Masalah" },
]
