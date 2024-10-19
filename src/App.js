// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Products from './components/products';
import Cart from './components/cart';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Laptop',
      description: 'High performance laptop',
      price: 999.99,
      image: 'laptop.jpg',
    },
    {
      id: 2,
      name: 'Headphones',
      description: 'Noise-cancelling headphones',
      price: 199.99,
      image: 'headphones.jpg',
    },
    {
      id: 3,
      name: 'Smartphone',
      description: 'Latest smartphone model',
      price: 799.99,
      image: 'smartphone.jpg',
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/products"
          element={<Products products={products} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </Router>
  );
};

export default App;

