import { useEffect, useState } from "react"
import { StepperComponent } from "../components/StepperComponent"
import { skills } from "../data/skills"

export function Skills() {
  const [activeStep, setActiveStep] = useState(0)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
  }, [])
  return (
    <section className="text-color flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-x-2 gap-y-6">
      <StepperComponent
        steps={skills}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        showStepContent={false}
        stepLabelRounded={false}
        orientation={windowWidth >= 768 ? "vertical" : "horizontal"}
      />
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 circleAnimation appearSecond">
        {skills[activeStep].list.map((item, index) => (
          <div
            key={item.text}
            className="skill-card-glass w-full max-w-48 aspect-square"
            data-text={item.text}
          >
            <img
              className="w-[50%] h-[50%] mt-2 md:mt-2 lg:mt-6 rounded-full"
              src={`./images/${item.imageName}`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
