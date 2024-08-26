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
    <section className="w-full h-[350px] relative flex overflow-hidden">
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
            className={`${position} slide absolute top-0 left-0 w-full h-full opacity-0 transition-all duration-300 ease-linear`}
          >
            {item.content}
          </article>
        )
      })}
    </section>
  )
}
