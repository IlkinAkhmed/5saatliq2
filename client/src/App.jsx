import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from './layouts/MainLayout'
import Home from './pages/home'
import Portfolio from './pages/portfolio'
import Contact from './pages/contact'
import About from './pages/about'
import Wishlist from './pages/wishlist'
import Add from './pages/addPage'
import Details from './pages/details'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/add" element={<Add />} />
          <Route path="/details/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
