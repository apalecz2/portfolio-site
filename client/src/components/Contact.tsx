import React from "react"
import SectionHeading from "./SectionHeading"

const Contact: React.FC = () => (
  <section id="contact" className="px-40 flex justify-center">
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <SectionHeading>Contact</SectionHeading>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <p className="text-[var(--color-text)] text-base font-medium leading-normal pb-2">Email</p>
          <input
            placeholder="your.email@example.com"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[var(--color-text)] focus:outline-0 focus:ring-0 border border-[var(--color-border-muted)] bg-[var(--color-bg)] focus:border-[var(--color-border)] h-14 placeholder:text-[var(--color-text-muted)] p-[15px] text-base font-normal leading-normal"
          />
        </label>
      </div>
      <div className="flex px-4 py-3 justify-start">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[var(--color-accent)] text-[var(--color-bg)] text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Send</span>
        </button>
      </div>
    </div>
  </section>
)

export default Contact


