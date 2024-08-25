import { useState } from "react"
import { StepperComponent } from "../components/StepperComponent"
import { CarouselComponent } from "../components/CarouselComponent"
import { workExperiences } from "../data/work-experiences.jsx"

export function WorkExperiences() {
  const [activeStep, setActiveStep] = useState(0)
  return (
    <div className="flex justify-between items-start gap-x-32">
      <div className="hidden lg:block">
        <StepperComponent
          steps={workExperiences}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </div>
      <div className="flex-1">
        <CarouselComponent
          steps={workExperiences}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </div>
    </div>
  )
}
