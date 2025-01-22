import { useState } from "react"

function Seaded() {
  const [keel, setKeel] = useState("est");

  return (
    <div>
      <button className={keel === "est" ? "valitud-keel" : undefined} onClick={() => setKeel("est")}>Eesti</button>
      <button className={keel === "eng" ? "valitud-keel" : undefined} onClick={() => setKeel("eng")}>English</button>
      <button className={keel === "rus" ? "valitud-keel" : undefined} onClick={() => setKeel("rus")}>Pycckij</button>
      <button className={keel === "esp" ? "valitud-keel" : undefined} onClick={() => setKeel("esp")}>Espanol</button>
      <br />
      <div>Hetkel aktiivse keele lühend: {keel}</div>
      <br />
      {keel === "est" && <div>Leht on eesti keeles</div>}
      {keel === "eng" && <div>Page is in English</div>}
      {keel === "rus" && <div>Cтpaницa на русском языке</div>}
      {keel === "esp" && <div>La pagina esta en español</div>}
      <br /><br />
      {keel !== "est" && <i>Leht on võõrkeeles. Hetkel tõlked puuduvad.</i>}
    </div>
  )
}

export default Seaded