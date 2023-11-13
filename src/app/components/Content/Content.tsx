import React from "react";
import { Crown } from "lucide-react";
import decoration from "../Decoration/Decoration.module.css";

const card = {
    src: "/dark_rider-cover.jpg",
    Title: "Title",
};

export default function Content({children, caption = "Hello, nice to meet you"}: any) {
    return (
        <>
        <div className={decoration.line}></div>
        <div className={decoration.line2}></div>
            <div className="relative bg-pink-400 flex-1 items-center justify-end ">
                <div className="absolute left-0 top-[-2.5vh]">
                    <div className="flex mb-[0.2vh] items-center justify-center">
                        <div className="block w-[1vw] ml-[0.5vw]">
                            <Crown
                                style={{
                                    width: "100%",
                                    height: "min-content",
                                }}
                            />
                        </div>
                        <p className="ml-[1.6vw] text-[0.5vw]">
                            {caption}
                        </p>
                    </div>
                </div>
                {children}
            </div>
        </>
    );
}
