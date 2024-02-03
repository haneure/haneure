"use client";

import Magnetic from "@/app/common/Magnetic/magnetic";
import Rounded from "@/app/common/RoundedButton/rounded-button";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { usePathname } from "next/navigation";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Nav from "./Nav/nav";
import styles from "./style.module.scss";

const Header = () => {
    const pathname = usePathname();
    const [isActive, setIsActive] = useState(false);
    const header = useRef(null);
    const button = useRef(null);

    useEffect(() => {
        if (isActive) setIsActive(false);
    }, [pathname]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        console.log((window.innerHeight * 20) / 100);
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {
                    gsap.to(button.current, {
                        scale: 1,
                        duration: 0.25,
                        ease: "power1.out",
                    });
                },
                onEnterBack: () => {
                    gsap.to(
                        button.current,
                        { scale: 0, duration: 0.25, ease: "power1.out" },
                        setIsActive(false)
                    );
                },
            },
        });
    }, []);

    return (
        <>
            <div ref={header} className={styles.header}>
                <div className={styles.logo}>
                    <p className={styles.copyright}>©</p>
                    <div className={styles.name}>
                        <p className={styles.codeBy}>Code by</p>
                        <p className={styles.dennis}>Dennis</p>
                        <p className={styles.snellenberg}>Snellenberg</p>
                    </div>
                </div>

                <div className={styles.nav}>
                    <Magnetic>
                        <div className={styles.el}>
                            <a>Work</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a>About</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className={styles.el}>
                            <a>Contact</a>
                            <div className={styles.indicator}></div>
                        </div>
                    </Magnetic>
                </div>
            </div>

            <div ref={button} className={styles.headerButtonContainer}>
                <Rounded
                    onClick={() => {
                        setIsActive(!isActive);
                    }}
                    className={`${styles.button}`}
                >
                    <div
                        className={`${styles.burger} ${
                            isActive ? styles.burgerActive : ""
                        }`}
                    ></div>
                </Rounded>
            </div>
            <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
        </>
    );
};

export default Header;
