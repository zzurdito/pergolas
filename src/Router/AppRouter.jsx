
import {Routes, Route} from 'react-router-dom'
import Page__Home from '../components/Page__Home'
import Page__Galeria from '../components/Page__Galeria'
import Page__Contacto from '../components/Page__Contacto'
import Page__Nosotros from '../components/Page__Nosotros'


function AppRouter() {
  return (
    <Routes>
    <Route path="/" element={<Page__Home/>}></Route>
    <Route path="/galeria" element={<Page__Galeria />}></Route>
    <Route path="/contacto" element={<Page__Contacto/>}></Route>
    <Route path="/nosotros" element={<Page__Nosotros />}></Route>
</Routes>
  )
}

export default AppRouter