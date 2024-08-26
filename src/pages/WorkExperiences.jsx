import { useState } from "react"
import { StepperComponent } from "../components/StepperComponent"
import { workExperiences } from "../data/work-experiences.jsx"
import { SliderAutoplay } from "../components/SliderAutoplay.jsx"

export function WorkExperiences() {
  const [activeStep, setActiveStep] = useState(0)
  return (
    <div className="flex justify-between items-start gap-x-32">
      <div className="hidden lg:block">
        <StepperComponent
          steps={workExperiences}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          stepLabelRounded={true}
        />
      </div>
      <div className="flex-1">
        <SliderAutoplay
          steps={workExperiences}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          secondsSlideStaying={4}
        />
      </div>
    </div>
  )
}
