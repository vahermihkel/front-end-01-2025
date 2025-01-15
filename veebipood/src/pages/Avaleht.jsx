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

  return (
    <div>
      <button className="nupp" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
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