import { useState } from "react"
import SectionHeading from "./SectionHeading"
import ProjectCard from "./ProjectCard"
import type { ProjectProps } from "./ProjectCard"
import ProjectModal from "./ProjectModal"

const Projects: React.FC = () => {
    const allProjects: ProjectProps[] = [
        {
            title: "RouteRadar",
            description: "An interactive web application for tracking the live positions and arrival times of London Transit buses.",
            image: "/RouteRadar.png",
            tags: ["React", "Node.js", "GraphQL", "Google Maps API", "TailwindCSS"],
            link: "https://transit.aidenpaleczny.com",
        },
        {
            title: "TradeWise",
            description: "A web application that provides company performance analysis tools, to help users make informed trading decisions.",
            image: "/TradeWise.png",
            tags: ["Python", "PostgreSQL", "React", "TailwindCSS"],
            link: "https://trade.aidenpaleczny.com",
        },
        /* Placeholder items
        {
            title: "TaskMaster",
            description: "A real-time task management app with drag-and-drop interface.",
            image: "/TaskMaster.png",
            tags: ["Vue.js", "Firebase", "TypeScript", "CSS"],
            link: "#",
        },
        {
            title: "CodeShare",
            description: "A real-time collaborative code editor for remote teams.",
            image: "/CodeShare.png",
            tags: ["Socket.io", "Express", "MongoDB", "Redux"],
            link: "#",
        },
        {
            title: "DataViz",
            description: "An analytics dashboard for visualizing complex datasets using D3.js.",
            image: "/DataViz.png",
            tags: ["D3.js", "React", "SASS"],
            link: "#",
        },
        */
    ]

    const [showAll, setShowAll] = useState(false)
    const visibleProjects = showAll ? allProjects : allProjects.slice(0, 4)

    const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

    return (
        <section id="projects" className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 flex justify-center">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <SectionHeading>Projects</SectionHeading>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 py-3">
                    {visibleProjects.map((p) => (
                        <div key={p.title} onClick={() => setSelectedProject(p)}>
                            <ProjectCard key={p.title} {...p} />
                        </div>
                    ))}
                </div>
                {allProjects.length > 4 && (
                    <div className="flex justify-center mt-4 mb-6">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-6 py-2 rounded-lg border border-[var(--color-border)] 
                                     bg-[var(--color-bg-card)] text-[var(--color-text)] 
                                     hover:border-[var(--color-accent)] transition-colors font-medium text-sm"
                        >
                            {showAll ? "Show Less" : `View All Projects (${allProjects.length})`}
                        </button>
                    </div>
                )}
            </div>

            {/* Render the modal if a project is selected */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    )
}

export default Projects