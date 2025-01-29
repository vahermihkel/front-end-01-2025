
// array'd on kohustuslikud:
// ma pean neid sorteerima/filtreerima/lehekülgede kaupa panema

import { useState } from "react"

function Pildid() {
  const [pildid, setPildid] = useState(["/edit.png", "/laigitud.svg", "/mittelaigitud.svg", "/next.png", "/vite.svg"]);
  // const pildid = ["/edit.png", "/laigitud.svg", "/mittelaigitud.svg", "/next.png", "/vite.svg"];

  const reset = () => {
    setPildid(["/edit.png", "/laigitud.svg", "/mittelaigitud.svg", "/next.png", "/vite.svg"]);
  }

  const sorteeriTahemargidKasvavalt = () => {
    const vastus = pildid.toSorted((a,b) => a.length - b.length);
    setPildid(vastus);
  }

  const sorteeriTahemargidKahanevalt = () => {
    const vastus = pildid.toSorted((a,b) => b.length - a.length);
    setPildid(vastus);
  }

  const filtreeriLaigiPildid = () => {
    const vastus = pildid.filter(pilt => pilt.includes("laigitud"));
    setPildid(vastus);
  }

  const filtreeriSvgPildid = () => {
    const vastus = pildid.filter(pilt => pilt.includes(".svg"));
    setPildid(vastus);
  }

  const filtreeriPngPildid = () => {
    const vastus = pildid.filter(pilt => pilt.includes(".png"));
    setPildid(vastus);
  }

  return (
    <div>
      {/* ilus on, aga mitte kohustuslik:
          pildid   pilt
          tooted   toode
    võib panna ka: x.map(y => )

      pilt esimene kord: "/edit.png"
      pilt teine kord: "/laigitud.svg" jne

      key={pilt} ---> React soovib jätta tsüklit mällu, et ta ei peaks seda korduvalt tegema.
                selleks tuleb panna key={} ehk mille alusel mällu jätta
      */}
      <button onClick={reset}>Reset</button>
      <button onClick={sorteeriTahemargidKasvavalt}>Sorteeri tähemärgid kasvavalt</button>
      <button onClick={sorteeriTahemargidKahanevalt}>Sorteeri tähemärgid kahanevalt</button>
      <button onClick={filtreeriLaigiPildid}>Jäta alles südamed</button>
      <button onClick={filtreeriSvgPildid}>Jäta alles .svg pildid</button>
      <button onClick={filtreeriPngPildid}>Jäta alles .png pildid</button>
      {pildid.map(pilt => <img key={pilt} className="ikoon" src={pilt} alt="" />)}
      {/* <img className="ikoon" src="/edit.png" alt="" />
      <img className="ikoon" src="/laigitud.svg" alt="" />
      <img className="ikoon" src="/mittelaigitud.svg" alt="" />
      <img className="ikoon" src="/next.png" alt="" />
      <img className="ikoon" src="/vite.svg" alt="" /> */}
    </div>
  )
}

export default Pildid