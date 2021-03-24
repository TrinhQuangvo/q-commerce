import React, { useState, useEffect } from "react";
import { commerce } from "./libs/commerce";
import * as Components from "./components";

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
    <div>
      <Components.Navbar totalItems={cart.total_items} />
      <Components.Products products={products} onAddToCard={handleAddToCart} />
    </div>
  );
};

export default App;
