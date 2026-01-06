import styles from "./hero.module.css"
import { useDynamicInputs } from "@/src/hooks/useDynamicInputs";

export default function HeroForm() {
    const { inputs, addTripleTextInput} = useDynamicInputs();    
    return (
        <div className={styles.hero_form}>
            <div className={styles.hero_form_texts}>
                <label htmlFor="">Textos</label>
                <input type="text" name="" id="" placeholder="Título" />
                <textarea name="" id="" placeholder="Descrição" />
            </div>
            <div className={styles.hero_form_logo}>
                <label htmlFor="image">Imagem</label>
                <input type="file" name="image" id="image" accept="image/png, image/jpeg" />
            </div>
            <div className={styles.hero_form_socials}>
                <div className={styles.hero_form_socials_header}>
                    <label htmlFor="">Redes sociais</label>
                    <a href="#" onClick={addTripleTextInput} className={styles.hero_form_btn_socials}>Adicionar +</a>
                </div>
                {inputs.map((i) => (
                    <input key={i.id} type={i.type} name={i.name} id={i.name} placeholder={i.label}/>
                ))}
            </div>
        </div>
    )
}