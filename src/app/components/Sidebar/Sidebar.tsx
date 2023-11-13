"use client";
import styles from "./Sidebar.module.css";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
    const router = useRouter();
    const pathName = usePathname();
    console.log(pathName);
    // const [menuActive, setMenuActive] = useState(false)

    return (
        <div className={`${styles.sidebar} flex flex-col justify-center`}>
            <div className="flex flex-col text-[0.8vw] font-bold h-[25vh] justify-center border border-green-500">
                <div
                    className={`${styles.menu} ${
                        pathName === "/home" ? styles.active : ""
                    }`}
                >
                    <Link href="/home">HOME</Link>
                </div>
                <div
                    className={`${styles.menu} ${
                        pathName === "/projects" ? styles.active : ""
                    }`}
                >
                    <Link href="/projects">PROJECTS</Link>
                </div>
                <div
                    className={`${styles.menu} ${
                        pathName === "/posts" ? styles.active : ""
                    }`}
                >
                    <Link href="/posts">POSTS</Link>
                </div>
            </div>
        </div>
    );
}
