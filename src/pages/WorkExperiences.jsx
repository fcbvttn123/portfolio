import { useState } from "react";
import { WORK_EXPERIENCES } from "../constants";
import { isLastElement } from "../utils";
import { Card } from "../components/Card";
import { AnimatePresence, motion } from "motion/react";

const MotionCard = motion.create(Card);

export function WorkExperiences() {
  const [isFocused, setIsFocused] = useState(WORK_EXPERIENCES[0].id);
  return (
    <section className="h-full flex flex-col md:flex-row md:items-center gap-10">
      {/* section 1 */}
      <motion.div
        className="md:flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
        }}
      >
        {WORK_EXPERIENCES.map((work, index) => (
          // work card
          <div
            key={work.id}
            className={`mt-2 p-2 w-full  xl:w-[350px] overflow-hidden group cursor-pointer duration-300 rounded-lg hover:bg-foreground/10 ${
              isFocused === work.id
                ? "text-foreground/100"
                : "text-foreground/50"
            }`}
            onClick={(e) => setIsFocused(work.id)}
          >
            {/* image, role, position type */}
            <div className="flex items-center gap-x-2">
              <img
                className="w-10 aspect-square rounded-full"
                srcSet={`/images/${work.logo}`}
              />
              <p>{work.role}</p>
              <p className="block md:hidden lg:block"> - {work.positionType}</p>
            </div>
            {/* the vertical line, company name, period */}
            <div
              className="border-l-2 ml-5 mt-2 pl-4 overflow-hidden duration-300 h-7 flex flex-col justify-center gap-y-2 w-full"
              style={{
                border: isLastElement(WORK_EXPERIENCES, index) && "none",
                height: isFocused === work.id && "60px",
              }}
            >
              <div
                className="hidden items-center text-sm"
                style={{ display: isFocused === work.id && "flex" }}
              >
                <span className="inline-block mr-2 w-1 aspect-square rounded-full bg-foreground"></span>
                <p>{work.company}</p>
              </div>
              <div
                className="hidden items-center text-sm"
                style={{ display: isFocused === work.id && "flex" }}
              >
                <span className="inline-block mr-2 w-1 aspect-square rounded-full bg-foreground"></span>
                <p>{work.period}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      {/* section 2 */}
      <div className="md:flex-[2] lg:flex-[1.5] xl:flex-[2] h-[400px] relative">
        <AnimatePresence mode="wait">
          {WORK_EXPERIENCES.map((work) => {
            if (work.id === isFocused) {
              return (
                <MotionCard
                  key={work.id}
                  className="w-full h-full absolute inset-0"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                >
                  <ul>
                    {work.whatYouDid.map((e) => (
                      <li key={e} className="mt-[30px]">
                        {e}
                      </li>
                    ))}
                  </ul>
                </MotionCard>
              );
            }
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
