import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "~/component/button";
import { Container } from "../component/container";

const getRandom = () => Math.floor(Math.random() * 16777215).toString(16);
export default function () {
  const [color, setColor] = React.useState("red");
  return (
    <Container>
      <p>Test</p>
      <Link to="/" className="w-max">
        <Button className="bg-white w-max px-5 rounded-full">Home</Button>
      </Link>
      <div>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={"500"}
          height={300}
          fill={"red"}
        >
          <motion.path
            onClick={() => setColor(`#${getRandom()}`)}
            d="M 0 8 l 150 0"
            strokeWidth="12"
            stroke={color}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1,
              ease: "anticipate",
            }}
          ></motion.path>
        </motion.svg>
      </div>
    </Container>
  );
}
