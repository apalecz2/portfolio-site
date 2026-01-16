import SectionHeading from "./SectionHeading"

const Education: React.FC = () => (
    <section id="education" className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 flex justify-center">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <SectionHeading>Education</SectionHeading>
            <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
                <EducationItem
                    institution="University of Western Ontario"
                    degree="B.E.Sc. Software Engineering"
                    period="2022 - 2026"
                    gpa="3.71/4.0"
                    details="Dean's Honor List (2022, 2023, 2024)"
                />
            </div>
        </div>
    </section>
)

export default Education

interface EducationItemProps {
    institution: string
    degree: string
    period: string
    gpa?: string;
    details?: string;
    showConnector?: boolean
}

const EducationItem: React.FC<EducationItemProps> = ({ institution, degree, period, gpa, details, showConnector }) => (
    <>
        <div className="flex flex-col items-center gap-1 pt-3">
            <div className="text-[var(--color-text)]">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                    <path d="M240-347q14-7 29-10t31-3h20v-440h-20q-25 0-42.5 17.5T240-740v393Zm160-13h320v-440H400v440Zm-160 13v-453 453Zm60 267q-58 0-99-41t-41-99v-520q0-58 41-99t99-41h420q33 0 56.5 23.5T800-800v501q0 8-6.5 14.5T770-270q-14 7-22 20t-8 30q0 17 8 30.5t22 19.5q14 6 22 16.5t8 22.5v10q0 17-11.5 29T760-80H300Zm0-80h373q-6-14-9.5-28.5T660-220q0-16 3-31t10-29H300q-26 0-43 17.5T240-220q0 26 17 43t43 17Z" />
                </svg>
            </div>
            <div className={`w-[1.5px] bg-[var(--color-border-muted)] h-2 ${showConnector ? "grow" : ""}`}></div>
        </div>
        <div className="flex flex-1 flex-col py-3">
            <p className="text-[var(--color-text)] text-base font-medium leading-tight">{degree}</p>

            {/* Metadata Line: Institution, Period, and GPA */}
            <div className="flex flex-wrap items-center gap-x-2 text-[var(--color-text-muted)] text-sm font-normal mt-1">
                <span>{institution}</span>
                <span className="text-[var(--color-border-muted)]">•</span>
                <span>{period}</span>
                {gpa && (
                    <>
                        <span className="text-[var(--color-border-muted)]">•</span>
                        <span className="font-medium text-[var(--color-text)]">GPA: {gpa}</span>
                    </>
                )}
            </div>

            {details && (
                <p className="text-[var(--color-text-muted)] text-sm font-normal mt-1 italic">
                    {details}
                </p>
            )}
        </div>
    </>
)
