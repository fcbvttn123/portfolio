import { useState } from "react"
import { StepperComponent } from "../components/StepperComponent"
import { workExperiences } from "../data/work-experiences"

export function StepperPage() {
  const [activeStep, setActiveStep] = useState(0)
  return (
    <StepperComponent
      steps={workExperiences}
      activeStep={activeStep}
      setActiveStep={setActiveStep}
    />
  )
}
