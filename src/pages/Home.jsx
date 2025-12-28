import { Link } from "react-router-dom";
import { HelloTextWithAnimation } from "../components/HelloTextWithAnimation";
import { motion } from "motion/react";

function NavigationCircle({ path, text, appearOrder }) {
  return (
    <Link to={path}>
      <button
        className={`w-28 min-[540px]:w-40 sm:w-48 md:w-28 lg:w-40 h-28 min-[540px]:h-40 sm:h-48 md:h-28 lg:h-40 rounded-full border-gray-300 border-4 font-extrabold hover:bg-gray-300 hover:text-gray-900 transition-all duration-300 circleAnimation ${
          appearOrder == 4
            ? "appearForth"
            : appearOrder == 2
            ? "appearSecond"
            : "appearThird"
        }`}
      >
        {text}
      </button>
    </Link>
  );
}

export function Home() {
  return (
    <section className="text-color md:flex ms:items-center ms:justify-between md:justify-center md:gap-x-10 xl:px-[150px]">
      {/* Flexbox (Desktop) - Left Item */}
      <div className="flex-1 flex-grow-[2]">
        <motion.p
          className="tracking-widest leading-6 mb-4"
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 10,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          Hello, I'm David
          <motion.span
            className="origin-center inline-block"
            animate={{
              rotate: [0, 45, -45, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            👋
          </motion.span>
        </motion.p>
        <HelloTextWithAnimation />
        <h2 className="text-xl lg:text-xl mb-1 mt-4 tracking-wide fancy-text-style circleAnimation">
          A Bit About Me
        </h2>
        <p className="tracking-widest leading-6 circleAnimation">
          I'm a full stack developer specializing in creating dynamic and
          responsive web applications. Explore my portfolio to see how I turn
          ideas into impactful digital experiences.
        </p>
        <div className="mt-4 lg:mt-6 flex items-center justify-between md:justify-start gap-x-2 lg:gap-x-4">
          <NavigationCircle
            path="/experiences"
            text="Experiences"
            appearOrder={2}
          />
          <NavigationCircle path="/projects" text="Projects" appearOrder={3} />
          <NavigationCircle path="/contact" text="Contact" appearOrder={4} />
        </div>
      </div>
      {/* Flexbox (Desktop) - Right Item */}
      <div className="flex-1 flex items-center justify-center xl:justify-end mt-10 xl:mt-0 circleAnimation">
        <img
          className="w-80 h-80 rounded-full"
          src="./images/IMG_5010.jpeg"
          alt=""
          srcSet=""
        />
      </div>
    </section>
  );
}
