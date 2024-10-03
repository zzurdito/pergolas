import img1 from '../images/galeria/img-20240531-wa0016.webp'
import img2 from '../images/galeria/img-20240531-wa0033.webp'
import img3 from '../images/galeria/img-20240531-wa0031.webp'
import img4 from '../images/galeria/img-20240531-wa0032.webp'
function Nosotros() {
  return (
    <div className="container-nosotros">
    
      <div className="desc">
        <div className="img-container"><img src={img1} alt="foto1" /></div>
        <p>Pérgolas Canor es la parte especializada en estructuras y pérgolas de madera de Carpintería Canor, con más de 40 años de experiencia en el sector de la madera.</p>

      </div>
      <div className="desc">
      <div className="img-container"><img src={img2} alt="foto2" /></div>
      <p>Tenemos un equipo de alta cualificación y un backoffice para hacer realidad aquello que imagines y logran una total satisfacción del producto y su instalación final.</p>

      </div>
      <div className="desc">
      <div className="img-container"> <img src={img3} alt="foto3" /></div>
      <p>Nos especializamos en la creación de estructuras a medida, como cubiertas, pérgolas, cerramientos y revestimientos, para que puedas disfrutar de tu hogar y al aire libre con estilo y confort.</p>

      </div>
      <div className="desc">
      <div className="img-container"><img src={img4} alt="foto4" /></div>
      <p>Contamos con un equipo de profesionales altamente cualificados y responsables. Ellos se encargarán de asesorarte y guiarte en cada paso del proyecto, desde el diseño hasta la instalación final.</p>

                
    </div>




  </div>
  )
}

export default Nosotros