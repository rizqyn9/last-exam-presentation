import { motion } from "framer-motion"
import clsx from "clsx"

type ContainerProps = {
  children: React.ReactNode
  className?: string
}
export function Container(props: ContainerProps) {
  return (
    <motion.div
      // initial={{ opacity: 0, scale: 0.9 }}
      // animate={{ opacity: 1, scale: 1 }}
      // exit={{ opacity: 0, scale: 0.9 }}
      className={clsx("flex-1 font-primary flex flex-col", props.className)}
      // transition={{
      //   ease: "easeInOut",
      //   duration: 0.3,
      // }}
      key="4234234"
    >
      {props.children}
    </motion.div>
  )
}
