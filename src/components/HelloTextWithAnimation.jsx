import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useWindowSize } from "../utils/index";

const textArray = [
  "Software Developer",
  "Network Engineer",
  "System Administrator",
];

export function HelloTextWithAnimation() {
  const [index, setIndex] = useState(0);
  const { width } = useWindowSize();
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev >= textArray.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: 1,
        y: 10,
      }}
      transition={{
        duration: 1,
      }}
      className="hello-text-at-home-page flex gap-x-2 lg:gap-x-4 text-3xl sm:text-4xl md:text-3xl lg:text-5xl pl-2"
    >
      <span>I'm a</span>
      <h1 className="relative overflow-hidden flex-1 whitespace-nowrap">
        {textArray[index]}
        <motion.div
          className={`absolute inset-0 border-l-2 bg-background ${
            width < 420 && "hidden"
          }`}
          animate={{
            x: [0, "100%", 0],
          }}
          transition={{ duration: 3, ease: "easeOut", repeat: Infinity }}
        ></motion.div>
      </h1>
    </motion.div>
  );
}
