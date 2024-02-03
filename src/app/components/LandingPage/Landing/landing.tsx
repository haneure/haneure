import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { slideUp } from "./animation";
import styles from "./style.module.scss";

const Landing = () => {
    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = -1;

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.25,
                start: 0,
                end: window.innerHeight,
                onUpdate: (e) => (direction = e.direction * -1),
            },
            x: "-500px",
        });
        requestAnimationFrame(animate);
    }, []);

    const animate = () => {
        if (xPercent <= -100) {
            xPercent = 0;
        }

        if (xPercent > 0) {
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
        requestAnimationFrame(animate);
        xPercent += 0.1 * direction;
    };

    return (
        <motion.main
            variants={slideUp}
            initial="initial"
            animate="enter"
            className={styles.landing}
        >
            <Image src="/images/background.jpg" fill={true} alt="background" />
            <div className={styles.sliderContainer}>
                <div ref={slider} className={styles.slider}>
                    <p ref={firstText}>Backend by day, Frontend by night -</p>
                    <p ref={secondText}>Backend by day, Frontend by night -</p>
                </div>
            </div>
        </motion.main>
    );
};

export default Landing;
