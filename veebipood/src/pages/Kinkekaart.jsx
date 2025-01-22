import { useRef, useState } from "react"

function Kinkekaart() {
  const [summa, setSumma] = useState(20);
  const [kogus, setKogus] = useState(1);
  const emailRef = useRef(); // peame sisestama inputi sisse
  const [sonum, setSonum] = useState("");

  function lisa() { // olla onClickiga väljakutsutav
    if (emailRef.current.value === "") {
      setSonum("E-mail peab olema sisestatud");
      return; // lõpetab funktsiooni, siit enam edasi ei minda
    }

    if (emailRef.current.value.includes("@") === false) {
      setSonum("E-mail peab sisaldama @ märki");
      return; // lõpetab funktsiooni, siit enam edasi ei minda
    } 
    
    if (emailRef.current.value.length < 5) {
      setSonum("E-mail liiga lühike");
      return; // lõpetab funktsiooni, siit enam edasi ei minda
    } 

    setSonum("E-mail sisestatud");
  }

  return (
    <div>
      <button className={summa === 20 ? "valitud" : undefined} onClick={() => setSumma(20)}>20 €</button>
      <button className={summa === 50 ? "valitud" : undefined} onClick={() => setSumma(50)}>50 €</button>
      <button className={summa === 100 ? "valitud" : undefined} onClick={() => setSumma(100)}>100 €</button>
      <br />
      <div>Kinkekaart {summa}€</div>
      <br /><br /><br />
      <button disabled={kogus === 1} onClick={() => setKogus(kogus - 1)}>-</button>
      <span>{kogus}</span>
      <button onClick={() => setKogus(kogus + 1)}>+</button>
      <br /><br />
      <div>Kokku: {summa * kogus} €</div>
      <br /><br />
      <div>{sonum}</div>
      <label>Email</label><br />
      <input ref={emailRef} type="text" /><br />
      <button onClick={lisa}>Sisesta email</button> <br />
    </div>
  )
}

export default Kinkekaart