import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import { Container } from "~/component/container"

export default function () {
  return (
    // <AnimatePresence>
    <Container className="">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-1 flex-col font-extrabold text-[9rem] leading-[70%] min-h-max justify-center uppercase -tracking-[5px] p-10"
      >
        <h1 className="tracking-lighter">Implementasi</h1>
        <h1 className="text-[5rem] leading-[4.5rem]">Continuous Integration</h1>
        <h1 className="text-[5rem] leading-[4.5rem]">Continuous Delivery</h1>
        <h1 className="text-[6rem] leading-[4.5rem] w-1/2">
          Elephant In Rescue
        </h1>
      </motion.div>
      <motion.div
        initial={{ y: 400 }}
        animate={{ y: 0 }}
        exit={{ y: 400 }}
        layout
        className="h-max grid grid-cols-2 pb-10 text-[3rem] uppercase bg-slate-800 p-10 gap-5 place-content-center"
      >
        <button className="p-5 h-max bg-white text-black uppercase rounded-full">
          Mulai
        </button>
        <div className="flex flex-col justify-center">
          <h2 className="leading-[2.5rem]">Rizqy Prastya Ari Nugroho</h2>
          <h2 className="text-[2rem]">01817147194</h2>
        </div>
      </motion.div>
    </Container>
    // {/* </AnimatePresence> */}
  )
}
