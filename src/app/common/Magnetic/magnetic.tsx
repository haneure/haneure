import gsap from "gsap";
import React, { useEffect, useRef } from "react";

interface MagneticProps {
    children: React.ReactElement;
}

const Magnetic: React.FC<MagneticProps> = ({ children }) => {
    const magnetic = useRef<HTMLDivElement>(null);

    useEffect(() => {
        console.log(children);
        if (magnetic.current) {
            const xTo = gsap.quickTo(magnetic.current, "x", {
                duration: 1,
                ease: "elastic.out(1, 0.3",
            });
            const yTo = gsap.quickTo(magnetic.current, "y", {
                duration: 1,
                ease: "elastic.out(1, 0.3",
            });
    
            magnetic.current.addEventListener("mousemove", (e) => {
                const { clientX, clientY } = e;
                const { height, width, left, top } = magnetic.current?.getBoundingClientRect() ?? {
                    height: 0,
                    width: 0,
                    left: 0,
                    top: 0,
                };
                const x = clientX - (left + width / 2);
                const y = clientY - (top + height / 2);
                xTo(x * 0.35);
                yTo(y * 0.35);
            });
        }
    }, []);

    return React.cloneElement(children, { ref: magnetic });
};

export default Magnetic;
