export default function Admin() {
    return (
        <main>
           <header>
            <div>Logo</div>
            <div>
                <span>Admin</span>
                <button>Logout</button>
            </div>
           </header>
           <div>
            <div>
                <div>
                    <span>0</span>
                    <span>Visitas</span>
                </div>

                <div>
                    <span>0</span>
                    <span>Curriculos baixados</span>
                </div>

                <div>
                    <span>0</span>
                    <span>Seções</span>
                </div>

                <div>
                    <span>0</span>
                    <span>Projetos</span>
                </div>

                <div>
                    <span>0</span>
                    <span>Habilidades</span>
                </div>

                <div>
                    <span>0</span>
                    <span>Contatos</span>
                </div>

            </div>
            <div>
                <div>
                    <h2>Seções</h2>
                    <button>Adicionar seção</button>
                </div>

                <table>
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