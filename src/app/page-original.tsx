"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import Loader from "@/app/components/Loader/Loader";
import Link from "next/link";

import gsap from "gsap";

export default function Home() {
    const [loaderFinished, setLoaderFinished] = useState(false);
    const [timeline, setTimeline] = useState<any>(null);

    //   const addDataIntoCache = (cacheName, url, response) => {
    //     // Converting our response into Actual Response form
    //     const data = new Response(JSON.stringify(response));
    //     console.log(data);
    //     if ("caches" in window) {
    //         // Opening given cache and putting our data into it
    //         caches.open(cacheName).then((cache) => {
    //             cache.put(url, data);
    //             alert("Data Added into cache!");
    //         });
    //     }
    // };

    useEffect(() => {
        if (loaderFinished) {
            let loadingState = localStorage.getItem("loadingState");
            if (loadingState === null) {
                // localStorage.setItem("loadingState", "true");
            }
        }
    }, [loaderFinished]);

    // const getLoadingState = () => {
    // return localStorage.getItem("loadingState");
    // };

    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => setLoaderFinished(true),
            });

            setTimeline(tl);
        });

        return () => context.revert();
    }, []);

    return (
        <main>
            {loaderFinished ? (
                <div className="flex flex-col h-screen items-center justify-center">
                    <div className="">
                        <Link href="/home">Home</Link>
                    </div>
                </div>
            ) : (
                <Loader timeline={timeline} />
            )}
        </main>
    );
}
