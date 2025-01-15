import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>
      <Link to="/">
          <img className="pilt" src="https://cuadriciclos.es/wp-content/uploads/2023/07/Nobe-100-1-1-1024x576.jpg" alt="" />
        </Link>
        <Link to="/ostukorv">
          <button>Ostukorvi</button>
        </Link>
        <Link to="/osta-kinkekaart">
          <button>Osta kinkekaart</button>
        </Link>
        <Link to="/lisa-toode">
          <button>Lisa toode</button>
        </Link>
        <Link to="/seaded">
          <button>Seaded</button>
        </Link>
        <Link to="/esindused">
          <button>Esindused</button>
        </Link>
        <Link to="/kalkulaator">
          <button>Kalkulaator</button>
        </Link>
    </div>
  )
}

export default Menu