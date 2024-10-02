
import Nav from "./Nav"
import BotonPresupuesto from "./BotonPresupuesto"

function Header() {
  return (
    <div className="header-pag">
        <Nav />
        <div className="container container-header">
          <h1 className="title">Pérgolas Canor</h1>
          <h2 className="">Fabricación propia de pérgolas de madera
          en Murcia y Benissa</h2>
          <h3 className="">La mejor pérgola al mejor precio.
          Dinos tu presupuesto, ¡te lo mejoramos!</h3>
          <BotonPresupuesto />
        </div>
    </div>
  )
}

export default Header