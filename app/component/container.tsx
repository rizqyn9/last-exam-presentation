import { motion } from "framer-motion"

type ContainerProps = {
  children: React.ReactNode
}
export function Container(props: ContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="flex-1"
      transition={{
        ease: "easeInOut",
        duration: 1,
      }}
      key="1"
    >
      {props.children}
    </motion.div>
  )
}
