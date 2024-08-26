import { useState } from "react"
import { StepperComponent } from "../components/StepperComponent"
import { skills } from "../data/skills"

export function Skills() {
  const [activeStep, setActiveStep] = useState(0)
  return (
    <section className="text-color flex justify-between items-start gap-x-24">
      <StepperComponent
        steps={skills}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        showStepContent={false}
        stepLabelRounded={false}
      />
      <div className="grid grid-cols-4 gap-4 flex-1">
        {skills[activeStep].list.map((item, index) => (
          <div
            key={item.text}
            className="skill-card-glass"
            data-text={item.text}
          >
            <img
              className="w-[50%] h-[50%] mt-5 rounded-full"
              src={`./images/${item.imageName}`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
