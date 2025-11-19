import "./ServicosCards.css";
import { Link } from "react-router-dom";

function ServicosCards() {
    return (
        <section className="servicos-cards">
            <h1>Conheça nossos serviços</h1>
            <h2>Serviços de preço Júnior, com qualidade Sênior</h2>
            <div className="servicos-cards-container">
                <div className="card" style={{backgroundImage: 'url(/servicos/arqFundo.png)'}}>
                    <h3>Arquitetura e Urbanismo</h3>
                    <p>Criação de sites responsivos e aplicações web personalizadas.</p>
                </div>
                <Link to="/servicos" className="card" style={{backgroundImage: 'url(/servicos/compFundo.png)'}}>
                    <h3>Desenvolvimento e Tecnologia</h3>
                    <p>Estratégias de SEO, gestão de redes sociais e campanhas publicitárias.</p>
                </Link>
                <div className="card" style={{backgroundImage: 'url(/servicos/eleFundo.png)'}}>
                    <h3>Soluções Elétricas</h3>
                    <p>Assessoria para otimização de infraestrutura tecnológica e segurança da informação.</p>
                </div>
                <div className="card" style={{backgroundImage: 'url(/servicos/autoFundo.png)'}}>
                    <h3>Máquinas e Equipamentos </h3>
                    <p>Assessoria para otimização de infraestrutura tecnológica e segurança da informação.</p>
                </div>
                <div className="card" style={{backgroundImage: 'url(/servicos/negocFundo.png)'}}>
                    <h3>Gestão de Negócios</h3>
                    <p>Assessoria para otimização de infraestrutura tecnológica e segurança da informação.</p>
                </div>
            </div>
        </section>
    )
}

export default ServicosCards;