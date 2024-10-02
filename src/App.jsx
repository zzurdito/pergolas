import './App.css'
import Header from './components/Header'
import Carousel from './components/Carousel'
import NuestrosServicios from './components/NuestrosServicios'
import BotonPresupuesto from './components/BotonPresupuesto'
import BotonWhatsapp from './components/BotonWhatsapp'
import Footer from './components/Footer'
import ScrollPopup from './components/PopUp'

function App() {

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

export default App
