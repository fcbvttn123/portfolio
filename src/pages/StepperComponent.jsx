import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import { useState } from "react"
import { StepContent, Typography } from "@mui/material"

const steps = [
  {
    label: "Technical Analyst - Intern",
    imageName: "first-intern-job-icon.png",
    company: "Ministry of Transportation",
    period: "01/23 - 05/23",
  },
  {
    label: "Support Technologist - Intern",
    imageName: "sheridan.jpeg",
    company: "Sheridan College",
    period: "09/23 - 05/24",
  },
  {
    label: "React Developer - Intern",
    imageName: "sksq.jpeg",
    company: "SkillSquirrel",
    period: "05/24 - 09/24",
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
          "& .css-14yr603-MuiStepContent-root": {
            marginLeft: "15px",
            paddingLeft: "35px",
          },
          "& .MuiStepContent-last ul": {
            paddingLeft: "30px",
          },
          "& .css-9l5vo-MuiCollapse-wrapperInner": {
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            color: "rgb(209, 213, 219)",
          },
        }}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <button className="ml-[-3px]" onClick={(e) => setActiveStep(index)}>
              <StepLabel
                StepIconComponent={() => StepLabelIcon(step.imageName)}
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <ul className="pl-3">
                  <li>{step?.company && step.company}</li>
                  <li>{step?.period && step.period}</li>
                </ul>
              </StepContent>
            </button>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}
