import { useState } from "react";
import { useEffect } from "react";

const text = [
  "Hello! I'm David Vu", 
  "I'm a Developer", 
  "I'm a Footballer", 
  "Nice to meet you!", 
]

export function Home() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => {
        if(prev >= text.length-1) {
          return 0
        } else {
          return prev+1
        }
      })
    }, 3000); 
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="text-color md:flex ms:items-center ms:justify-between md:justify-center md:gap-x-10 lg:my-24">
      {/* Flexbox (Desktop) - Left Item */}
      <div className="md:max-w-sm lg:max-w-lg">
        <h1 className="text-4xl lg:text-5xl relative overflow-hidden hello-text-at-home-page">{text[index]}</h1>
        <h2 className="text-xl lg:text-xl mb-1 mt-4 tracking-wide">
          A Bit About Me
        </h2>
        <p className="tracking-widest leading-6">
          I'm a passionate software developer specializing in creating dynamic
          and responsive web applications. Explore my portfolio to see how I
          turn ideas into impactful digital experiences.
        </p>
        <div className="mt-4 lg:mt-6 flex items-center justify-between md:justify-start gap-x-2 lg:gap-x-4">
          <button className="w-28 min-[540px]:w-40 sm:w-48 md:w-28 lg:w-40 h-28 min-[540px]:h-40 sm:h-48 md:h-28 lg:h-40 rounded-full border-gray-300 border-4 font-extrabold hover:bg-gray-300 hover:text-gray-900 transition-all duration-300">
            Resume
          </button>
          <button className="w-28 min-[540px]:w-40 sm:w-48 md:w-28 lg:w-40 h-28 min-[540px]:h-40 sm:h-48 md:h-28 lg:h-40 rounded-full border-gray-300 border-4 font-extrabold hover:bg-gray-300 hover:text-gray-900 transition-all duration-300">
            Projects
          </button>
          <button className="w-28 min-[540px]:w-40 sm:w-48 md:w-28 lg:w-40 h-28 min-[540px]:h-40 sm:h-48 md:h-28 lg:h-40 rounded-full border-gray-300 border-4 font-extrabold hover:bg-gray-300 hover:text-gray-900 transition-all duration-300">
            Contact
          </button>
        </div>
      </div>
      {/* Flexbox (Desktop) - Right Item */}
      <div className="w-80 h-80 rounded-full mt-10 mx-auto md:mx-0">
        <img
          className="w-80 h-80 rounded-full"
          src="./images/IMG_5010.jpeg"
          alt=""
          srcSet=""
        />
      </div>
    </section>
  )
}