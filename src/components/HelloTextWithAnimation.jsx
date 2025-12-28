import { useEffect, useState } from "react";
import { motion } from "motion/react";

const textArray = [
  "Software Developer",
  "Network Engineer",
  "System Administrator",
];

export function HelloTextWithAnimation() {
  const [index, setIndex] = useState(2);
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
    <div className="hello-text-at-home-page flex gap-x-2 lg:gap-x-4 text-3xl sm:text-4xl lg:text-5xl pl-2">
      <span>I'm a</span>
      <h1 className="relative overflow-hidden flex-1">
        {textArray[index]}
        <motion.div
          className="absolute inset-0 border-l-2 bg-background"
          animate={{
            x: [0, "100%", 0],
          }}
          transition={{ duration: 3, ease: "easeOut", repeat: Infinity }}
        ></motion.div>
      </h1>
    </div>
  );
}
