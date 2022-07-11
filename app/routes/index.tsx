import { Link } from "@remix-run/react";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <motion.div
      className="w-full h-full grid place-content-center grid-cols-2 px-[10rem] gap-7"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="col-span-1 text-5xl">
        Implementasi CI/CD Elephant In Rescue
      </h1>
      <motion.div className="place-self-end text-2xl pl-24 text-right">
        Rizqy Prastya Ari Nugroho
      </motion.div>

      <div className="w-full flex items-end justify-end col-span-2">
        <Link className="border rounded-full px-5" to="/pengertian">
          Next
        </Link>
      </div>
    </motion.div>
  );
}
