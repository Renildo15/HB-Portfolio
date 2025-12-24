import Image from 'next/image';
import styles from './about.module.css';

export default function AboutMe() {
    return(
        <section className={styles.section_aboutme} id="aboutme">
            <div className={styles.container_aboutme}>
               
                <div className={styles.aboutme_content}>
                     <Image
                        src="/assets/images/about_image.png"   
                        alt="Google Logo"
                        width={525}
                        height={572}
                    />
                    <div className={styles.aboutme_texts}>
                        <h1>About <b>Me</b></h1>
                        <p>
                        I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
                        </p>
                        <p>
                            I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                        </p>

                        <p>
                            When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}