import './App.css'
import 'leaflet/dist/leaflet.css';


import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Page__Galeria from './components/Page__Galeria'
import Page__Home from './components/Page__Home'
import Page__Contacto from './components/Page__Contacto'
import Page__Nosotros from './components/Page__Nosotros'

function App() {

  return (
    <>
              <Router basename="/pergolas">
                <Routes>
                    <Route path="/" element={<Page__Home/>}></Route>
                    <Route path="/galeria" element={<Page__Galeria />}></Route>
                    <Route path="/contacto" element={<Page__Contacto/>}></Route>
                    <Route path="/Nosotros" element={<Page__Nosotros />}></Route>
                </Routes>
              </Router>
    </>
  )
}

export default App
