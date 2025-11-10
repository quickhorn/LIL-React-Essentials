import { useState } from 'react';
import './App.css';
import chef from "./images/chef.png"

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  )
}

const items = [
  "Macroni and Cheese",
  "Salmon with Potatoes",
  "Tofu with Bowtie Pasta",
  "Asian Fried Noodles with Beef",
]

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}))


function Main({ dishes }) {
  return (
    <>
      <div><h2>Welcome to this beautiful restaurant</h2></div >
      <main>
        <img src={chef} height={200} alt="Photo of our Chef" />
        <ul>
          {dishes.map((dish) =>
            <li key={dish.id} style={{ listStyleType: "none" }}>{dish.title}</li>
          )}
        </ul>
      </main>
    </>
  )
}

function App() {
  //learned that the variables status and setStatus are destructured
  //array indexes for the object returend from useState. "Open" is the initial
  //state. status is the variable to be used, and setStatus
  //is the method that will be called to update the status variable
  //neat to finally have someone explain it.
  const [status, setStatus] = useState("Open");
  return (
    <div>
      <h1>The restaurant is currently {status}.</h1>
      <button onClick={() => setStatus("Closed")}>
        Close Restaurant
      </button>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App
