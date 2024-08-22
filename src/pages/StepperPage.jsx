import { useState } from "react"
import { StepperComponent } from "../components/StepperComponent"
import { workExperiences } from "../data/work-experiences"
import { MacScreen } from "../components/MacScreen"
import { CarouselComponent } from "../components/CarouselComponent"

export function StepperPage() {
  const [activeStep, setActiveStep] = useState(0)
  return (
    <div className="flex justify-between items-stretch gap-x-32">
      <StepperComponent
        steps={workExperiences}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      <div className="flex-1">
        <CarouselComponent />
      </div>
      {/* <MacScreen className="flex-1">
        <p className="mb-4">Company: SkillSquirrel</p>
        <p className="mb-4">Period: 05/2024 - 09/2024</p>
        <p className="mb-4">What I've done:</p>
        <ul>
          <li>
            Using React and Material UI for developing website interfaces.
          </li>
          <li>
            Using Jira and Github to create branches and make pull/push
            requests.
          </li>
          <li>Working with various APIs and third-party tools.</li>
          <li>Applying plain JavaScript for website keyboard navigation.</li>
        </ul>
      </MacScreen> */}
    </div>
  )
}
