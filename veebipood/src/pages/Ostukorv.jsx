import { useState } from "react"
import { Link } from "react-router-dom"

function Ostukorv() {
  const [tooted, setTooted] = useState(["Coca", "Fanta", "Sprite"]);

  return (
    <div>
      {tooted.map(toode => <div key={toode}>{toode}</div>)}
      <Link to="/">Mine avalehele, lisa midagi ostukorvi</Link>
      <span>Tooteid on ostukorvis: 3tk</span>
      <span>Kogusumma: 100€</span>
    </div>
  )
}

export default Ostukorv