import AboutMe from "../AboutMe";
import Contact from "../Contact";
import Experience from "../Experience";
import Footer from "../Footer";
import Header from "../Header";
import Hero from "../Hero";
import Project from "../Project";
import Skills from "../Skills";
import styles from "./main.module.css";

export default function Main() {
    return (
         <div className={styles.main_container}>
            <main className={styles.main_content}>
                <Header/>
                <Hero/>
                <Skills/>
                <Experience/>
                <AboutMe/>
                <Project/>
                <Contact/>
                <Footer/>
            </main>
        </div>
    )
}