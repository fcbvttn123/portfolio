import { Button, MobileStepper } from "@mui/material"
import { useState, useEffect } from "react"

export function SliderAutoplay({
  steps,
  activeStep,
  setActiveStep,
  secondsSlideStaying,
}) {
  const [arr, setArr] = useState(steps)
  const lastIndex = arr.length - 1
  useEffect(() => {
    activeStep < 0 && setActiveStep(lastIndex)
    activeStep > lastIndex && setActiveStep(0)
    let slider = setInterval(() => {
      setActiveStep(activeStep + 1)
    }, secondsSlideStaying * 1000)
    return () => clearInterval(slider)
  }, [activeStep])
  return (
    <section className="w-full h-[550px] sm:h-[470px] md:h-[450px] lg:h-[320px] relative flex flex-col overflow-hidden circleAnimation appearSecond">
      <div className="lg:hidden">
        <MobileStepper
          variant="dots"
          steps={arr.length}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={(e) =>
                activeStep == arr.length - 1
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
              onClick={(e) =>
                activeStep == 0
                  ? setActiveStep(lastIndex)
                  : setActiveStep((prev) => prev - 1)
              }
            >
              Back
            </Button>
          }
        />
      </div>
      {arr.map((item, indexNumber) => {
        let position = "nextSlide"
        if (indexNumber === activeStep) {
          position = "activeSlide"
        }
        if (
          indexNumber === activeStep - 1 ||
          (activeStep === 0 && indexNumber === arr.length - 1)
        ) {
          position = "lastSlide"
        }
        return (
          <article
            key={indexNumber}
            className={`${position} slide absolute top-10 lg:top-0 left-0 w-full h-full opacity-0 transition-all duration-300 ease-linear`}
          >
            {item.content}
          </article>
        )
      })}
    </section>
  )
}
