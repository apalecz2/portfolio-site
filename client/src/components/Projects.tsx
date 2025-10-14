import SectionHeading from "./SectionHeading"
import ProjectCard from "./ProjectCard"
import type { ProjectProps } from "./ProjectCard"

const Projects: React.FC = () => {
    const projects: ProjectProps[] = [
        {
            title: "RouteRadar",
            description: "An interactive web application for tracking the live positions and arrival times of London Transit buses. Developed using React, Tailwind, NodeJS + Express, GraphQL, and the Google Maps API.",
            image:
                "/RouteRadar.png",
            tags: ["React", "Node.js", "GraphQL", "Google Maps API", "TailwindCSS"], 
            link: "https://transit.aidenpaleczny.com",
        },
        {
            title: "TradeWise",
            description:
                "A web application that provides company performance analysis tools, to help users make informed trading decisions. Built with Python, PostgresSQL, React, and Tailwind.",
            image:
                "/TradeWise.png",
            tags: ["Python", "PostgreSQL", "React", "TailwindCSS"], 
            link: "https://trade.aidenpaleczny.com",
        },
    ]

    return (
        <section id="projects" className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 flex justify-center">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <SectionHeading>Projects</SectionHeading>
                {projects.map((p) => (
                    <ProjectCard key={p.title} {...p} />
                ))}
            </div>
        </section>
    )
}

export default Projects