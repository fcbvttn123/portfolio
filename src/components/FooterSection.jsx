import { CiLinkedin } from "react-icons/ci"
import { FaGithub } from "react-icons/fa"

export function FooterSection() {
  return (
    <footer className="text-color py-4 -mx-4 px-4 border-t-2 border-gray-300 md:flex md:items-center md:justify-between">
      <div>
        <h1 className="font-bold text-xl mb-1">Phone</h1>
        <a href="tel:+14372136600">437-213-6600</a>
      </div>
      <div className="my-4 md:my-0">
        <h1 className="font-bold text-xl mb-1">Email</h1>
        <a href="mailto:vutran@sheridancollege.ca">fcbvttn@gmail.com</a>
      </div>
      <div>
        <h1 className="font-bold text-xl mb-1">Follow me</h1>
        <div className="flex items-center justify-start gap-x-2">
          <a href="https://www.linkedin.com/in/davidvttn/" target="_blank">
            <CiLinkedin size={30} />
          </a>
          <a href="https://github.com/fcbvttn123" target="_blank">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </footer>
  )
}
