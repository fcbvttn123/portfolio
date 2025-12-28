import { Link } from "react-router-dom";
import { HelloTextWithAnimation } from "../components/HelloTextWithAnimation";
import { motion } from "motion/react";

export function Home() {
  return (
    <section className="text-color md:flex ms:items-center ms:justify-between md:justify-center md:gap-x-10 xl:px-[150px]">
      {/* Flexbox (Desktop) - Left Item */}
      <div className="flex-1 flex-grow-[2]">
        <motion.p
          className="tracking-widest leading-6"
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
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
        <motion.h2
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="text-xl lg:text-xl mb-1 mt-10 tracking-wide fancy-text-style"
        >
          A Bit About Me
        </motion.h2>
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="tracking-widest leading-6"
        >
          I'm a full stack developer specializing in creating dynamic and
          responsive web applications. Explore my portfolio to see how I turn
          ideas into impactful digital experiences.
        </motion.p>
        <motion.div
          className="lg:mt-6 flex items-center justify-between md:justify-start gap-x-2 lg:gap-x-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <NavigationCircle
            path="/experiences"
            text="Experiences"
            appearOrder={2}
          />
          <NavigationCircle path="/projects" text="Projects" />
          <NavigationCircle path="/contact" text="Contact" />
        </motion.div>
      </div>
      {/* Flexbox (Desktop) - Right Item */}
      <motion.div
        initial={{
          opacity: 0,
          x: 30,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="flex-1 flex items-center justify-center xl:justify-end mt-10 xl:mt-0 circleAnimation"
      >
        <img className="w-80 h-80 rounded-full" src="./images/IMG_5010.jpeg" />
      </motion.div>
    </section>
  );
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function NavigationCircle({ path, text }) {
  return (
    <Link to={path}>
      <motion.button
        variants={itemVariants}
        className="w-28 min-[540px]:w-40 sm:w-48 md:w-28 lg:w-40 h-28 min-[540px]:h-40 sm:h-48 md:h-28 lg:h-40 rounded-full border-gray-300 border-4 font-extrabold hover:bg-gray-300 hover:text-gray-900 transition-all duration-300"
      >
        {text}
      </motion.button>
    </Link>
  );
}
