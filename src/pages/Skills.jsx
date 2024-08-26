import { useState } from "react"
import { StepperComponent } from "../components/StepperComponent"
import { skills } from "../data/skills"

export function Skills() {
  const [activeStep, setActiveStep] = useState(0)
  return (
    <section className="text-color">
      <StepperComponent
        steps={skills}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        showStepContent={false}
        stepLabelRounded={false}
      />
      {/* {skills.map((topic, index) => (
        <div key={index} className="row-span-full mb-8">
          <h1 className="text-xl mb-4">{topic.topic}</h1>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {topic.list.map((item) => (
              <div
                key={item.text}
                className="skill-card-glass"
                data-text={item.text}
              >
                <img
                  className="w-[60%] h-[60%] mt-5 rounded-full"
                  src={`./images/${item.imageName}`}
                />
              </div>
            ))}
          </div>
        </div>
      ))} */}
    </section>
  )
}
