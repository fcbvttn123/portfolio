import { FaGithub } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { FaNodeJs } from "react-icons/fa"
import { DiMongodb } from "react-icons/di"
import { DiMysql } from "react-icons/di"

export function Card() {
  return (
    <div>
      <div className="card-container">
        <button
          data-text="Project Details"
          style={{ "--r": "-15" }}
          className="card-glass tech-stack"
          onClick={(e) => console.log("Project Details")}
        >
          <FaReact className="text-2xl text-color" />
          <FaNodeJs className="text-2xl text-color" />
          <DiMongodb className="text-2xl text-color" />
          <DiMysql className="text-2xl text-color" />
          <FaReact className="text-2xl text-color" />
          <FaNodeJs className="text-2xl text-color" />
          <DiMongodb className="text-2xl text-color" />
          <DiMysql className="text-2xl text-color" />
          <FaReact className="text-2xl text-color" />
          <FaNodeJs className="text-2xl text-color" />
          <DiMongodb className="text-2xl text-color" />
          <DiMysql className="text-2xl text-color" />
          <FaReact className="text-2xl text-color" />
          <FaNodeJs className="text-2xl text-color" />
          <DiMongodb className="text-2xl text-color" />
          <DiMysql className="text-2xl text-color" />
        </button>
        <button
          data-text="GitHub"
          style={{ "--r": "5" }}
          className="card-glass flex items-center justify-center"
          onClick={(e) => console.log("GitHub")}
        >
          <FaGithub className="text-3xl" />
        </button>
        <button
          data-text="Demo"
          style={{ "--r": "25" }}
          className="card-glass flex items-center justify-center"
          onClick={(e) => console.log("Demo")}
        ></button>
      </div>
      <div className="text-color mt-8 flex items-center justify-center gap-2">
        Project Name
      </div>
    </div>
  )
}
