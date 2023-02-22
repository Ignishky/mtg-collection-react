import './Menu.css'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <div className="menu">
      <nav>
        <div>
          <Link to="/catalogue">Catalogue</Link>
        </div>
        <div>
          <Link to="/collection">Collection</Link>
        </div>
      </nav>
    </div>
  )
}
