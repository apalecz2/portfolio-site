interface ExperienceItemProps {
    role: React.ReactNode; // Note that this is a node so that there can be hmtl in it
    period: string;
    bullets?: string[];
    showConnector?: boolean;
    caseStudyUrl?: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ role, period, bullets, showConnector, caseStudyUrl }) => (
    
    <>
        {/* Left Column: Icon and Timeline Line */}
        <div className="flex flex-col items-center gap-1">
            <div className="text-[var(--color-text)] mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z" />
                </svg>
            </div>
            {showConnector && <div className="w-[1.5px] bg-[var(--color-border-muted)] grow mb-2"></div>}
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-1 flex-col pt-3 pb-8">
            <div className="text-[var(--color-text)] text-base font-medium leading-snug">
                {role}
            </div>
            <p className="text-[var(--color-text-muted)] text-sm font-normal mt-1 mb-3">
                {period}
            </p>

            {bullets && bullets.length > 0 && (
                <div>
                    <ul className="flex flex-col gap-2">
                        {bullets.map((bullet, index) => (
                            <li key={index} className="flex gap-2 text-[var(--color-text-muted)] text-sm leading-relaxed">
                                <span className="text-[var(--color-border-muted)] mt-1.5 text-[10px]">●</span>
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>
                    {/* In case I add a breakdown / reflection document for my experience that's more in depth */}
                    {caseStudyUrl && (
                        <a
                            href={caseStudyUrl}
                            className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-[var(--color-primary)] hover:underline decoration-2 underline-offset-4"
                        >
                            View Technical Reflection
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
                            </svg>
                        </a>
                    )}
                </div>
            )} 
        </div>
    </>
);

export default ExperienceItem;