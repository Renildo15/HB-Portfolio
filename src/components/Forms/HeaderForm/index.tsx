import styles from "./header.module.css"
import { useDynamicInputs } from "@/src/hooks/useDynamicInputs";

export default function HeaderForm() {
    const { inputs, addTripleTextInput} = useDynamicInputs();  
    return (
        <div className={styles.header_form}>
            <div className={styles.header_form_logo}>
                <label htmlFor="logo">Logo</label>
                <input type="file" name="logo" id="logo" accept="image/png, image/jpeg" />
            </div>
            <div className={styles.header_form_links}>
                <div className={styles.header_form_header}>
                    <span>Links</span>
                    <a href="#" onClick={addTripleTextInput} className={styles.header_form_btn_socials}>Adicionar +</a>
                </div>
                {inputs.map((i) => (
                    <div className={styles.header_form_link} key={i.name}>
                        <input type={i.type} name={i.name} id={i.name} placeholder={i.label}/>
                    </div>
                ))}
                
            </div>
            <div className={styles.header_form_button}>
                <label htmlFor="logo">Botão do Curriculo</label>
                <input type="text" placeholder="Texto do botão" />
                <input type="text" placeholder="Icone do botão" />
                <input type="text" placeholder="Link do botão" />
            </div>
        </div>
    )
}