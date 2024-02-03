import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { menuSlide } from "../animation";
import Curve from "./Curve/curve";
import Footer from "./Footer/footer";
import NavLink from "./Link/link";
import styles from "./style.module.scss";

const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Work",
        href: "/work",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];

const Nav = () => {
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);

    return (
        <motion.div
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className={styles.menu}
        >
            <div className={styles.body}>
                <div
                    onMouseLeave={() => {
                        setSelectedIndicator(pathname);
                    }}
                    className={styles.nav}
                >
                    <div className={styles.header}>
                        <p>Navigation</p>
                    </div>
                    {navItems.map((data, index) => {
                        return (
                            <NavLink
                                key={index}
                                data={{ ...data, index }}
                                isActive={selectedIndicator == data.href}
                                setSelectedIndicator={setSelectedIndicator}
                            ></NavLink>
                        );
                    })}
                </div>
                <Footer />
            </div>
            <Curve />
        </motion.div>
    );
};

export default Nav;
