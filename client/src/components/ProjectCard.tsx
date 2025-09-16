export interface ProjectProps {
    title: string
    description: string
    image: string
    tags: string[]
    link: string
}
import Tag from "./Tag"

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image, tags, link }) => (
    <div className="p-4">
        <div className="flex flex-col-reverse sm:flex-row items-stretch justify-between gap-4 rounded-lg">
            <div className="flex flex-col gap-1 flex-[2_2_0px]">
                <p className="text-[var(--color-text)] text-base font-bold leading-tight">{title}</p>
                <p className="text-[var(--color-text-muted)] text-sm font-normal leading-normal">{description}</p>
                <div className="flex gap-2 flex-wrap mt-2">
                    {tags.map((tag) => (
                        <Tag key={tag} label={tag} />
                    ))}
                </div>
                <div className="mt-4">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-lg px-4 py-2
                       bg-[var(--color-accent)] text-[var(--color-bg)]
                       text-sm font-bold tracking-[0.015em]
                       hover:opacity-90 transition"
                    >
                        Visit
                    </a>
                </div>
            </div>
            <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                style={{ backgroundImage: `url(${image})` }}
            />
        </div>
    </div>
)

export default ProjectCard