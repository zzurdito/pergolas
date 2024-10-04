import logo from '../images/cropped-logo-pergolas-canor-1.webp'
import {Link } from 'react-router-dom'
import SocialMedia from './SocialMedia'
import BotonPresupuesto from './BotonPresupuesto'
import BotonLlamanos from './BotonLlamanos'
import '../assets/styles/Nav.css'


function Nav() {
  return (
    <div>
        <nav className="navbar-custom">
            <a className="navbar-logo" href="#"><img src={logo} alt="Logo" /></a>
            <div className="navbar-links" id="">
                <Link to='/home'>Inicio</Link>
                <Link to='/galeria'>Galeria</Link>
                <Link to='/nosotros'>Nosotros</Link>
                <Link to='/contacto'>Contacto</Link>
            </div>
          <div className='contenedor-contactos'>
          <SocialMedia/>
          <div className='contenedor-botones'>
            <BotonPresupuesto />
            <BotonLlamanos />
          </div>
          </div>
        
        </nav>
    </div>
  )
}

export default Nav