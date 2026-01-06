import { useState } from "react";
import styles from "./hero.module.css"
import { InputType } from "@/src/types/input";

export default function HeroForm() {
    const [inputs, setInputs] = useState<InputType[]>([]);

    const handleAddLinkInput = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        const newId = Date.now();
        
        const newLabelInput: InputType = {
            id: newId + "-label",
            label: "Nome",
            name: `label-link-${inputs.length}`,
            type: "text"
        }

        const newLinkInput: InputType = {
            id: newId + "-link",
            label: "Link",
            name: `link-${inputs.length}`,
            type: "text"
        }

        const newIconInput: InputType = {
            id: newId + "-icon",
            label: "Icon",
            name: `icon-link-${inputs.length}`,
            type: "text"
        }

        setInputs(prev => [...prev, newLabelInput, newLinkInput, newIconInput]);
    }
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
                    <button onClick={(e) => handleAddLinkInput(e)} className={styles.hero_form_btn_socials}>Adicionar +</button>
                </div>
                {inputs.map((i) => (
                    <input key={i.id} type={i.type} name={i.name} id={i.name} placeholder={i.label}/>
                ))}
            </div>
        </div>
    )
}