interface SectionHeadingProps {
    id?: string
    children: React.ReactNode
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ id, children }) => (
    <h2 id={id} className="text-[var(--color-text)] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10">
        {children}
    </h2>
)

export default SectionHeading