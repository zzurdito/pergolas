/* eslint-disable react/prop-types */


function Servicio({title, txt, img}) {
  return (
    <div className="container-servicio">
      <div className="txt-container">
        <div className="title-servicio">{title}</div>
        <div className="txt-servicio">{txt}</div>
      </div>
      <div className="img-servicio">
        <img src={img} alt="Foto" />
      </div>
    </div>
  )
}

export default Servicio