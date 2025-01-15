import { useState } from "react"
import LaenuKalkulaator from "../components/LaenuKalkulaator"
import MaksimaalneKalkulaator from "../components/MaksimaalneKalkulaator"
import TavaKalkulaator from "../components/TavaKalkulaator"

function Kalkulaator() {
  const [vaade, setVaade] = useState("tava");

  return (
    <div>
      <button onClick={() => setVaade("tava")}>Tavakalkulaator</button>
      <button onClick={() => setVaade("laenu")}>Kodulaenu kalkulaator</button>
      <button onClick={() => setVaade("maks")}>Kodulaenu maksimaalne kalkulaator</button>
      {vaade === "tava" && <TavaKalkulaator />}
      {vaade === "laenu" && <LaenuKalkulaator />}
      {vaade === "maks" && <MaksimaalneKalkulaator />}

    </div>
  )
}

export default Kalkulaator