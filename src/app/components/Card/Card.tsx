import Image from "next/image";
import React from "react";
import styles from "./Card.module.css";

export default function Card() {
    return (
        <div className={`${styles.card}`}>
            <div className={styles.wrapper}>
                <Image
                    src={"/hero/dark_rider-cover.jpg"}
                    className={styles["cover-image"]}
                    width={0}
                    height={0}
                    sizes="100vw"
                    alt={"Hero"}
                />
            </div>
            <Image
                src={"/hero/dark_rider-title.png"}
                className={styles.title}
                width={0}
                height={0}
                sizes="100vw"
                alt={"Title"}
            />
            <Image
                src={"/hero/dark_rider-character.webp"}
                className={styles.character}
                width={0}
                height={0}
                sizes="100vw"
                alt={"Hero"}
            />
        </div>
    );
}
