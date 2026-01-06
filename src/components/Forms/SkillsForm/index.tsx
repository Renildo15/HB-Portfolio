import styles from "./skill.module.css"
import { useDynamicInputs } from "@/src/hooks/useDynamicInputs";

export default function SkillsForm() {
    const { inputs, addTripleTextInput} = useDynamicInputs();    
    return (
        <div className={styles.skill_form}>
            <div className={styles.skill_form_texts}>
                <label htmlFor="">Título</label>
                <input type="text" name="" id="" placeholder="Título" />
            </div>
            <div className={styles.skill_form_skills}>
                <div className={styles.skill_form_skills_header}>
                    <label htmlFor="">Habilidades</label>
                    <a href="#" onClick={addTripleTextInput} className={styles.skill_form_skills_btn}>Adicionar +</a>
                </div>
                {inputs.map((i) => (
                    <input key={i.id} type={i.type} name={i.name} id={i.name} placeholder={i.label}/>
                ))}
            </div>
        </div>
    )
}