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
        "Java",
        "C#",
        "C++",
        "TypeScript",
        "Git",
        "REST APIs",
        "GraphQL",
        "Agile Development",
        "CI/CD"
    ]
    return (
        <section id="skills" className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 flex justify-center">
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