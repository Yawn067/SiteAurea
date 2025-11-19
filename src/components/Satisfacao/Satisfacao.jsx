import "./Satisfacao.css";

function Satisfacao() {
    return (
        <section className="satisfacao">
            <h1>Acelere a realização dos seus sonhos</h1>
            <p className="satisfacao-descricao">A Aurea é uma empresa sem fins lucrativos, composta 100% por estudantes graduandos do IFF Centro. Toda renda é reinvestida em conhecimento para nossos membros, através de cursos, equipamentos, infraestrutura e etc. Todos são voluntários e estão aqui para se desenvolver profissionalmente e realizar sonhos. Todos os nossos projetos são supervisionados por professores orientadores, que garantem a qualidade do mesmo! são 6 anos de existência realizando sonhos. E aí, o que podemos alcançar juntos?</p>
            <div className="satisfacao-container">
                <div className="satisfacao-item">
                    <h3>Vinícius</h3>
                    <p>"A qualidade de toda pesquisa foi excelente, a entrega de vocês foi tudo dentro daquilo que a gente esperava. Até nos surpreendemos com a entrega final, porque a maioria de vocês não teve contato com esse mercado. Falo por mim e pelos meus sócios."</p>
                </div>
                 <div className="satisfacao-item">
                    <h3>Marbelly</h3>
                    <p>"Muito obrigada pelo carinho, empatia, pelo atendimento de qualidade e tudo mais. Não as conheço pessoalmente mas o carinho foi de primeira. Vocês são profissionais incríveis e tem um futuro de sucesso pela frente. Espero fazer muitos outros projetos com vocês."</p>
                </div>
                 <div className="satisfacao-item">
                    <h3>Renata</h3>
                    <p>"Excelente Trabalho, a apresentação e a organização superou minhas expectativas! Parabéns a todos!"</p>
                </div>
            </div>
        </section>
    )
}

export default Satisfacao;