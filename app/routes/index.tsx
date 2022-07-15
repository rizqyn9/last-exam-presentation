import { Link } from "@remix-run/react"
import { motion } from "framer-motion"
import { Button } from "~/component/button"

export default function Index() {
  return (
    <>
      <div className="col-span-1 text-5xl leading-[120%] flex flex-col gap-5 bg-red-200">
        <div>
          <h1>Implementasi</h1>
          <h1>Continuous Integration Continuous Delivery</h1>
        </div>
        <h1>Elephant In Rescue</h1>
      </div>

      <motion.div
        className="place-self-end text-2xl pl-24 text-right"
        key="123123"
      >
        Rizqy Prastya Ari Nugroho
      </motion.div>

      <div className="w-full flex items-end justify-end col-span-2 bg-red-100">
        <Link to="/pengertian">
          <Button className="bg-white px-12 rounded-full py-2">Next</Button>
        </Link>
      </div>
    </>
  )
}
