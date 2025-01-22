import { useRef, useState } from "react"

function LaenuKalkulaator() {
  const ostuhindRef = useRef();
  const [ostuhind, setOstuhind] = useState(75000);

  function arvuta() {
    setOstuhind(ostuhindRef.current.value);
  }

  return (
    <div>
      <label>Kinnisvara ostuhind</label>
      <input ref={ostuhindRef} type="text" />
      <br />
      <button onClick={arvuta}>Arvuta</button>
      {ostuhind >= 20000 && ostuhind <= 10000000 && <div>Kuumakse: {(ostuhind/30/12).toFixed(2)}€</div>}
      {(ostuhind < 20000 || ostuhind > 10000000) && <div className="punane-veateade">Laenusumma võib olla vahemikus 20 000-10 000 000 eurot.</div>}
    </div>
  )
}

export default LaenuKalkulaator