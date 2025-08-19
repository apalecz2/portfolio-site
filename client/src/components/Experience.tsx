import React from "react"
import SectionHeading from "./SectionHeading"
import ExperienceItem from "./ExperienceItem"

const Experience: React.FC = () => (
    <section id="experience" className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 flex justify-center">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <SectionHeading>Experience</SectionHeading>
            <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
                <ExperienceItem role="Software Developer Co-op at Building Controls & Solutions (prev. Yorkland Controls)." period="May-Aug 2025, May-Aug 2024" showConnector />
                <div className="flex flex-col items-center gap-1 pb-3">
                    <div className="w-[1.5px] bg-[var(--color-border-muted)] h-2"></div>
                    <div className="text-[var(--color-text)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z" />
                        </svg>
                    </div>
                </div>
                <div className="flex flex-1 flex-col py-3">
                    <p className="text-[var(--color-text)] text-base font-medium leading-normal">Day Camp Counsellor with the City of London</p>
                    <p className="text-[var(--color-text-muted)] text-base font-normal leading-normal">2018 - 2023</p>
                </div>
            </div>
        </div>
    </section>
)

export default Experience