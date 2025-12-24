import Image from 'next/image'
import styles from './project.module.css'

export default function Project() {
    return <section className={styles.section_project}>
        <div className={styles.container_project}>
            <h1>My <b>Projects</b></h1>
            <div className={styles.project_items}>
                <div className={styles.project_item}>
                    <Image
                        src="/assets/images/p_image_1.png"                
                        alt="Hero Image"
                        width={530}
                        height={398}
                    />
                    <div className={styles.project_item_info}>
                        <span className={styles.project_item_number}>01</span>
                        <span className={styles.project_item_title}>Crypto Screener Application</span>
                        <span className={styles.project_item_description}>I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8335 9.16671L17.6668 2.33337" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.3335 5.66663V1.66663H14.3335" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </div>
                </div>

                <div className={[styles.project_item, styles.project_item_middle].join(' ')}>
                    <Image
                        src="/assets/images/p_image_2.png"                
                        alt="Hero Image"
                        width={530}
                        height={398}
                    />
                    <div className={styles.project_item_info}>
                        <span className={styles.project_item_number}>02</span>
                        <span className={styles.project_item_title}>Euphoria - Ecommerce (Apparels) Website Template</span>
                        <span className={styles.project_item_description}>I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
when an unknown printer took a galley of type and scrambled it to specimen book.</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8335 9.16671L17.6668 2.33337" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.3335 5.66663V1.66663H14.3335" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </div>
                </div>

                <div className={styles.project_item}>
                    <Image
                        src="/assets/images/p_image_3.png"                
                        alt="Hero Image"
                        width={530}
                        height={398}
                    />
                    <div className={styles.project_item_info}>
                        <span className={styles.project_item_number}>03</span>
                        <span className={styles.project_item_title}>Blog Website Template</span>
                        <span className={styles.project_item_description}>I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.8335 9.16671L17.6668 2.33337" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.3335 5.66663V1.66663H14.3335" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                    </div>
                </div>
            </div>
        </div>
    </section>
}