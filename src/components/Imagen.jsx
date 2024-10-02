

// eslint-disable-next-line react/prop-types
function Imagen({source}) {
  return (
    <div className="imagen__galeria">
        <img src={source} alt="Foto galeria" />
    </div>
  )
}

export default Imagen