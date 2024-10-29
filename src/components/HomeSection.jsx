import { useEffect, useRef } from "react"
import { cn } from "../lib/utils"

export default function HomeSection(props) {
    const sectionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("opacity-100", "translate-y-0");
                        entry.target.classList.remove("opacity-0", "translate-y-44");
                        observer.unobserve(entry.target); // Stop observing once the element is visible
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the section is in view
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);


    return <section {...{ ...props, className: undefined }} className={cn("py-16 px-10 sm:px-20 2xl::px-10 opacity-0 translate-y-44 transition duration-1000 ease-out", props.className)} ref={sectionRef}>
        {props.children}
    </section>
}