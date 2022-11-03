import './menu.css'
import { Link } from "react-router-dom"

function Menu() {
  return (
    <div className="menu">
      <nav>
        <div>
          <Link to="/sets">Catalogue</Link>
        </div>
        <div>
          <Link to="/collection">Collection</Link>
        </div>
      </nav>
    </div>
  )
}

export default Menu
