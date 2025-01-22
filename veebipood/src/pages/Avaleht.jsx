import { useState } from 'react'

// sõna/string -> ""
// number -> ilma jutumärkideta: 0
// kahendväärtus/boolean -> ilma jutumärkideta: false/true

// sõna ---> esimest tähte, viimast tähte, kas sisaldab. isikukood, postiindeks, telefoninumber
// number ---> kokkuarvutused: korrutamine/jagamine/liitmine/lahutamine
// kahendväärtus ---> kui on selgelt kaks väärtust. makstud, täisealine, registreerunud, soodushind
// kahendväärtuse eriomadus -> teda saab tagurpidi keerata hüüumärgi abil

function Avaleht() {
  const [count, setCount] = useState(0)
  const [laigitud, setLaigitud] = useState(false);
  const [sonum, setSonum] = useState("");

  function nulli() { // vähem märke
    setCount(0);
    setSonum("Kogus nullitud");
    setLaigitud(false);
  }

  // const nulli = () => { // kõik mis ma loon, on const
    // setCount(0);
    // setSonum("Kogus nullitud");
    // setLaigitud(false);
  // }

  function vahenda() {
    setCount(count - 1);
    setSonum("Kogus vähendatud");
  }

  function suurenda() {
    setCount(count + 1);
    setSonum("Kogus suurendatud");
  }

  return (
    <div>
      <div>{sonum}</div>
      {count > 0 && <button onClick={nulli}>Nulli</button>}
      <br />
      <button disabled={count === 0} onClick={vahenda}>-</button>
      <span>count is {count}</span>
      <button onClick={suurenda}>+</button>
      <br />
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      <br />
      {/* <button onClick={() => setLaigitud(true)}>Laik peale</button>
      <button onClick={() => setLaigitud(false)}>Laik maha</button> */}
      <button onClick={() => setLaigitud(!laigitud)}>Muuda like</button>
    </div>
  )
}

export default Avaleht