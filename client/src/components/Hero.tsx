const Hero: React.FC = () => {
    
    const resumeUrl = "/Aiden_Paleczny_Resume.pdf"
    
    return (
        <section className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <div className="@container">
                    <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
                        <div
                            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full"
                            style={{
                                backgroundImage: "url('/me.png')"
                            }}
                        />
                        <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                            <div className="flex flex-col gap-2 text-left">
                                <h1 className="text-[var(--color-text)] text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                                    Aiden Paleczny
                                </h1>
                                <h2 className="text-[var(--color-text)] text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                                    B.E.Sc. in Software Engineering
                                </h2>
                            </div>
                            
                            {/* Call to action buttons */}
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="#projects"
                                    onClick={e => {
                                        e.preventDefault();
                                        const el = document.getElementById('projects');
                                        if (el) {
                                            const y = el.getBoundingClientRect().top + window.scrollY - 64; // offset for fixed header
                                            window.scrollTo({ top: y, behavior: 'smooth' });
                                        }
                                    }}
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[var(--color-accent)] text-[var(--color-bg)] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:opacity-90"
                                >
                                    <span className="truncate">View Projects</span>
                                </a>

                                <a
                                    href={resumeUrl}
                                    download
                                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[var(--color-bg-card)] text-[var(--color-text)] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] transition-opacity hover:bg-[var(--color-bg-hover)]"
                                >
                                    <span className="truncate">Download Resume</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;