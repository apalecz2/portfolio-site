interface TagProps {
    label: string
    dark?: boolean
}

const Tag: React.FC<TagProps> = ({ label, dark }) => (
    <div
        className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg 
            ${dark ? `bg-[var(--color-bg-hover)]` : `bg-[var(--color-bg-card)]`} 
            pl-4 pr-4`}
    >
        <p className="text-[var(--color-text)] text-sm font-medium leading-normal">{label}</p>
    </div>
)

export default Tag