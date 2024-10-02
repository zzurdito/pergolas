import '../App.css'
import Header from './Header'
import Carousel from './Carousel'
import NuestrosServicios from './NuestrosServicios'
import BotonPresupuesto from './BotonPresupuesto'
import BotonWhatsapp from './BotonWhatsapp'
import Footer from './Footer'
import ScrollPopup from './PopUp'

function Home() {
  return (
    <>
    <ScrollPopup/>
    <Header/>
    <Carousel />
    <NuestrosServicios/>
    <div className='container-botones'>
      <BotonPresupuesto/>
      <BotonWhatsapp/>
    </div>
    <Footer />
    </>
  )
}

export default Home