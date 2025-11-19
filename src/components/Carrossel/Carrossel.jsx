import "./Carrossel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

function Carrossel() {
    return (
        <section className="carrossel">
            <h1>Veja alguns de nossos projetos!</h1>
            <Swiper
                className="swiper-container"
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 8000, disableOnInteraction: false }}
                loop
                >
                <SwiperSlide className="swiper-slide">
                    <img src="/JK-MODAS-SITE.png" alt="Imagem Modas" />
                    <p>Tendo em vista a necessidade de aumentar sua visibilidade online, a JK Modas desejava fazer um site para venda online de roupas e acessórios. O cliente entra na plataforma, solicita o produto pelo site e realiza o pagamento no ato da entrega. O modelo de negócios funcionou muito bem e após a entrega do projeto, o investimento foi recuperado em uma semana.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/JMV-GLOBAL-SITE.png" alt="Imagem Global" />
                    <p>Reconstrução do site da JMV Global. Foi um projeto onde refizemos todo o site da empresa, acrescentando uma área para comercialização de cursos online, que foi solicitado devido a pandemia.</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/JMV-GLOBAL-SISTEMA-WEB.jpg" alt="Imagem Global Cadastro" />
                    <p>Sistema Web para geração de relatórios de segurança. Nesse projeto, elaboramos um sistema onde o usuário faz o cadastro de sua empresa e seus setores. O sistema retorna um relatório com informações sobre riscos no local de trabalho.</p>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Carrossel;