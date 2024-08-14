import React from "react";
import styles from "@/styles/NewsComponent.module.css"
import TestImage from "/public/images/background.png"
import Image from "next/image";

export default function NewsComponent() {
    return (
        <div className={styles.newsBlock}>
            <Image className={styles.newsPhoto} src={TestImage} alt={"Test Image"} width={250} height={250}/>
            <div className={styles.newsText}>
                <h1>Title</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque tempor venenatis.
                In vel mattis enim, id porttitor est. Duis aliquet vehicula mi in sollicitudin. Morbi nibh orci,
                imperdiet sit amet pellentesque ac, interdum sed massa.
                Pellentesque molestie urna venenatis, vestibulum tortor nec,
                porttitor dui. Mauris varius dolor sed porta vehicula. Praesent eget sem egestas, tempor lacus ac,
                convallis massa. Ut eleifend tristique ante quis tempor. Nullam rhoncus ligula egestas mi maximus,
                non ornare nulla maximus.
            </div>

        </div>
    )
}