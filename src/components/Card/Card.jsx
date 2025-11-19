import "./Card.css";

function Card({nome = "Card", descricao = "Descrição do Card", backgroundImage}) {
    return (
        <section className="card-ampliado" style={{backgroundImage: backgroundImage}}>
            <h1>{nome}</h1>
            <p>{descricao}</p>
        </section>
    )
}
export default Card;