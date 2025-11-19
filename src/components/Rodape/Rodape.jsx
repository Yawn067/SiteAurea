import './Rodape.css';

function Rodape() {
    return (
        <footer className="rodape">
            <section className='rodape-elementos'>
                <img src="/Prancheta 4.png" alt="Logo Aurea" />
                <div className='rodape-elementos-infos'>
                    <p>Endereço: R. Dr. Siqueira, 273 - Parque Dom Bosco, Campos dos Goytacazes - RJ, 28030-130 IFF Sala G-02</p>
                    <p>Whatsapp: (22) 99815-7124</p>
                    <p>CNPJ: 27.447.124/0001-76</p>
                    <div>
                        <a href="https://www.instagram.com/aureaej/" target="_blank"><img src="/instagram.png" alt="Instagram" /></a>
                        <a href="https://www.facebook.com/aureaej" target="_blank"><img src="/facebook.png" alt="Facebook" /></a>
                        <a href="https://www.linkedin.com/company/aureaej/" target="_blank"><img src="/linkedin.png" alt="Linkedin" /></a>
                    </div>
                </div>
            </section>
            <p>Desenvolvido por Yann Matias com React.js</p>
        </footer>
    )
}

export default Rodape;