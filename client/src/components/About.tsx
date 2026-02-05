import SectionHeading from "./SectionHeading"

const About: React.FC = () => (
    <section id="about" className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 flex justify-center">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <SectionHeading>About Me</SectionHeading>
            <p className="text-[var(--color-text)] text-base font-normal leading-normal py-3 px-4">
                Hi, I’m Aiden! I’m a Software Engineering student graduating Spring 2026 with about 8 months of co-op experience building automation tools for smart building systems. Most of my experience is in full-stack development, but I’ve also worked with embedded systems and even trained some machine learning models.
                <br /><br />
                Right now, I’m exploring cloud infrastructure and self-hosting. I’m currently building a Linux home server to deploy my projects using Docker and secure networking tunnels. I’m always interested in new projects, collaborations, or just chatting about tech, so feel free to
                {" "}
                <a
                    href="#contact"
                    onClick={e => {
                        e.preventDefault();
                        const el = document.getElementById('contact');
                        if (el) {
                            const y = el.getBoundingClientRect().top + window.scrollY - 64;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                    }}
                    className="underline hover:opacity-80"
                >
                    reach out
                </a>
                {" "}
                if you’d like to connect!
            </p>
        </div>
    </section>
)

export default About