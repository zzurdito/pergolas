import logo from '../images/cropped-logo-pergolas-canor-1.webp'

function Nav() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="logo navbar-brand" href="#"><img src={logo} alt="Logo" /></a>
            <div className="collapse navbar-collapse d-flex justify-content-evenly" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Galeria</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">Nosotros</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" aria-disabled="true">Contactos</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Nav