import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";

export default function Footer() {
    const pathName = usePathname();

    const footer = () => {
        switch (pathName) {
            case "/home":
                return "Home ・";
            case "/projects":
                return "Projects ・";
            case "/posts":
                return "Posts ・";
        }
    };

    // const footer = () => {
    //     return pathName.charAt(1).toUpperCase() + pathName.slice(2) + " ・";
    // };

    return (
        <footer className={`${styles.footer} shadow-md`}>
            <div className="bottom-part">
                <div className={`${styles.block}`}></div>
                <div
                    className={`${styles["block-text"]} font-bold text-[1.4vh] font-sans tracking-wide`}
                >
                    {footer()}
                </div>
                <div className={`${styles["circle"]}`}></div>
            </div>
        </footer>
    );
}
