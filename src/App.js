import React, { useState, useEffect } from "react";
import { commerce } from "./libs/commerce";
import * as Components from "./components";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Components.Products
            products={products}
            onAddToCard={handleAddToCart}
          />
        </Route>
        <Route exact path="/cart">
          <Components.Cart cart={cart} />
        </Route>
      </Switch>
      <div>
        <Components.Navbar totalItems={cart.total_items} />
      </div>
    </Router>
  );
};

export default App;
