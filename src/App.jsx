import './App.css'
import 'leaflet/dist/leaflet.css';


import { Route } from 'wouter';
import Page__Galeria from './components/Page__Galeria'
import Page__Home from './components/Page__Home'
import Page__Contacto from './components/Page__Contacto'
import Page__Nosotros from './components/Page__Nosotros'

function App() {

  return (
    <>
                    <Route path="/home" element={<Page__Home/>}></Route>
                    <Route path="/galeria" element={<Page__Galeria />}></Route>
                    <Route path="/contacto" element={<Page__Contacto/>}></Route>
                    <Route path="/Nosotros" element={<Page__Nosotros />}></Route>
    </>
  )
}

export default App
