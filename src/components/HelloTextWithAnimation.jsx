import { useEffect, useState } from "react";

const textArray = [
  "I'm a Software Developer",
  "I'm a Network Engineer",
  "I'm a System Administrator",
];

export function HelloTextWithAnimation() {
  const [index, setIndex] = useState(0);
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
    <h1 className="text-4xl lg:text-5xl relative overflow-hidden hello-text-at-home-page circleAnimation">
      {textArray[index]}
    </h1>
  );
}
