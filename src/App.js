import React, { useState, useEffect } from "react";
import { commerce } from "./libs/commerce";
import * as Components from "./components";

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list(); 
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products" ,products);

  return (
    <div>
      <Components.Navbar />
      <Components.Products products={products} />
    </div>
  );
};

export default App;
