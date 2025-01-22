import './App.css'
import { Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import Ostukorv from './pages/Ostukorv'
import Kinkekaart from './pages/Kinkekaart'
import LisaToode from './pages/LisaToode'
import Seaded from './pages/Seaded'
import NotFound from './pages/NotFound'
import Esindused from './pages/Esindused'
import Menu from './components/Menu'
import Kalkulaator from './pages/Kalkulaator'
import { useState } from 'react'

function App() {
  const [tume, setTume] = useState(false);

  // ? :
  // KAS_TÕSI ? KUI_ON : KUI_POLE
  // if(tume===true) {"dark"} else {"light"}
  return (
    <div className={tume === true ? "dark" : "light"}>
        <Menu />
        <button onClick={() => setTume(true)}>Tume</button>
        <button onClick={() => setTume(false)}>Hele</button>
        <br />
        
        
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
          <Route path="/esindused" element={ <Esindused /> } />
          <Route path="/kalkulaator" element={ <Kalkulaator /> } />
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