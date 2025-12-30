import { workExperiences } from "../constants";
import { isLastElement } from "../utils";

export function WorkExperiences() {
  return (
    <section className="h-full text-foreground flex items-center gap-x-20">
      {/* Work Info */}
      <div className="flex-1">
        {workExperiences.map((work, index) => (
          <div key={work.id} className="mt-4 overflow-hidden group">
            <div className="flex items-center gap-x-2">
              <img
                className="w-10 aspect-square rounded-full"
                srcSet={`/images/${work.logo}`}
              />
              <p>{work.role}</p>
            </div>
            <div
              className="border-l-2 ml-5 mt-2 pl-4 overflow-hidden duration-300 h-7 group-hover:h-[60px] flex flex-col justify-center gap-y-2 w-full"
              style={{
                border: isLastElement(workExperiences, index) && "none",
              }}
            >
              <div className="hidden group-hover:flex items-center">
                <span className="inline-block mr-2 w-1 aspect-square rounded-full bg-foreground"></span>
                <p>{work.company}</p>
              </div>
              <div className="hidden group-hover:flex items-center">
                <span className="inline-block mr-2 w-1 aspect-square rounded-full bg-foreground"></span>
                <p>{work.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Work Description */}
      <div className="flex-[2] bg-gray-600 h-[300px]"></div>
    </section>
  );
}

// import { useEffect, useState } from "react"
// import { StepperComponent } from "../components/StepperComponent"
// import {
//   workExperiences,
//   workExperiencesMobileDesign,
// } from "../data/work-experiences.jsx"
// import { SliderAutoplay } from "../components/SliderAutoplay.jsx"

// export function WorkExperiences() {
//   const [activeStep, setActiveStep] = useState(0)
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth)
//   useEffect(() => {
//     function handleResize() {
//       setWindowWidth(window.innerWidth)
//     }
//     window.addEventListener("resize", handleResize)
//   }, [])
//   return (
//     <div className="flex justify-between items-start gap-x-32">
//       <div className="hidden lg:block">
//         <StepperComponent
//           steps={workExperiences}
//           activeStep={activeStep}
//           setActiveStep={setActiveStep}
//           stepLabelRounded={true}
//           showStepContent={true}
//         />
//       </div>
//       <div className="flex-1">
//         <SliderAutoplay
//           steps={
//             windowWidth <= 1024 ? workExperiencesMobileDesign : workExperiences
//           }
//           activeStep={activeStep}
//           setActiveStep={setActiveStep}
//           secondsSlideStaying={4}
//         />
//       </div>
//     </div>
//   )
// }
