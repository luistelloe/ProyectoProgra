import './Header.css'
import imgLogo from '../../assets/DemonSlayerLogo.png'

const Header = () => {
  const irInicio = () => {
    window.location.href = '/';
  };

  return (
    <header>
      <div className="contenedorLogo" onClick={irInicio}>
        <img src={imgLogo} alt="Logo Demon Slayer" />
      </div>

      <div className="contenedorBuscar">
        <input className="buscar" type="text" placeholder="Buscar..." />
      </div>

      <nav className="menu">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Juegos</a></li>
          <li><a href="#">Ofertas</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
