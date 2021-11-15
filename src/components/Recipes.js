import { RightOutlined } from "@ant-design/icons";

function RecipesCard() {
  return (
    <div className="recipes-container">
      <div className="recipes-card">
        <div className="recipe-card">
          <img
            src="https://www.kibuspetcare.com/wp-content/uploads/2021/03/salmon-cenital-alpha-800x800-1.png"
            alt="Kibus-receta-3-1"
          />
          <h3>Pollo y Pimienta</h3>
          <p>Energética, con ingredientes antioxidantes</p>
        </div>
        <div className="recipe-card">
          <img
            src="https://www.kibuspetcare.com/wp-content/uploads/2021/03/cerdo-cenital-apha-800x800-1.png"
            alt="Kibus-receta-1-1"
          />
          <h3>Salmón y Arroz</h3>
          <p>Hipoalergénica, con Omega 3 y 6</p>
        </div>
        <div className="recipe-card">
          <img
            src="https://www.kibuspetcare.com/wp-content/uploads/2021/03/pollo-cenital-alpha-800x800-1.png"
            alt="Kibus-receta-2-1"
          />
          <h3>Cerdo y Calabaza</h3>
          <p>Para dar vitalidad, buena para el sistema inmune</p>
        </div>
        <div className="recipe-card">
          <img
            src="https://www.kibuspetcare.com/wp-content/uploads/2021/03/salmon-cenital-alpha-800x800-1.png"
            alt="Kibus-receta-3-1"
          />
          <button>
            Tu Receta
            <RightOutlined style={{ marginLeft: "5px" }} />
          </button>
          <p>Ayúdanos a decidir nuestra nueva receta</p>
        </div>
      </div>
    </div>
  );
}
export default RecipesCard;
