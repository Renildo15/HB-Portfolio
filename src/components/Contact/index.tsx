import SocialLinks from "../SocialLinks";
import styles from "./contact.module.css";

export default function Contact() {
    return (
        <section className={styles.section_contact} id="contact">
            <div className={styles.container_contact}>
                <form className={styles.form_contact}>
                    <input type="text" placeholder="Your name" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Your website (If exists)" />
                    <textarea name="message" id="message" placeholder="How can I help?*"></textarea>
                    <div className={styles.form_contact_actions}>
                        <button type="submit" className={styles.form_contact_button}>
                            Get In Touch
                        </button>
                        <SocialLinks/>
                    </div>
                </form>
                <div className={styles.contact_info}>
                    <div className={styles.contact_info_title}>
                        <h1>Let’s talk for</h1>
                        <h1>Something special</h1>
                    </div>

                    <span className={styles.contact_info_description}>
                        I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
                    </span>

                    <div className={styles.contact_info_details}>
                        <span>Youremail@gmail.com</span>
                        <span>1234567890</span>
                    </div>
                </div>
            </div>
        </section>
    )
}