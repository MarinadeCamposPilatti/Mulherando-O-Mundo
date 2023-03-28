import Body from './components/Body';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import NavbarMobile from './components/NavbarMobile'
import OptionsMobile from './components/OptionsMobile';


import { BrowserRouter, Routes , Route  } from 'react-router-dom';


export default function App() {

  return (
    <>

    <BrowserRouter>
    <Navbar />
    <NavbarMobile />
      <Routes>
        <Route exact path='/' element={<Body />} />
        <Route path='/options' element={<OptionsMobile />} />
      </Routes>
      <Footer />
    </BrowserRouter>

    </>

  )
};
