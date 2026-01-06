import { JSX, useEffect, useState } from "react"
import styles from "./modal.module.css"
import HeaderForm from "../Forms/HeaderForm";
import HeroForm from "../Forms/HeroForm";
import SkillsForm from "../Forms/SkillsForm";

type SectionType = {
    id: number;
    name: string;
};

interface IModalProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal(props: IModalProps) {
    const [name, setName] = useState("");
    const [sectionTypes, setSectionTypes] = useState<SectionType[]>([]);
    const [selectedType, setSelectedType] = useState("");
    const [defaultForm, setDefaultForm] = useState<JSX.Element | undefined>(undefined);

    useEffect(() => {
        switch (selectedType) {
            case "1":
                setDefaultForm(<HeaderForm/>);
                break;
            case "2":
                setDefaultForm(<HeroForm/>);
                break;
            case "3":
                setDefaultForm(<SkillsForm/>);
                break;
            default:
                setDefaultForm(undefined);
                break;
        }
    }, [selectedType]);

    useEffect(() => {
        const getSectionTypes = async () => {
            try {
                const res = await fetch("/api/sections/types");

                if (!res.ok) {
                    throw new Error("Erro ao buscar tipos de seção");
                }

                const data = await res.json();
                setSectionTypes(data.section_types);
            } catch (error) {
                console.error(error);
            }
        };
        getSectionTypes();
    },[]);

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h3 className={styles.title}>Nova seção</h3>

                <form className={styles.form}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Nome da seção"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <select
                        className={styles.select}
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                    >
                        <option value="">Selecione o tipo da seção</option>

                        {sectionTypes.map((type) => (
                            <option key={type.id} value={type.id}>
                                {type.name}
                            </option>
                        ))}
                    </select>
                   {defaultForm}
                </form>

                <div className={styles.actions}>
                    <button className={styles.save}>Salvar</button>
                    <button onClick={() => props.setShowModal(false)} className={styles.cancel}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}