import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// menuuuuuuuuu ⬇⬇⬇⬇⬇⬇⬇⬇
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((el) => {
          return (
            <div className={`pizza ${el.soldOut ? "sold-out" : ""}`}>
              <img alt={el.photoName} src={el.photoName} />
              <div>
                <p>{el.ingredients}</p>
                <h3>{el.name} </h3>
                <span>{`${el.soldOut ? "SOLD-OUT" : "$" + el.price}`}</span>
              </div>
            </div>
          );
        })}
      </ul>
    </main>
  );
}

// header !⬇⬇⬇⬇

function Header() {
  return (
    <header className="header footer">
      <h1> FAST REACT PIZZA CO.</h1>
    </header>
  );
}

// foooooooooter ⬇⬇⬇⬇
function Footer() {
  const hour = new Date().getHours();
  const open = 12;
  const close = 22;
  const isOpen = open <= hour && close >= hour;
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            we're open from {open}:00 to {close}:00. Come visit us or order
            online
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        `we're currently close. we're open on ${open}:00`
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
