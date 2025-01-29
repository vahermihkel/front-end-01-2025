import { useRef, useState } from "react"
import KinkekaartEmail from "../components/KinkekaartEmail";
import { ToastContainer, toast } from 'react-toastify';


function Kinkekaart() {
  const [summa, setSumma] = useState(20);
  const [kogus, setKogus] = useState(1);
  const valimiseRef = useRef();
  
  const [summaValimine, setSummaValimine] = useState(false);
  const [kirjutatudSumma, setKirjutatudSumma] = useState(0);
  const [kirjutatudSummaAktiivne, setKirjutatudSummaAktiivne] = useState(false);

  const summa20 = () => {
    setSumma(20);
    setSummaValimine(false);
    setKirjutatudSummaAktiivne(false);
  }
 
  const summa50 = () => {
    setSumma(50);
    setSummaValimine(false);
    setKirjutatudSummaAktiivne(false);
  }

  const summa100 = () => {
    setSumma(100);
    setSummaValimine(false);
    setKirjutatudSummaAktiivne(false);
  }

  const summa0 = () => {
    setSumma(0);
    setSummaValimine(true);
  }

  const summaValik = () => {
    if (valimiseRef.current.value > 2000) {
      toast("Kinkekaardi summa peab olema vahemikus 15 ja 2000!");
      setSumma(2000);
    } else if (valimiseRef.current.value < 15) {
      toast("Kinkekaardi summa peab olema vahemikus 15 ja 2000!");
      setSumma(15);
    } else {
      setSumma(valimiseRef.current.value);
    }
    setSummaValimine(false);
    setKirjutatudSumma(valimiseRef.current.value);
    setKirjutatudSummaAktiivne(true);
  }

  return (
    <div>
      <span className="summa-buttons">
        <button className={summa === 20 ? "valitud" : undefined} onClick={summa20}>20 €</button>
        <button className={summa === 50 ? "valitud" : undefined} onClick={summa50}>50 €</button>
        <button className={summa === 100 ? "valitud" : undefined} onClick={summa100}>100 €</button>
        <span className={summaValimine ? "valitud vali-summa" : "vali-summa"}>
          
          {summaValimine === false && kirjutatudSummaAktiivne === false &&
          <span onClick={summa0}>
            <img className="ikoon" src="/edit.png" alt="" />
            <span className="vali-summa-tekst">Valin ise summa</span>
          </span>}
          
          {summaValimine === true &&
          <>
            <input defaultValue={kirjutatudSumma} ref={valimiseRef} type="text" />
            <img onClick={summaValik} className="ikoon" src="/next.png" alt="" />
          </>}
          
          {summaValimine === false && kirjutatudSumma > 0 &&  kirjutatudSummaAktiivne === true &&
          <span onClick={summa0}>
            {kirjutatudSumma}
          </span>}

        </span>
      </span>
      <br />
      <div>Kinkekaart {summa}€</div>
      <br /><br /><br />
      <button disabled={kogus === 1} onClick={() => setKogus(kogus - 1)}>-</button>
      <span>{kogus}</span>
      <button onClick={() => setKogus(kogus + 1)}>+</button>
      <br /><br />
      <div>Kokku: {summa * kogus} €</div>
      <br /><br />
      <KinkekaartEmail />
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />
    </div>
  )
}

export default Kinkekaart