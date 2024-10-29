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


    return <section {...{ ...props, className: undefined }} className={cn("py-16  px-6 sm:px-12 md:px-24 lg:px-6 xl:px-2 opacity-0 translate-y-44 transition duration-700 ease-out", props.className)} ref={sectionRef}>
        {props.children}
    </section>
}