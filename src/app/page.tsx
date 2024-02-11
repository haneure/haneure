"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import Loader from "@/app/components/Loader/Loader";
import Link from "next/link";
import RootLayout from "./layout";

import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Contact from "./components/LandingPage/Contact/contact";
import Description from "./components/LandingPage/Description/description";
import Landing from "./components/LandingPage/Landing/landing";
import Preloader from "./components/LandingPage/Preloader/preloader";
import Projects from "./components/LandingPage/Projects/projects";
import SlidingImages from "./components/LandingPage/SlidingImages/sliding-images";
import styles from "./page.module.scss";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;
            const locomotiveScroll = new LocomotiveScroll();
            var htmlElement = document.documentElement;

            if (htmlElement) {
                htmlElement.style.overflowY = "hidden";
            }

            // There is no data fetching, so we can simulate the loading with setTimeout
            setTimeout(() => {
                setIsLoading(false);
                document.body.style.cursor = "default";

                setTimeout(() => {
                    if (htmlElement) {
                        htmlElement.style.overflowY = "visible";
                    }
                }, 900);
                window.scrollTo(0, 0);
            }, 2000);
        })();
    }, []);

    // useEffect(() => {
    //     (async () => {
    //         const LocomotiveScroll = (await import("locomotive-scroll"))
    //             .default;
    //         const locomotiveScroll = new LocomotiveScroll();

    //         setTimeout(() => {
    //             setIsLoading(false);
    //             document.body.style.cursor = "default";
    //             window.scrollTo(0, 0);
    //         }, 2000);
    //     })();
    // }, []);
    return (
        <main className={styles.main}>
            <AnimatePresence mode="wait">
                {isLoading && <Preloader />}
            </AnimatePresence>
            <Landing />
            <Description />
            <Projects />
            <SlidingImages />
            <Contact />
        </main>
    );
}
