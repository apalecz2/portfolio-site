import { useState } from "react"
import SectionHeading from "./SectionHeading"

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path d="m193-479 155 155q11 11 11 28t-11 28q-11 11-28 11t-28-11L108-452q-6-6-8.5-13T97-480q0-8 2.5-15t8.5-13l184-184q12-12 28.5-12t28.5 12q12 12 12 28.5T349-635L193-479Zm574-2L612-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L668-268q-12 12-28 11.5T612-269q-12-12-12-28.5t12-28.5l155-155Z" />
    </svg>
)

const LinkedInIcon = () => (
    <svg
        height="24px"
        width="24px"
        viewBox="0 0 72 72"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8,72 L64,72 C68.4,72 72,68.4 72,64 L72,8 C72,3.6 68.4,0 64,0 L8,0 C3.6,0 0,3.6 0,8 L0,64 C0,68.4 3.6,72 8,72 Z"
            fill="currentColor"
        />
        <path
            d="M62,62 H51.3 V43.8 C51.3,38.8 49.4,36 45.5,36 C41.2,36 38.9,38.9 38.9,43.8 V62 H28.6 V27.3 H38.9 V32 C38.9,32 42,26.3 49.4,26.3 C56.7,26.3 62,30.8 62,40.1 V62 Z M16.3,22.8 C12.8,22.8 10,19.9 10,16.4 C10,12.9 12.8,10 16.3,10 C19.9,10 22.7,12.9 22.7,16.4 C22.7,19.9 19.9,22.8 16.3,22.8 Z M11,62 H21.8 V27.3 H11 V62 Z"
            fill="var(--color-bg)"
        />
    </svg>
)

type ContactLink = {
    name: string
    href: string
    display: string
    icon: React.ReactNode
    external?: boolean
}

const contactLinks: ContactLink[] = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/aiden-paleczny",
        display: "aiden-paleczny",
        icon: <LinkedInIcon />,
        external: true,
    },
    {
        name: "GitHub",
        href: "https://github.com/apalecz2",
        display: "github.com/apalecz2",
        icon: <GithubIcon />,
        external: true,
    },
]

const CopyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M16 1H4c-1.1 0-2 .9-2 2v12h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
    </svg>
)

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
    </svg>
)

const Contact: React.FC = () => {
    const [copied, setCopied] = useState(false)

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText("aiden.paleczny@gmail.com")
            setCopied(true)
            window.setTimeout(() => setCopied(false), 1500)
        } catch { }
    }

    return (
        <section id="contact" className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 flex justify-center">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                <SectionHeading>Contact</SectionHeading>

                <div className="bg-[var(--color-bg-card)] rounded-xl shadow-sm mx-4 my-3">

                    <div className="px-4 py-4 sm:px-6 sm:py-6">
                        <p className="text-[var(--color-text)] text-base font-medium leading-tight p-4">
                            If you have any questions or want to connect, please feel free to reach out.
                        </p>
                        <div className="flex flex-wrap gap-3 p-4 justify-start">
                            {/* Copy Email card */}
                            <button
                                type="button"
                                onClick={handleCopyEmail}
                                className="group flex items-center gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4 transition-colors hover:border-[var(--color-accent)] basis-[250px] min-w-[250px] max-w-[300px] grow shrink-0 text-left"
                            >
                                <div className="text-[var(--color-text)] transition-colors">
                                    {copied ? <CheckIcon /> : <CopyIcon />}
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[var(--color-text)] text-base font-bold leading-tight transition-colors">
                                        Copy Email
                                    </h3>
                                    <span className="text-[var(--color-text-muted)] text-sm leading-tight transition-colors select-text">
                                        aiden.paleczny@gmail.com
                                    </span>
                                </div>
                            </button>

                            {contactLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target={item.external ? "_blank" : undefined}
                                    rel={item.external ? "noopener noreferrer" : undefined}
                                    className="group flex items-center gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4 transition-colors hover:border-[var(--color-accent)] basis-[250px] min-w-[250px] max-w-[300px] grow shrink-0"
                                >
                                    <div className="text-[var(--color-text)] transition-colors ">
                                        {item.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-[var(--color-text)] text-base font-bold leading-tight transition-colors">
                                            {item.name}
                                        </h3>
                                        <span className="text-[var(--color-text-muted)] text-sm leading-tight transition-colors select-text">
                                            {item.display}
                                        </span>
                                    </div>
                                </a>
                            ))}

                            {/* Send me an email card 
                            <a
                                href="mailto:aiden.paleczny@gmail.com"
                                className="group flex items-center gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-4 transition-colors hover:border-[var(--color-accent)] hover:bg-[var(--color-bg-card)] basis-[250px] min-w-[250px] max-w-[300px] grow shrink-0"
                            >
                                <div className="text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent)]">
                                    <MailIcon />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[var(--color-text)] text-base font-bold leading-tight transition-colors group-hover:text-[var(--color-accent)]">
                                        Send Email
                                    </h3>
                                    <span className="text-[var(--color-text-muted)] text-sm leading-tight transition-colors group-hover:text-[var(--color-accent)] select-text">
                                        aiden.paleczny@gmail.com
                                    </span>
                                </div>
                            </a>
                            */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact