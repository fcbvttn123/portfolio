import { useEffect, useState } from "react"

const textArray = [
  "Hello! I'm David Vu",
  "I'm a Web Developer",
  "I'm a Footballer",
  "Nice to meet you!",
]

export function HelloTextWithAnimation() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev >= textArray.length - 1) {
          return 0
        } else {
          return prev + 1
        }
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  return (
    <h1 className="text-4xl lg:text-5xl relative overflow-hidden hello-text-at-home-page">
      {textArray[index]}
    </h1>
  )
}
