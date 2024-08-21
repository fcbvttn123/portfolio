import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import { useState } from "react"

const steps = [
  {
    label: "Technical Analyst",
    imageName: "first-intern-job-icon.png",
    description: `For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Support Technologist",
    imageName: "sheridan.jpeg",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "React Developer",
    imageName: "sksq.jpeg",
    description: `Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues.`,
  },
]

function StepLabelIcon(imageName) {
  return (
    <div className="w-8 aspect-square rounded-full">
      <img
        src={`./images/${imageName}`}
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  )
}

export function StepperComponent() {
  const [activeStep, setActiveStep] = useState(0)
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        sx={{
          "& .Mui-disabled": {
            color: "rgba(209, 213, 219, .4)",
            cursor: "pointer",
          },
          "& .MuiStepLabel-label.Mui-completed": {
            color: "rgba(209, 213, 219, .4)",
          },
          "& .MuiStepLabel-label.Mui-active": {
            color: "rgba(209, 213, 219, 1)",
          },
          "& .MuiStepConnector-line": {
            minHeight: "60px",
          },
        }}
      >
        {steps.map((step, index) => (
          <Step>
            <button className="ml-[-3px]" onClick={(e) => setActiveStep(index)}>
              <StepLabel
                StepIconComponent={() => StepLabelIcon(step.imageName)}
              >
                {step.label}
              </StepLabel>
            </button>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}
