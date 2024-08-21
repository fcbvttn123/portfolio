import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import { useState } from "react"

const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues.`,
  },
]

export function StepperComponent() {
  const [activeStep, setActiveStep] = useState(0)
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <button onClick={(e) => setActiveStep(index)}>
              <StepLabel
                sx={{
                  "& .Mui-disabled": {
                    color: "rgba(209, 213, 219, .4)",
                    cursor: "pointer",
                  },
                  "& .Mui-completed": {
                    color: "rgba(209, 213, 219, .4)",
                    cursor: "pointer",
                  },
                  "& .Mui-active": {
                    color: "rgba(209, 213, 219, 1)",
                    cursor: "pointer",
                  },
                }}
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
