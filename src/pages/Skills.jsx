import { useState } from "react"
import { StepperComponent } from "../components/StepperComponent"
import { skills } from "../data/skills"

export function Skills() {
  const [activeStep, setActiveStep] = useState(0)
  return (
    <section className="text-color flex justify-center lg:justify-between items-start gap-x-24">
      <div className="hidden md:block">
        <StepperComponent
          steps={skills}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          showStepContent={false}
          stepLabelRounded={false}
        />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
        {skills[activeStep].list.map((item, index) => (
          <div
            key={item.text}
            className="skill-card-glass w-28 max-w-48 lg:w-full aspect-square"
            data-text={item.text}
          >
            <img
              className="w-[50%] h-[50%] mt-2 md:mt-4 xl:mt-6 rounded-full"
              src={`./images/${item.imageName}`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
