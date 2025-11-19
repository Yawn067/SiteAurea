import './Cabecalho.css'
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Cabecalho() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className="cabecalho">
            <Link to="/"><img src="/public/logoHeader1.png" alt="Imagem Banner"/></Link>
            <button
                className="menu-hamburguer"
                onClick={() => setMenuAberto(!menuAberto)}
                aria-label="Alternar menu de navegação"
            >
                &#9776;
            </button>
            <ul className={menuAberto ? "ativo" : ""}>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/sobre">Sobre Nós</Link></li>
                <li><Link to="/servicos">Serviços</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </header>
    )
}

export default Cabecalho