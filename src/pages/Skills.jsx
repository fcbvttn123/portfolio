import { skills } from "../data/skills"

export function Skills() {
  return (
    <section className="text-color mx-auto max-w-4xl grid justify-items-center grid-cols-2 md:grid-cols-4 gap-4">
      {skills.map((e) => (
        <div key={e.text} className="skill-card-glass" data-text={e.text}>
          <img
            className="w-[60%] h-[60%] mt-5 rounded-full"
            src={`./images/${e.imageName}`}
          />
        </div>
      ))}
    </section>
  )
}
