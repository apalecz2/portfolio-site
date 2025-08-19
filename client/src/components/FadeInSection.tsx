import { useRef, useState, useEffect } from "react";

interface FadeInSectionProps {
    children: React.ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target); // fade in only once
                    }
                });
            },
            { threshold: 0.4 } // trigger when 40% of element is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-opacity duration-1000 ease-out ${isVisible ? "opacity-100" : "opacity-0"
                }`}
        >
            {children}
        </div>
    );
};

export default FadeInSection;