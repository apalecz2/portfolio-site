import React from "react"
import SectionHeading from "./SectionHeading"

const About: React.FC = () => (
  <section id="about" className="px-40 flex justify-center">
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <SectionHeading>About Me</SectionHeading>
      <p className="text-[var(--color-text)] text-base font-normal leading-normal pb-3 pt-1 px-4">
        I am a passionate software engineer with a strong foundation in computer science and a keen interest in developing innovative solutions. My expertise lies in
        full-stack development, with a focus on creating scalable and efficient applications. I am proficient in various programming languages and frameworks, and I am always
        eager to learn new technologies and tackle challenging projects. My goal is to leverage my skills and experience to contribute to a dynamic team and create impactful
        software.
      </p>
    </div>
  </section>
)

export default About


