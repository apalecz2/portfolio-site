import React, { useEffect } from "react";
import type { ProjectProps } from "./ProjectCard";
import Tag from "./Tag";

interface ProjectModalProps {
    project: ProjectProps;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
            {/* Blur the backdrop */}
            <div
                className="absolute inset-0 bg-black/10 backdrop-blur-xs transition-opacity"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className={`
                relative w-full bg-[var(--color-bg-card)] 
                border-t md:border border-[var(--color-border)]
                rounded-t-[20px] md:rounded-xl
                h-[92vh] md:h-auto md:max-h-[85vh] md:max-w-2xl
                transition-transform duration-300 ease-out transform
                flex flex-col overflow-hidden
            `}>

                {/* Mobile Handle Bar */}
                <div className="md:hidden flex justify-center py-3" onClick={onClose}>
                    <div className="w-12 h-1.5 bg-[var(--color-border)] rounded-full opacity-50" />
                </div>

                {/* Close Button (Desktop) */}
                <button
                    onClick={onClose}
                    className="hidden md:flex absolute top-4 right-4 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Scrollable */}
                <div className="overflow-y-auto p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col gap-6">
                        <div
                            className="w-full aspect-video rounded-xl bg-center bg-cover bg-[var(--color-bg)]"
                            style={{ backgroundImage: `url(${project.image})` }}
                        />

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-3">
                                {project.title}
                            </h2>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map(tag => (
                                    <Tag key={tag} label={tag} dark />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                        <h4 className="text-[var(--color-text)] font-semibold uppercase tracking-wider text-xs">Project Overview</h4>
                        <p className="text-[var(--color-text-muted)] leading-relaxed text-base">
                            {project.description}
                        </p>
                        <p className="text-[var(--color-accent)] leading-relaxed text-base">
                            More details on this project coming soon!
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex justify-between items-center">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 items-center justify-center rounded-lg px-6
                                     bg-[var(--color-accent)] text-[var(--color-bg)]
                                     text-sm font-bold hover:opacity-90 transition"
                        >
                            Visit Live Site
                        </a>
                        <button
                            onClick={onClose}
                            className="text-[var(--color-text-muted)] text-sm font-medium hover:underline"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;