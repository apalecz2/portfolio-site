import SectionHeading from "./SectionHeading"

const About: React.FC = () => (
    <section id="about" className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 flex justify-center">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <SectionHeading>About Me</SectionHeading>
            <p className="text-[var(--color-text)] text-base font-normal leading-normal pb-3 pt-1 px-4">
                Hi I'm Aiden! I am a passionate software engineering student (spring 2026 graduate) with a strong foundation in computer science.
                I have 8 months of development experience from two co-op terms, where I designed and implemented software solutions to enhance and automate smart building systems.
                My expertise lies in
                full-stack development, with a focus on creating scalable and efficient applications. I am proficient in various programming languages and frameworks, and I'm always
                eager to learn new technologies and tackle challenging projects.
                My goal is to apply my skills and experience to drive innovation, collaborate with a dynamic team, and deliver software that makes a meaningful impact.
            </p>
        </div>
    </section>
)

export default About