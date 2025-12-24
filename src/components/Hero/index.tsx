import Image from "next/image";
import styles from "./hero.module.css";
import SocialLinks from "../SocialLinks";

export default function Hero() {
    return (
        <section className={styles.hero_container}>
            <div className={styles.hero_content}>
                <div className={styles.hero_texts}>
                    <div className={styles.hero_introduction}>
                        <h1>
                            Hello I’am <b>Evren Shah.</b><b> Frontend</b> <span className={styles.hero_developer}> Developer </span>
                            Based In <b>India.</b>
                        </h1>
                        <span className={styles.hero_description_text}>
                            I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                        </span>
                    </div>
                    <SocialLinks/>
                </div>
                <div className={styles.hero_image}>
                    <Image
                        src="/assets/images/hero_image.png"                
                        alt="Hero Image"
                        width={889}
                        height={596}
                    />
                </div>
            </div>
        </section>
    )
}