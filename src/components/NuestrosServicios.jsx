import Servicio from "./Servicio"
import img1 from "../images/galeria/img-20240531-wa0002.webp"
import img2 from "../images/galeria/img-20240531-wa0004.webp"
import img3 from "../images/galeria/img-20240531-wa0005.webp"
import img4 from "../images/galeria/img-20240531-wa0006.webp"
import img5 from "../images/galeria/img-20240531-wa0007.webp"


function NuestrosServicios() {
  return (
    <div>
        <div className="container servicios-title">
            <div className="icono"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
    </svg></div>
            <div className="txt-icono">Nuestros servicios</div>
            <div className="icono"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
    </svg></div>
        </div>
            <Servicio img={img1} title="Diseño y construcción de pérgolas" txt="Creamos pérgolas personalizadas para adaptarse a cualquier espacio y estilo, utilizando los mejores materiales y técnicas de construcción."/>
            <Servicio img={img2} title="Revestimientos" txt="Instalamos revestimientos de madera de alta calidad que dan un toque de elegancia y calidez a tu hogar."/>
            <Servicio img={img3} title="Cerramientos y tejados" txt="Creamos cerramientos de madera y pladur a medida que aportan privacidad y protección a tu terraza o jardín.
Aislamos y construimos tejados con acabados en teja y tégola
"/>
            <Servicio img={img4} title="Reparación y mantenimiento" txt="Un mantenimiento adecuado de tu pérgola, le prolonga la vida útil.
Pintura, cambio de madera estropeada, reparación de cubierta, tanto de tela asfáltica, tégola o teja."/>
            <Servicio img={img5} title="Montaje de estructuras" txt="¿Tienes tu propia pérgola? Nosotros te la montamos.
Casetas, porches, toldos y marquesinas de madera.
Todos los modelos y estilos."/>
</div>
  )
}

export default NuestrosServicios