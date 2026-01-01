import { useState } from "react";
import styles from "./header.module.css"

type InputType = {
    id: string;
    type: "text";
    label: string;
    name: string;
}

export default function HeaderForm() {
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
        <div className={styles.header_form}>
            <div className={styles.header_form_logo}>
                <label htmlFor="logo">Logo</label>
                <input type="file" name="logo" id="logo" accept="image/png, image/jpeg" />
            </div>
            <div className={styles.header_form_links}>
                <div className={styles.header_form_header}>
                    <span>Links</span>
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>)=>handleAddLinkInput(e)}>Adicionar +</button>
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