import './Destacados.css'
import gta from '../../assets/gta.png'
import fc26 from '../../assets/fc26.png'
import cod from '../../assets/blackops.png'

const Destacados = () => {
  return (
    <section className="destacados">
      <h2>Juegos destacados</h2>
      <div className="grid-juegos">
        <div className="juego">
          <img src={gta} alt="GTA V" />
          <h3>GTA V</h3>
          <p>$29.99</p>
          <button>Comprar</button>
        </div>

        <div className="juego">
          <img src={fc26} alt="EA FC 26" />
          <h3>EA FC 26</h3>
          <p>$49.99</p>
          <button>Comprar</button>
        </div>

        <div className="juego">
          <img src={cod} alt="Call of Duty" />
          <h3>Call of Duty Black Ops 6</h3>
          <p>$39.99</p>
          <button>Comprar</button>
        </div>
      </div>
    </section>
  );
};

export default Destacados;
