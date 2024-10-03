import Footer from './Footer'
import Nav from './Nav'
import Nosotros from './Nosotros'
import '../assets/styles/Page__Nosotros.css'

function Page__Nosotros() {
  return (
    <>
        
        

      <div className="header-pag">
      <Nav />
      <h1 className="__title">SOBRE NOSOTROS</h1>
      </div>
      <Nosotros/>

        
      <Footer />
        
    </>
  )
}

export default Page__Nosotros