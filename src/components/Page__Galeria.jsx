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
        <h1 className="galeria__title">GALERIA</h1>
        <div className="galeria__desc">Explora algunos de nuestros proyectos de pérgolas, diseñados con dedicación y calidad para transformar tus espacios exteriores</div>
      </div>
      <Galeria />
      <Footer/>
    </div>
  )
}

export default Page__Galeria