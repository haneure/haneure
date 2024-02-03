import Rounded from "@/app/common/RoundedButton/rounded-button";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { opacity, slideUp } from "./animation";
import styles from "./style.module.scss";

const Description = () => {
    const description = useRef(null);
    const isInView = useInView(description);

    const phrase =
        "こんにちわ! Hello! My name is Chris, a Software Engineer based in Indonesia. I'm a fresh graduate who currently work at Indobest Artha Kreasi mainly as a Web Developer Backend Engineer.";
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                    {phrase.split(" ").map((word, index) => {
                        return (
                            <span key={index} className={styles.mask}>
                                <motion.span
                                    variants={slideUp}
                                    custom={index}
                                    animate={isInView ? "open" : "closed"}
                                    key={index}
                                >
                                    {word}
                                </motion.span>
                            </span>
                        );
                    })}
                </p>
                <motion.p
                    variants={opacity}
                    animate={isInView ? "open" : "closed"}
                >
                    I strives to be a full-stack engineer who can adapt to many
                    new languages with ease and use it to solve real-life
                    problems with code.
                </motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    );
};

export default Description;
