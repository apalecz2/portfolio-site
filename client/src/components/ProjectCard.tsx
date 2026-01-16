import Tag from "./Tag"

export interface ProjectProps {
    title: string
    description: string
    image: string
    tags: string[]
    link: string
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image, tags, link }) => (
    <div className="group flex flex-col h-full bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] 
                    hover:border-[var(--color-accent)] hover:-translate-y-1 transition-all p-5 cursor-pointer shadow-sm hover:shadow-md">

        <div className="block sm:flex sm:flex-row gap-4 h-full">

            <div className="block sm:flex sm:flex-col flex-[2] order-2 sm:order-1">

                {/* Mobile: Image floated right so text wraps around it */}
                {/* Desktop: Hidden */}
                <div
                    className="sm:hidden float-right w-1/4 max-w-[96px] aspect-square
                        bg-center bg-cover rounded-lg bg-[var(--color-bg)]
                        ml-4 mb-2"
                    style={{ backgroundImage: `url(${image})` }}
                />
                <h3 className="text-[var(--color-text)] text-lg font-bold leading-tight mb-2">
                    {title}
                </h3>

                <p className="text-[var(--color-text-muted)] text-sm font-normal leading-normal mb-4 flex-grow">
                    {description}
                </p>

                <div className="flex gap-2 flex-wrap mb-4">
                    {tags.map((tag) => (
                        <Tag key={tag} label={tag} dark />
                    ))}
                </div>

                {/* Mobile Footer */}
                <div className="flex items-center gap-4 sm:hidden mt-auto">
                    <VisitButton link={link} />
                    <span className="text-[var(--color-accent)] text-xs font-semibold">
                        Details →
                    </span>
                </div>

                <span className="hidden sm:block mt-2 text-[var(--color-accent)] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Click for details →
                </span>
            </div>

            {/* Right Column: Only visible on sm and up */}
            <div className="hidden sm:flex flex-col items-center sm:items-end gap-4 flex-1 order-1 sm:order-2">
                <div
                    className="w-full sm:w-32 sm:h-32 md:w-32 md:h-32 bg-center bg-no-repeat bg-cover rounded-lg bg-[var(--color-bg)] shrink-0"
                    style={{ backgroundImage: `url(${image})` }}
                />
                <VisitButton link={link} />
            </div>
        </div>
    </div>
)

export default ProjectCard;

const VisitButton = ({ link }: { link: string }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="flex h-8 shrink-0 items-center justify-center rounded-lg px-4
                 bg-[var(--color-accent)] text-[var(--color-bg)]
                 text-sm font-medium leading-normal
                 hover:opacity-90 transition w-fit text-center"
    >
        Live Demo
    </a>
)