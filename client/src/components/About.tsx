import SectionHeading from "./SectionHeading"

const About: React.FC = () => (
    <section id="about" className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 flex justify-center">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <SectionHeading>About Me</SectionHeading>
            <p className="text-[var(--color-text)] text-base font-normal leading-normal py-3 px-4">
                Hi, I’m Aiden! I’m a Software Engineering student (graduating Spring 2026) with 8 months of co-op experience building automated solutions for smart building systems. I specialize in full-stack development with a focus on creating scalable, efficient applications.
                <br /><br />
                Right now, I’m obsessed with infrastructure and self-hosting. I’m currently building a Linux-based home server to orchestrate my personal projects using Docker and secure networking via tunnels. I love tackling the "full-stack" of a project, including everything from writing the logic to managing the deployment. My goal is to join a dynamic team where I can build software that makes a real-world impact.
            </p>
        </div>
    </section>
)

export default About