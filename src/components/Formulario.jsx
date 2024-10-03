import '../assets/styles/Formulario.css'

function Formulario() {
  return (
    <div className='formulario'>
        <form>
        <div className="form-group row">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">Nombre y apellidos</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="inputName" placeholder="Nombre y apellidos"></input>
        </div>
        </div>
        <div className="form-group row">
            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Correo electrónico</label>
            <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail" placeholder="Correo electrónico"></input>
        </div>
        </div>
        <div className="form-group row">
            <label htmlFor="inputPhone" className="col-sm-2 col-form-label">Teléfono</label>
            <div className="col-sm-10">
            <input type="phone" className="form-control" id="inputPhone" placeholder="Teléfono"></input>
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="inputCity" className="col-sm-2 col-form-label">Población</label>
            <div className="col-sm-10">
            <input type="text" className="form-control" id="inputCity" placeholder="Población"></input>
            </div>
        </div>
        <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Dinos qué necesitas</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="form-group row">
            <div className="col-sm-10">
            <button type="submit" className="btn btn-formulario">Enviar</button>
            </div>
        </div>
        </form>
    </div>
  )
}

export default Formulario