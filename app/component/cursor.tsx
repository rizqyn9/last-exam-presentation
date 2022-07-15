import { motion } from "framer-motion"
import React, { useEffect } from "react"
import useMouse from "@react-hook/mouse-position"

export default function Cursor() {
  const [pos, setPos] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 })

  React.useEffect(() => {
    if (!document.body) return

    const moveCursor = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })

    document.body.addEventListener("mousemove", moveCursor)

    return () => {
      document.body.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  return (
    <>
      <motion.div
        animate={{
          x: pos.x - 32,
          y: pos.y - 32,
        }}
        style={{ mixBlendMode: "difference" }}
        className="rounded-full w-16 h-16 border border-white absolute pointer-events-none"
      />
      <motion.div
        style={{
          x: pos.x - 6,
          y: pos.y - 6,
          mixBlendMode: "difference",
        }}
        className="pointer-events-none w-3 h-3 absolute rounded-full"
        animate={{}}
      />
    </>
  )
}
