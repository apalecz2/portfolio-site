import React from "react"
import Tag from "./Tag"

const Skills: React.FC = () => {
  const skills = [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "SQL",
    "HTML",
    "CSS",
    "Git",
    "REST APIs",
    "Agile Development"
  ]
  return (
    <section id="skills" className="px-40 flex justify-center">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <h2 className="text-[var(--color-text)] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Skills</h2>
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          {skills.map((skill) => (
            <Tag key={skill} label={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills


