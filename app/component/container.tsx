import { motion } from "framer-motion";

type ContainerProps = {
  children: React.ReactNode;
};
export function Container(props: ContainerProps) {
  return (
    <motion.div
      className="w-full h-full grid place-content-center grid-cols-2 px-[10rem] gap-7"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {props.children}
    </motion.div>
  );
}
