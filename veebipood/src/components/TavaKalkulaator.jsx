import { useState } from "react"

// kollane ---> funktsioon. funktsionaalsus. alati sulud lõpud, v.a [muutuja, setMuutuja]
// suure tähega roheline ---> imporditud väärtus
// tumesinine -> määratlus      function, const.   div, img, button
// tavaline sinine -> muutuja (ise loonud)
// helesinine -> omadus   onClick, className, src
// valge ---> märgid ja mida näitame HTMLs tavainimesele
// lilla ---> käsklused/tegevused
// oranž ---> sõnaline väärtus
// heleroheline ---> numbriline väärtus
// tumesinine ---> boolean väärtus / undefined (tühjus väärtus)

// const --> ei saa anda muutujale võrdusmärgiga enam väärtust pärast tema loomist
// let --> lubab anda väärtust. kasutatakse Reactist
// var --> ei kasutata Reactis. kasutatakse tavalises JavaScriptis

function TavaKalkulaator() {
  const [summa, setSumma] = useState(0);
  const [tehe, setTehe] = useState("korrutamine");
  // {{{{{{{{{((((((((([[[[[[[]]]]]]])))))))))}}}}}}}}}

  return (
    <div>
      {tehe === "korrutamine" && <div>{summa} * 2.619 = {(summa * 2.619).toFixed(3)}</div>}
      {tehe === "jagamine" && <div>{summa} / 2.619 = {(summa / 2.619).toFixed(3)}</div>}
      {tehe === "liitmine" && <div>{summa} + 2.619 = {(summa + 2.619).toFixed(3)}</div>}
      {tehe === "lahutamine" && <div>{summa} - 2.619 = {(summa - 2.619).toFixed(3)}</div>}
      <button onClick={() => setSumma(7)}>7</button>
      <button onClick={() => setSumma(8)}>8</button>
      <button onClick={() => setSumma(9)}>9</button>
      <button onClick={() => setTehe("korrutamine")}>X</button>
      <br />
      <button onClick={() => setSumma(4)}>4</button>
      <button onClick={() => setSumma(5)}>5</button>
      <button onClick={() => setSumma(6)}>6</button>
      <button onClick={() => setTehe("lahutamine")}>-</button>
      <br />
      <button onClick={() => setSumma(1)}>1</button>
      <button onClick={() => setSumma(2)}>2</button>
      <button onClick={() => setSumma(3)}>3</button>
      <button onClick={() => setTehe("liitmine")}>+</button>
      <br />
      <button onClick={() => setSumma(0)}>C</button>
      <button onClick={() => setSumma(0)}>0</button>
      <button onClick={() => setTehe("jagamine")}>/</button>
      <button className="blue">=</button>
      <br />
    </div>
  )
}

export default TavaKalkulaator