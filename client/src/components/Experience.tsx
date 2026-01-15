import SectionHeading from "./SectionHeading"
import ExperienceItem from "./ExperienceItem"

const Experience: React.FC = () => {
    return (
        <section id="experience" className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 flex justify-center">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <SectionHeading>Experience</SectionHeading>

                <div className="grid grid-cols-[40px_1fr] px-4">
                    {/* BC&S */}
                    <ExperienceItem
                        role={
                            <>
                                <b>Software Developer Co-op</b> at Building Controls & Solutions <span className="text-sm font-normal italic opacity-80">(formerly Yorkland Controls)</span>
                            </>
                        }
                        period="May – Aug 2025, May – Aug 2024"
                        showConnector={true}
                        bullets={[
                            "Invited to return for a second term with expanded responsibilities, including direct client communication and ownership of solution delivery.",
                            "Automated legacy HVAC data imports by consolidating 6+ scripts into a single module, cutting deployment and runtime by 40%+. ",
                            "Developed simulation models and anomaly detection logic for energy usage (heating/airflow), enabling proactive efficiency improvements.",
                            "Optimized large-scale data pipelines using algorithmic improvements (binary search, hash maps), significantly accelerating processing on high-volume datasets."
                        ]}
                    />

                    {/* Camp */}
                    <ExperienceItem
                        role={<div> <b>Day Camp Counsellor</b> with the City of London </div>}
                        period="2018 – 2023"
                        showConnector={false}
                        bullets={[
                            "Promoted 3 times from entry-level to \"Senior Leader\" while supervising 60+ participants and mentoring staff, demonstrating strong leadership and mentorship.",
                            "Developed strong communication and conflict resolution skills in a fast-paced environment."
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Experience;