import { useState } from "react"

function Esindused() {
  const [linn, setLinn] = useState("Tallinn");
  const [keskused, setKeskused] = useState(["Ülemiste", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine", "Järveotsa"]);

  const sorteeriAZ = () => {
    const vastus = keskused.toSorted((a,b) => a.localeCompare(b, "et"));
    setKeskused(vastus);
  }

  const sorteeriZA = () => {
    const vastus = keskused.toSorted((a,b) => b.localeCompare(a, "et"));
    setKeskused(vastus);
  }

  const sorteeriKolmasTahtAZ = () => {                                           // 012
    const vastus = keskused.toSorted((a,b) => a[2].localeCompare(b[2], "et"));   // Kristiine  
    setKeskused(vastus);
  }

  const filtreeriKellelNeljasTahtS = () => {
    const vastus = keskused.filter(keskus => keskus[3] === "s");
    setKeskused(vastus);
  }

  const filtreeriKellelTahemarkeVah7 = () => {
    const vastus = keskused.filter(keskus => keskus.length >= 7);
    setKeskused(vastus);
  }

  const filtreeriKellelTahemarkeTapselt9 = () => {
    const vastus = keskused.filter(keskus => keskus.length === 9);
    setKeskused(vastus);
  }

  const filtreeriKellelSonaYhendIs = () => {
    const vastus = keskused.filter(keskus => keskus.includes("is"));
    setKeskused(vastus);
  }

  const filtreeriKesLoppebTahegaE = () => {
    const vastus = keskused.filter(keskus => keskus.endsWith("e"));
    setKeskused(vastus);
  }

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
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriKolmasTahtAZ}>Sorteeri Z-A</button>
        <button onClick={filtreeriKellelNeljasTahtS}>Jäta alles kellel neljas täht s</button>
        <button onClick={filtreeriKellelTahemarkeVah7}>Jäta alles kellel vähemalt 7 tähemärki</button>
        <button onClick={filtreeriKellelTahemarkeTapselt9}>Jäta alles kellel täpselt 9 tähemärki</button>
        <button onClick={filtreeriKellelSonaYhendIs}>Jäta alles kellel sõnalühend is</button>
        <button onClick={filtreeriKesLoppebTahegaE}>Jäta alles kes lõppeb e tähega</button>
        {keskused.map(keskus => <div key={keskus}>{keskus}</div>)}
        {/* <div>Ülemiste</div>
        <div>Rocca al Mare</div>
        <div>Magistrali</div>
        <div>Vesse</div>
        <div>Kristiine</div>
        <div>Järveotsa</div> */}
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