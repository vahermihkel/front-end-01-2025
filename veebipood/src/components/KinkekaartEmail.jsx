import { useRef, useState } from "react"

function KinkekaartEmail() {
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
      <div>{sonum}</div>
      <label>Email</label><br />
      <input ref={emailRef} type="text" /><br />
      <button onClick={lisa}>Sisesta email</button> <br />
    </div>
  )
}

export default KinkekaartEmail