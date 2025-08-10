import React from "react"

interface TagProps {
  label: string
}

const Tag: React.FC<TagProps> = ({ label }) => (
  <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[var(--color-bg-card)] pl-4 pr-4">
    <p className="text-[var(--color-text)] text-sm font-medium leading-normal">{label}</p>
  </div>
)

export default Tag


