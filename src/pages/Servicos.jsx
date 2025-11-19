import Carrossel from "../components/Carrossel/Carrossel";
import Card from "../components/Card/Card";
import "./Servicos.css"

function Servicos() {
  return (
    <>
      <Card
        nome="Desenvolvimento e tecnologia"
        descricao="Desenvolvendo seus sonhos"
        backgroundImage={'url(/servicos/compFundo.png)'}
      />

      <div className="servicos-texto">
        <h2>WebSites</h2>
        <p>Hoje em dia todo mundo pesquisa online antes de contratar alguém, não é? Justamente por isso, ter um website moderno e que mostre a personalidade da sua empresa pode ser o que faltava para fechar aquele contrato. Deixe que cuidamos disso!</p>
        <h2>Aplicativo móvel</h2>
        <p>Já parou para pensar na quantidade de coisas que fazemos por meio de aplicativos móveis? Transporte, compras, redes sociais, assistir vídeos e ouvir músicas. Agora só falta a sua empresa! Temos exatamente o que você precisa para deixar a sua marca a um toque dos seus clientes!</p>
        <h2>E-commerce</h2>
        <p>Pesquisas apontam que o e-commerce cresceu 75% em meio a pandemia, pois com mais pessoas em casa, as demandas para o comércio virtual cresceram exponencialmente. O momento para a sua marca se expor ao mundo é agora, e nós temos a solução para a sua empresa! Sua loja virtual ficará disponível 24/7, com design inovador e fluidez, para maximizar suas vendas.</p>
        <h2>Consultoria/outros serviços</h2>
        <p>Gostaria de saber o que poderia melhorar no seu negócio na área tecnológica? Possui um website, e-commerce ou aplicativo móvel que precisa de uma repaginada? Ou ainda, gostaria de saber se realizamos outro tipo de serviço? Nós podemos te ajudar, entre em contato conosco!</p>
      </div>
      <Carrossel/>
    </>
  )
}
export default Servicos;