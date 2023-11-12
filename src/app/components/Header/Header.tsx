import { Linkedin, Github, Share2, Globe2, Crown } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={`${styles.header} shadow-md  px-[2vw]`}>
            <div className="wrapper flex w-full h-full">
                <div className="flex items-end gap-10">
                    <div className="flex gap-[1vw] mb-[1.5vh]">
                        <div>
                            <a
                                className="w-[1.5vw] block"
                                href="https://www.linkedin.com/in/haneure/"
                            >
                                <Linkedin
                                    style={{
                                        width: "100%",
                                        height: "min-content",
                                    }}
                                />
                            </a>
                        </div>
                        <div>
                            <a
                                className="w-[1.5vw]  block"
                                href="https://github.com/haneure/"
                            >
                                <Github
                                    style={{
                                        width: "100%",
                                        height: "min-content",
                                    }}
                                />
                            </a>
                        </div>
                        <div>
                            <a
                                className="w-[1.5vw]  block"
                                href="https://github.com/haneure/"
                            >
                                <Share2
                                    style={{
                                        width: "100%",
                                        height: "min-content",
                                    }}
                                />
                            </a>
                        </div>
                        <div>
                            <a
                                className="w-[1.5vw] block"
                                href="https://github.com/haneure/"
                            >
                                <Globe2
                                    style={{
                                        width: "100%",
                                        height: "min-content",
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
