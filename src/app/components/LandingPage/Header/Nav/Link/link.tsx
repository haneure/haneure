import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { scale, slide } from "../../animation";
import styles from "./style.module.scss";

const NavLink = ({ data, isActive, setSelectedIndicator }) => {
    const { title, href, index } = data;

    return (
        <motion.div
            className={styles.link}
            onMouseEnter={() => {
                setSelectedIndicator(href);
            }}
            custom={index}
            variants={slide}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            <motion.div
                className={styles.indicator}
                variants={scale}
                animate={isActive ? "open" : "closed"}
            ></motion.div>
            <Link href={href}>{title}</Link>
        </motion.div>
    );
};

export default NavLink;
