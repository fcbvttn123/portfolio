import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import { StepContent } from "@mui/material"

export function StepLabelIcon(imageName, stepLabelRounded) {
  return (
    <div className={`w-8 aspect-square ${stepLabelRounded && "rounded-full"}`}>
      <img
        src={`./images/${imageName}`}
        className={`w-full h-full object-cover ${
          stepLabelRounded && "rounded-full"
        }`}
      />
    </div>
  )
}

export function StepperComponent({
  steps,
  activeStep,
  setActiveStep,
  showStepContent,
  stepLabelRounded,
  orientation,
}) {
  return (
    <Box
      sx={orientation == "horizontal" ? { width: "100%" } : { maxWidth: 400 }}
    >
      <Stepper
        activeStep={activeStep}
        orientation={orientation ? orientation : "vertical"}
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
            minHeight: orientation == "horizontal" ? 0 : "60px",
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
                StepIconComponent={() =>
                  StepLabelIcon(step.imageName, stepLabelRounded)
                }
              >
                {step.label == "Programming Languages" &&
                orientation == "horizontal"
                  ? "Languages"
                  : step.label}
              </StepLabel>
              {showStepContent && (
                <StepContent>
                  <ul className="pl-3">
                    <li>{step?.company && step.company}</li>
                    <li>{step?.period && step.period}</li>
                  </ul>
                </StepContent>
              )}
            </button>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}
