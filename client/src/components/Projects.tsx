import React from "react"
import SectionHeading from "./SectionHeading"
import ProjectCard from "./ProjectCard"
import type { ProjectProps } from "./ProjectCard"

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "Project Alpha",
      description:
        "A web application for managing tasks and projects, built with React and Node.js.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC9P7d3VGy8AGEK4SE_yBS2AmDod5qpvSE14x5llvKrQZ39kRx8YbrsW5Q4OoqALm5zgiTEhE98b4w7IXzDaWKn_CEhnBzrj6Jw9kvIb8R8mYQEY4VCFXUXkd7J6LFihJR_9izw6VMAFwcYYnEGbcBEK0pu8FeA1B3vHsIWvAkosGAqM7jvr8BQ8rMxeNea3tUeJW5lYxSbJ-Oe9vURRTiC1N0rqyh7VkEgSwVpmfxeCmSD2L7vxYvzbuiGJetEW44b8Ad4pfEsGTvP",
    },
    {
      title: "Project Beta",
      description: "A mobile app for tracking fitness goals, developed using React Native.",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA9TyNSPJl4e_pfS-ctzVmOuA1j6vELbg-S_I5_9rPRqp3pYTTA8GBXUIK4SVp56_JR-wp2ULvi39igKeOrsabaxcxT5f7qk2v-4Oz3dkKeVYkEehxnFZOTllP68f99cbphzd0FVgOadPRMVV_nrydipJo4aDjUgqkDZJGNgNR4-EXrEQ_v5uPiIyINSGfqE9DAiE4NPD0jrUgkQgQNVTKhlNw1-E-VBW4LVJS_O7b1Il2ecCW3IATkKvfCMKOBvy6M7jEOjCVlzcrP",
    },
  ]

  return (
    <section id="projects" className="px-40 flex justify-center">
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


