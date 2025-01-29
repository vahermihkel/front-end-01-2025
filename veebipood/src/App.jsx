import './App.css'
import { Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import Ostukorv from './pages/Ostukorv'
import Kinkekaart from './pages/Kinkekaart'
import LisaToode from './pages/LisaToode'
import Seaded from './pages/Seaded'
import NotFound from './pages/NotFound'
import Esindused from './pages/arrays/Esindused'
import Menu from './components/Menu'
import Kalkulaator from './pages/Kalkulaator'
import { useState } from 'react'
import Hinnad from './pages/arrays/Hinnad'
import Kasutajad from './pages/arrays/Kasutajad'
import Pildid from './pages/arrays/Pildid'
import Tootajad from './pages/arrays/Tootajad'
import Tooted from './pages/arrays/Tooted'
import ArraysHome from './pages/arrays/ArraysHome'

function App() {
  const [tume, setTume] = useState(false);

  // ? :
  // KAS_TÕSI ? KUI_ON : KUI_POLE
  // if(tume===true) {"dark"} else {"light"}
  return (
    <div className={tume === true ? "dark" : "light"}>
        <Menu />
        <span className="theme-buttons">
          <button onClick={() => setTume(true)}>Tume</button>
          <button onClick={() => setTume(false)}>Hele</button>
        </span>
        <br /><br /><br />
        
        
        {/* <div className="tekst">Kõik meie tooted</div> */}

      {/* path --> mis järgneb localhost:5173-le 
      element --> mis HTMLi ta sellel lehel näitab

      path="/ostukorv"   localhost:5173/ostukorv näitab <div>Ostukorv</div>
      telia.ee           telia.ee/ostukorv näitab <div>Ostukorv</div>
      path tähendab mis järgneb baas URL-le
      */}
        <Routes>
          <Route path="/" element={ <Avaleht /> } />
          <Route path="/ostukorv" element={ <Ostukorv /> } />
          <Route path="/osta-kinkekaart" element={ <Kinkekaart /> } />
          <Route path="/lisa-toode" element={ <LisaToode /> } />
          <Route path="/seaded" element={ <Seaded /> } />
          <Route path="/kalkulaator" element={ <Kalkulaator /> } />

          <Route path="/arrays" element={ <ArraysHome /> } />
          <Route path="/esindused" element={ <Esindused /> } />
          <Route path="/hinnad" element={ <Hinnad /> } />
          <Route path="/kasutajad" element={ <Kasutajad /> } />
          <Route path="/pildid" element={ <Pildid /> } />
          <Route path="/tootajad" element={ <Tootajad /> } />
          <Route path="/tooted" element={ <Tooted /> } />

          <Route path="*" element={<NotFound /> } />
        </Routes>
    </div>
  )
}

export default App

// 1. uue projekti tekitamine HTML, CSS
// 2. routing, Link, brauseri ikoon ja kiri
// 3. useState, componendid
// 4. kalkulaator. värvid. Firebase. dünaamiline CSS.
// 5. dünaamiline CSS, function, useRef, laenu/maks kalkulaator
// 6. Toastify. CSS: grid, flex, important. tume/hele, menüü liigutamine. 
// emaili välja tõstmine. summa ise sisestamine.
// 7. 29.01 arrays
// 8. 04.02 - 14.00-17.15
// 9. 05.02
// x. 10.02
// x. 12.02
// 10.17.02
// x. 19.02
// x. 24.02
// 11.26.02