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
  return (
    <div>
      <Header name="Alex" year={2025} />
      <Main dishes={dishObjects} />
    </div>
  );
}

export default App
