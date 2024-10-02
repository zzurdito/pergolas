import logo from '../images/cropped-logo-pergolas-canor-1.webp'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="logo navbar-brand" href="#"><img src={logo} alt="Logo" /></a>
            <div className="collapse navbar-collapse d-flex justify-content-evenly" id="navbarNav">
            <ul className="navbar-nav">
                <Link to='/home'>Inicio</Link>
                <Link to='/galeria'>Galeria</Link>
                <Link to='/nosotros'>Nosotros</Link>
                <Link to='/contacto'>Contacto</Link>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Nav