import { Link } from "react-router-dom"

function Ostukorv() {
  return (
    <div>
      <Link to="/">Mine avalehele, lisa midagi ostukorvi</Link>
      <span>Tooteid on ostukorvis: 3tk</span>
      <span>Kogusumma: 100€</span>
    </div>
  )
}

export default Ostukorv