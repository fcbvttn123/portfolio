import { useState } from "react"
import { StepperComponent } from "../components/StepperComponent"
import { CarouselComponent } from "../components/CarouselComponent"
import { workExperiencesV2 } from "../data/work-experiences.jsx"

export function WorkExperiences() {
  const [activeStep, setActiveStep] = useState(0)
  return (
    <div className="flex justify-between items-start gap-x-32">
      <StepperComponent
        steps={workExperiencesV2}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      <div className="flex-1">
        <CarouselComponent
          steps={workExperiencesV2}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </div>
    </div>
  )
}
