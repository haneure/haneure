"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import Loader from "@/app/components/Loader/Loader";
import Link from "next/link";
import RootLayout from "./layout";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Description from "./components/LandingPage/Description/description";
import Landing from "./components/LandingPage/Landing/landing";
import Projects from "./components/LandingPage/Projects/projects";
import styles from "./page.module.scss";
import SlidingImages from "./components/LandingPage/SlidingImages/sliding-images";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;
            const locomotiveScroll = new LocomotiveScroll();

            setTimeout(() => {
                setIsLoading(false);
                document.body.style.cursor = "default";
                window.scrollTo(0, 0);
            }, 2000);
        })();
    }, []);
    return (
        <main className={styles.main}>
            <Landing />
            <Description />
            <Projects />
            <SlidingImages />
        </main>
    );
}
