import { Container } from "~/component/container"
import clsx from "clsx"
import React from "react"
import { motion } from "framer-motion"

export default function () {
  const [activeIndex, setActiveIndex] = React.useState<number>(0)
  return (
    <Container>
      <div className="divider text-6xl pt-10 font-extrabold h-full flex flex-col">
        <h1 className="uppercase">Latar Belakang</h1>

        <div className="flex pt-10">
          {LIST_TREE.map((val, i) => (
            <NodeContainer
              {...val}
              key={i}
              setActive={setActiveIndex}
              isActive={i == activeIndex}
              index={i}
            />
          ))}
        </div>
        <div className="bg-slate-700 p-4 my-5 rounded-xl flex-1">
          <motion.div layout>{LIST_TREE[activeIndex].component}</motion.div>
        </div>
      </div>
    </Container>
  )
}

type NodeContainerProps = {
  setActive: (treeActive: number) => void
  isActive?: boolean
  title: string
  index: number
}

const NodeContainer = (props: NodeContainerProps) => {
  return (
    <div
      className="relative text-sm w-[10rem] border-t-2 last:border-none"
      onClick={() => props.setActive(props.index)}
    >
      <Node isActive={props.isActive} />
      <div className="-translate-x-[40%] flex items-center justify-center h-max pt-5 w-full">
        <p className="w-full text-center px-2">{props.title}</p>
      </div>
    </div>
  )
}

const Node = (
  props: Omit<NodeContainerProps, "title" | "setActive" | "index">
) => (
  <div
    className={clsx(
      "w-5 h-5 bg-white rounded-full absolute top-0 left-0 -translate-y-[50%]",
      {
        "!bg-red-500 border-white border-2": props.isActive,
      }
    )}
  />
)

type ListTreeProps = Omit<
  NodeContainerProps,
  "setActive" | "isActive" | "index"
> & { component: React.ReactNode }

const LIST_TREE: ListTreeProps[] = [
  {
    title: "Title 1",
    component: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        asdasd
      </motion.div>
    ),
  },
  {
    title: "Title 2",
    component: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        Title2
      </motion.div>
    ),
  },
  {
    title: "Title 3",
    component: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        Title 3
      </motion.div>
    ),
  },
]
