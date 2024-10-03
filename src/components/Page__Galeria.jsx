import BotonPresupuesto from "./BotonPresupuesto"
import BotonWhatsapp from "./BotonWhatsapp"
import Footer from "./Footer"
import Galeria from "./Galeria"
import Nav from "./Nav"
import ScrollPopup from "./PopUp"

function Page__Galeria() {
  return (
    <div className="page__galeria">
      <ScrollPopup/>
      <div className="header-pag">
        <Nav/>
        <h1 className="__title">Galería</h1>
        <div className="__desc">Explora algunos de nuestros proyectos de pérgolas, diseñados con dedicación y calidad para transformar tus espacios exteriores</div>
      </div>
      <Galeria />
      <div className='container-botones'>
        <BotonPresupuesto/>
        <BotonWhatsapp/>
      </div>
      <Footer/>
    </div>
  )
}

export default Page__Galeria