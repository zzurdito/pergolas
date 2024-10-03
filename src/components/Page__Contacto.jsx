import Footer from "./Footer"
import Nav from "./Nav"
import '../assets/styles/Page__Contacto.css'
import img from '../images/galeria/img-20240531-wa0044.webp'
import Formulario from "./Formulario"
import Map from "./Map"
import Footer from "./Footer"
import PoliticaDePrivacidad from "./PoliticaDePrivacidad"

function Page__Contacto() {
  return (
    <>
      <div className="header-pag">
        <Nav/>
        <h1 className="__title">Atención personalizada</h1>
        <div className="mini__desc">
        <div className="__desc_txt">- Contamos con un equipo de profesionales altamente cualificados y responsables.</div>
        <div className="__desc_txt">- Ellos se encargarán de asesorarte y guiarte en cada paso del proyecto, desde el diseño hasta la instalación final.</div>
        </div>
      </div>
      <div className="contacto__img"><img src={img} alt="Imagen de los trabajadores" /></div>
      <Formulario />
      <div className="mapas">
        <div className="box__map">
          <Map className="mapa" x="37.9739148" y="-1.116049"/>
          <div className="map__txt">
          Camino Viejo de Valencia s/n, Benissa, Alicante (03720)
          </div> 
        </div>
        
        <div className="box__map">
          <Map x="38.715517" y="0.049918"/>
          <div className="map__txt">
          Calle Naranjo, Murcia, Murcia (30011)
          </div> 
        </div>
        </div>
        <PoliticaDePrivacidad />
      <Footer/>
    </>
  )
}

export default Page__Contacto