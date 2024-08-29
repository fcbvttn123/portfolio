import { useEffect, useState } from "react"
import { StepperComponent } from "../components/StepperComponent"
import {
  workExperiences,
  workExperiencesMobileDesign,
} from "../data/work-experiences.jsx"
import { SliderAutoplay } from "../components/SliderAutoplay.jsx"

export function WorkExperiences() {
  const [activeStep, setActiveStep] = useState(0)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
  }, [])
  return (
    <div className="flex justify-between items-start gap-x-32">
      <div className="hidden lg:block">
        <StepperComponent
          steps={workExperiences}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          stepLabelRounded={true}
          showStepContent={true}
        />
      </div>
      <div className="flex-1">
        <SliderAutoplay
          steps={
            windowWidth <= 1024 ? workExperiencesMobileDesign : workExperiences
          }
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          secondsSlideStaying={4}
        />
      </div>
    </div>
  )
}
