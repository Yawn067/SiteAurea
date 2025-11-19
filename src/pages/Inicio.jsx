import Slogan from "../components/Slogan/Slogan";
import ServicosCards from "../components/ServicosCards/ServicosCards";
import Satisfacao from "../components/Satisfacao/Satisfacao"; 
import Parcerias from "../components/Parcerias/Parcerias";

function Inicio() {
  return (
    <>
      <main style={{padding: "30px", marginTop: "5%"}}>
        <Slogan/>
        <ServicosCards/>
        <Satisfacao/>
        <Parcerias/>
      </main>
    </>
);
}
export default Inicio;