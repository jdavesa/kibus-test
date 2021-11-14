import {useState, useEffect} from 'react'
import kibusLogo from "../images/kibus-logo.svg";
import { RightCircleOutlined } from "@ant-design/icons";
import RecipesCard from "../components/Recipes";
import CarouselElement from "../components/Carousel";
import Footer from "../components/Footor";
import icon1 from "../images/icons/icon-1.png";
import icon2 from "../images/icons/icon-2.png";
import icon3 from "../images/icons/icon-3.png";
import icon4 from "../images/icons/icon-4.png";
import icon5 from "../images/icons/icon-5.png";
import icon6 from "../images/icons/icon-6.png";
import kibusProduct from "../images/kibus-product.png";
import kibusProductMobile from "../images/dispositivo.png";

function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleScroll = () => setOffsetY(window.pageYOffset);
  const handleSize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventLinstener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    return () => window.addEventListener("resize", handleSize);
  }, []);

  return (
    <div className="home-page">
      <div className="nav-logo">
        <img className="kibus-logo" src={kibusLogo} alt="kibus-logo" />
      </div>
      <div className="section-one">
        <div className="section-one-text">
          <h1>
            Alimentar bien a tu perro es más fácil que nunca
            <span style={{ color: "#EE7333" }}>.</span>
          </h1>
          <h3>
            La nueva alimentación canina ha llegado. Con Kibus, podrás ofrecer a
            tu compañero comida sana, rica y recién cocinada de una forma fácil
            y cómoda.
          </h3>
          <button className="button-reservar">Reservar Ahora</button>
          <button className="button-saber-mas">
            Quiero Saber Más
            <RightCircleOutlined
              style={{
                marginLeft: "10px",
                verticalAlign: "middle",
                marginBottom: "3px",
              }}
            />
          </button>
        </div>
        <div className="section-one-image">
          <img
            src="https://www.kibuspetcare.com/wp-content/uploads/2021/03/cabecera-kibus.png"
            alt="section-one-dog"
          />
        </div>
      </div>
      <RecipesCard />
      <div className="section-two">
        <div className="carousel-element">
          <CarouselElement />
        </div>
        <div className="section-two-text">
          <h3>Mejor para ellos, más fácil y cómodo para ti</h3>
          <p>
            Con Kibus, nunca tendrás que preocuparte de cómo ofrecer una dieta
            sana y natural a tu perro de forma cómoda y rápida. Nuestro
            dispositivo cocina automáticamente la cantidad exacta en cada comida
            e incluso lo puedes programar a través de la app. Tu perro
            disfrutará comida de casera de primera calidad, con el mínimo
            esfuerzo.
          </p>
          <button className="button-reservar">Reservar Ahora</button>
          <button className="button-saber-mas">
            Quiero Saber Más
            <RightCircleOutlined
              style={{
                marginLeft: "10px",
                verticalAlign: "middle",
                marginBottom: "3px",
              }}
            />
          </button>
        </div>
      </div>
      <div className="section-three">
        <ul>
          <li>
            <img src={icon1} alt="icon-1" />
            <h3>Programmable 24h</h3>
          </li>
          <li>
            <img src={icon2} alt="icon-2" />
            <h3>Agua siempre disponible</h3>
          </li>
          <li>
            <img src={icon3} alt="icon-3" />
            <h3>Cantidad personalizable</h3>
          </li>
          <li>
            <img src={icon4} alt="icon-4" />
            <h3>Histórial de las comidas</h3>
          </li>
          <li>
            <img src={icon5} alt="icon-5" />
            <h3>Fácil de usar y lavar</h3>
          </li>
          <li>
            <img src={icon6} alt="icon-6" />
            <h3>App para iOS y Android</h3>
          </li>
        </ul>
        <div>
          <img src={windowWidth > 768 ? kibusProduct : kibusProductMobile} alt="kibus-producto" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
