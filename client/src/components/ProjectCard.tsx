import React from "react"

export interface ProjectProps {
  title: string
  description: string
  image: string
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image }) => (
  <div className="p-4">
    <div className="flex flex-col-reverse sm:flex-row items-stretch justify-between gap-4 rounded-lg">
      <div className="flex flex-col gap-1 flex-[2_2_0px]">
        <p className="text-[var(--color-text)] text-base font-bold leading-tight">{title}</p>
        <p className="text-[var(--color-text-muted)] text-sm font-normal leading-normal">{description}</p>
      </div>
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  </div>
)

export default ProjectCard


