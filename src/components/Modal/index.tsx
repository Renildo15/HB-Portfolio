import { useEffect, useState } from "react"
import styles from "./modal.module.css"

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

                <div className={styles.form}>
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
                </div>

                <div className={styles.actions}>
                    <button className={styles.save}>Salvar</button>
                    <button onClick={() => props.setShowModal(false)} className={styles.cancel}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}