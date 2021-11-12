import {
  InstagramOutlined,
  YoutubeOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import creditCards from "../images/tarjetas.png";
import kibusIcon from "../images/kibus-icon.png";

function Footer() {
  return (
    <footer>
      <div className="footer-icon">
        <img src={kibusIcon} alt="kibus-icon" />
      </div>
      <div className="footer-info">
        <div>
          <h2>Sobre KIBUS</h2>
          <p>
            El primer dispositivo que cocina automáticamente para tu perro una
            dieta sana y natural
          </p>
        </div>
        <div>
          <h2>Políticas</h2>
          <ul>
            <li>Políticas de Privacidad</li>
            <li>Condiciones de uso</li>
            <li>Cookies</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <a>
            <FacebookOutlined />
          </a>
          <a>
            <InstagramOutlined />
          </a>
          <a>
            <YoutubeOutlined />
          </a>
        </div>
        <div>
          <h2>Métodos de pago</h2>
          <img src={creditCards} alt="credit-cards" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
