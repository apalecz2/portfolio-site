import React from "react"
import { useState } from "react";

const LightIcon: React.FC = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
            <path d="M480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm198 82q-11-11-11-27.5t11-28.5l56-57q12-12 28.5-12t28.5 12q11 11 11 28t-11 28l-57 57q-11 11-28 11t-28-11Zm122 238q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-40q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-57-56q-12-12-12-29t12-28q11-11 28-11t28 11l57 57q11 11 11 28t-11 28q-12 11-28 11t-28-11Zm508 509-56-57q-11-12-11-28.5t11-27.5q11-11 27.5-11t28.5 11l57 56q12 11 11.5 28T791-169q-12 12-29 12t-28-12ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm89 271q-11-11-11-28t11-28l57-57q11-11 27.5-11t28.5 11q12 12 12 28.5T282-225l-56 56q-12 12-29 12t-28-12Zm311-71q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z" />
        </svg>
    );
}
const DarkIcon: React.FC = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
            <path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-128 72-232t193-146q22-8 41 5.5t18 36.5q-3 85 27 162t90 137q60 60 137 90t162 27q26-1 38.5 17.5T863-345q-44 120-147.5 192.5T484-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T464-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T160-484q0 135 94.5 229.5T484-160Zm-20-305Z"/>
        </svg>
    );
}
const RocketIcon: React.FC = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
            <path d="m353-480 59-59q12-12 12-28t-12-28q-12-12-28.5-12T355-595l-87 87q-6 6-8.5 13t-2.5 15q0 8 2.5 15t8.5 13l87 87q12 12 28.5 12t28.5-12q12-12 12-28t-12-28l-59-59Zm254 0-59 59q-12 12-12 28t12 28q12 12 28.5 12t28.5-12l87-87q6-6 8.5-13t2.5-15q0-8-2.5-15t-8.5-13l-87-87q-6-6-13.5-9t-15-3q-7.5 0-15 3t-13.5 9q-12 12-12 28t12 28l59 59ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
        </svg>
    );
}

