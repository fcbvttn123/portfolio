import { Box, Button, MobileStepper, Paper, Typography } from "@mui/material"
import { autoPlay } from "react-swipeable-views-utils"
import SwipeableViews from "react-swipeable-views"
import { useState } from "react"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

export function CarouselComponent({ steps, activeStep, setActiveStep }) {
  // const [activeStep, setActiveStep] = useState(0)
  return (
    <Box className="text-color">
      <MobileStepper
        variant="dots"
        steps={steps.length}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={(e) =>
              activeStep == steps.length - 1
                ? setActiveStep(0)
                : setActiveStep((prev) => prev + 1)
            }
          >
            Next
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={(e) => setActiveStep((prev) => prev - 1)}
            disabled={activeStep === 0}
          >
            Back
          </Button>
        }
      />
      <AutoPlaySwipeableViews
        axis="x"
        index={activeStep}
        onChangeIndex={(step) => setActiveStep(step)}
        enableMouseEvents
      >
        {steps.map((step, index) => step.content)}
      </AutoPlaySwipeableViews>
    </Box>
  )
}
