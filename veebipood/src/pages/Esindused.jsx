import { useState } from "react"

function Esindused() {
  const [linn, setLinn] = useState("Tallinn");

  return (
    <div>
      {/* <div>Hetkel aktiivne linn: {linn}</div> */}
      <button className={linn === "Tallinn" ? "valitud-linn": undefined} onClick={() => setLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "valitud-linn": undefined} onClick={() => setLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "valitud-linn": undefined} onClick={() => setLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "valitud-linn": undefined} onClick={() => setLinn("Pärnu")}>Pärnu</button>
      <br />

      {linn === "Tallinn" &&
      <>
        <div>Ülemiste</div>
        <div>Rocca al Mare</div>
        <div>Magistrali</div>
        <div>Vesse</div>
        <div>Kristiine</div>
        <div>Järveotsa</div>
      </>}

      {linn === "Tartu" &&
      <>
        <div>Raatuse</div>
        <div>Lõunakeskus</div>
      </>}

      {linn === "Narva" && <div>Fama</div>}

      {linn === "Pärnu" && <div>Port Artur 2</div>}

      <br /><br />

      {linn !== "Tallinn" && <i>Tellimused väljaspool Tallinnad võtavad 5 tööpäeva aega</i>}
    </div>
  )
}

export default Esindused