const Header: React.FC = () => {

    const [isDark, setIsDark] = useState(
        document.documentElement.classList.contains("new-dark")
    );
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleDark = () => {
        const nowDark = !isDark;
        setIsDark(nowDark);
        document.documentElement.classList.toggle("new-dark", nowDark);
        localStorage.theme = nowDark ? "new-dark" : "light";
    };

    return (
        <>
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)] flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[var(--color-border)] px-4 sm:px-6 md:px-8 lg:px-10 py-3">
            <div className="flex items-center gap-3 sm:gap-4 text-[var(--color-text)]">
                <button
                    className="p-2 h-10 rounded-md hover:bg-[var(--color-bg-hover)] size-4 flex items-center justify-center group"
                    style={{ minWidth: '2.5rem', minHeight: '2.5rem' }}
                    aria-label="Go to top"
                    onClick={e => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    <a href="#top" tabIndex={-1} aria-hidden="true" style={{ display: 'contents' }}>
                        <svg
                            viewBox="0 0 48 48"
                            width="18"
                            height="18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-transform duration-300 ease-in-out group-hover:rotate-180"
                        >
                            <g clipPath="url(#clip0_6_330)">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                                    fill="currentColor"
                                ></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_6_330"><rect width="48" height="48" fill="white"></rect></clipPath>
                            </defs>
                        </svg>
                    </a>
                </button>
                <h2 className="text-[var(--color-text)] text-base sm:text-lg font-bold leading-tight tracking-[-0.015em]">Aiden Paleczny</h2>
            </div>
            <div className="flex items-center gap-4 sm:gap-3 flex-1 justify-end">
                <button
                    onClick={() => setMobileOpen((v) => !v)}
                    className="p-2 h-10 rounded-md hover:bg-[var(--color-bg-hover)] lg:hidden"
                    aria-label="Toggle navigation menu"
                    aria-controls="site-nav"
                    aria-expanded={mobileOpen}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 6a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm.75 5.25a.75.75 0 000 1.5h15a.75.75 0 000-1.5h-15z" clipRule="evenodd" />
                    </svg>
                </button>
                <nav id="site-nav" className="hidden lg:flex items-center gap-4 xl:gap-6">
                    <a className="text-[var(--color-text)] text-sm font-medium leading-normal p-2 px-3 h-10 rounded-md hover:bg-[var(--color-bg-hover)]" href="#about" onClick={e => {e.preventDefault(); const el = document.getElementById('about'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 64; window.scrollTo({ top: y, behavior: 'smooth' }); }}}>About</a>
                    <a className="text-[var(--color-text)] text-sm font-medium leading-normal p-2 px-3 h-10 rounded-md hover:bg-[var(--color-bg-hover)]" href="#skills" onClick={e => {e.preventDefault(); const el = document.getElementById('skills'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 64; window.scrollTo({ top: y, behavior: 'smooth' }); }}}>Skills</a>
                    <a className="text-[var(--color-text)] text-sm font-medium leading-normal p-2 px-3 h-10 rounded-md hover:bg-[var(--color-bg-hover)]" href="#projects" onClick={e => {e.preventDefault(); const el = document.getElementById('projects'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 64; window.scrollTo({ top: y, behavior: 'smooth' }); }}}>Projects</a>
                    <a className="text-[var(--color-text)] text-sm font-medium leading-normal p-2 px-3 h-10 rounded-md hover:bg-[var(--color-bg-hover)]" href="#experience" onClick={e => {e.preventDefault(); const el = document.getElementById('experience'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 64; window.scrollTo({ top: y, behavior: 'smooth' }); }}}>Experience</a>
                    <a className="text-[var(--color-text)] text-sm font-medium leading-normal p-2 px-3 h-10 rounded-md hover:bg-[var(--color-bg-hover)]" href="#contact" onClick={e => {e.preventDefault(); const el = document.getElementById('contact'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 64; window.scrollTo({ top: y, behavior: 'smooth' }); }}}>Contact</a>
                </nav>
                <button
                    onClick={toggleDark}
                    className="p-2 h-10 rounded-md hover:bg-[var(--color-bg-hover)]"
                    aria-label="Toggle dark mode"
                >
                    {isDark ? (
                        <LightIcon />
                    ) : (
                        <DarkIcon />
                    )}
                </button>
                <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 sm:size-10 hidden xs:block"
                    style={{
                        backgroundImage:
                            "url(https://lh3.googleusercontent.com/aida-public/AB6AXuB0OyrYMRPqFtcefHI1ukjPRRw06BVGiMGiwBQLqIxe7z4wLBy3dH4_it9Bh9gy5CESM3aevF6coFCtdJG2gXn05dn7a6WUbnzlMWM-Kg0yx8lqf0N6ORZHkg3pMKa57zbHdioK3uMO95Qv3buhjqA1DXpENn2_Vz_RDD4Zr0q9pemmyANjvM_kC2_N2SguTkFIVrgPJyLj69-xBvgq-GHaiEGf25bF13G5Qh6LezoRa9s8ahqSAfzug4yx3XWpw4gFUFQ4y_v69x1w)"
                    }}
                />
            </div>
        </header>
        {/* Spacer to account for fixed header height (h-16 => 64px matching py-3 + inner heights) */}
        <div className="h-16" />
        {/* Mobile dropdown nav */}
        <div className={`lg:hidden ${mobileOpen ? 'block' : 'hidden'} border-b border-[var(--color-border)]`}> 
            <nav className="flex flex-col gap-1 px-4 sm:px-6 py-2" aria-label="Mobile">
                <a className="text-[var(--color-text)] py-2 px-3 text-sm font-medium leading-normal rounded-md hover:bg-[var(--color-bg-hover)]" href="#about" onClick={e => {e.preventDefault(); setMobileOpen(false); const el = document.getElementById('about'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 64; window.scrollTo({ top: y, behavior: 'smooth' }); }}}>About</a>
                <a className="text-[var(--color-text)] py-2 px-3 text-sm font-medium leading-normal rounded-md hover:bg-[var(--color-bg-hover)]" href="#skills" onClick={e => {e.preventDefault(); setMobileOpen(false); const el = document.getElementById('skills'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 64; window.scrollTo({ top: y, behavior: 'smooth' }); }}}>Skills</a>
                <a className="text-[var(--color-text)] py-2 px-3 text-sm font-medium leading-normal rounded-md hover:bg-[var(--color-bg-hover)]" href="#projects" onClick={e => {e.preventDefault(); setMobileOpen(false); const el = document.getElementById('projects'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 64; window.scrollTo({ top: y, behavior: 'smooth' }); }}}>Projects</a>
                <a className="text-[var(--color-text)] py-2 px-3 text-sm font-medium leading-normal rounded-md hover:bg-[var(--color-bg-hover)]" href="#experience" onClick={e => {e.preventDefault(); setMobileOpen(false); const el = document.getElementById('experience'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 64; window.scrollTo({ top: y, behavior: 'smooth' }); }}}>Experience</a>
                <a className="text-[var(--color-text)] py-2 px-3 text-sm font-medium leading-normal rounded-md hover:bg-[var(--color-bg-hover)]" href="#contact" onClick={e => {e.preventDefault(); setMobileOpen(false); const el = document.getElementById('contact'); if (el) { const y = el.getBoundingClientRect().top + window.scrollY - 64; window.scrollTo({ top: y, behavior: 'smooth' }); }}}>Contact</a>
            </nav>
        </div>
        </>
    )
}

export default Header


