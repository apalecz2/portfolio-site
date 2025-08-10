import React from "react"

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[var(--color-border)] px-10 py-3">
      <div className="flex items-center gap-4 text-[var(--color-text)]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>
        <h2 className="text-[var(--color-text)] text-lg font-bold leading-tight tracking-[-0.015em]">Alex's Portfolio</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          <a className="text-[var(--color-text)] text-sm font-medium leading-normal" href="#about">About</a>
          <a className="text-[var(--color-text)] text-sm font-medium leading-normal" href="#skills">Skills</a>
          <a className="text-[var(--color-text)] text-sm font-medium leading-normal" href="#projects">Projects</a>
          <a className="text-[var(--color-text)] text-sm font-medium leading-normal" href="#experience">Experience</a>
          <a className="text-[var(--color-text)] text-sm font-medium leading-normal" href="#contact">Contact</a>
        </nav>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{
            backgroundImage:
              "url(https://lh3.googleusercontent.com/aida-public/AB6AXuB0OyrYMRPqFtcefHI1ukjPRRw06BVGiMGiwBQLqIxe7z4wLBy3dH4_it9Bh9gy5CESM3aevF6coFCtdJG2gXn05dn7a6WUbnzlMWM-Kg0yx8lqf0N6ORZHkg3pMKa57zbHdioK3uMO95Qv3buhjqA1DXpENn2_Vz_RDD4Zr0q9pemmyANjvM_kC2_N2SguTkFIVrgPJyLj69-xBvgq-GHaiEGf25bF13G5Qh6LezoRa9s8ahqSAfzug4yx3XWpw4gFUFQ4y_v69x1w)"
          }}
        />
      </div>
    </header>
  )
}

export default Header


