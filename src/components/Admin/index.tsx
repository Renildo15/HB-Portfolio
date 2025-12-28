'use client';

import { useRouter } from "next/navigation";
import styles from './admin.module.css';

export default function Admin() {
    const router = useRouter();
    const handleLogout = async () => {
        const res = await fetch('/api/auth/logout', {
            method: 'POST',
        });
        
        if (res.ok) {
           router.push("/admin")
        } else {
            alert("Erro ao fazer logout");
        }
    }
    return (
        <main className={styles.container}>
           <header className={styles.header}>
            <div className={styles.logo}>Logo</div>
            <div className={styles.userActions}>
                <span>Admin</span>
                <button onClick={handleLogout}>Logout</button>
            </div>
           </header>
           <div className={styles.content}>
            <div className={styles.stats}>
                <div className={styles.stat}>
                    <span>0</span>
                    <span>Visitas</span>
                </div>

                <div className={styles.stat}>
                    <span>0</span>
                    <span>Curriculos baixados</span>
                </div>

                <div className={styles.stat}>
                    <span>0</span>
                    <span>Seções</span>
                </div>

                <div className={styles.stat}>
                    <span>0</span>
                    <span>Projetos</span>
                </div>

                <div className={styles.stat}>
                    <span>0</span>
                    <span>Habilidades</span>
                </div>

                <div className={styles.stat}>
                    <span>0</span>
                    <span>Contatos</span>
                </div>

            </div>
            <div className={styles.sections}>
                <div className={styles.sectionsHeader}>
                    <h2>Seções</h2>
                    <button >Adicionar seção</button>
                </div>

                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sobre mim</td>
                            <td>
                                <button>Editar</button>
                                <button>Excluir</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
           </div>
        </main>
    )
}