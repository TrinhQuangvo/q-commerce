import React from "react";
import { Grid } from "@material-ui/core";

import Product from "../Product";

const products = [
  {
    id: Math.random(),
    name: "Iphone 12 Max",
    description: "128GB of Storage",
    price: 15000000,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-600x600.jpg",
  },

  {
    id: Math.random(),
    name: "Iphone 11 Pro Max",
    description: "128GB of Storage",
    price: 15000000,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-600x600.jpg",
  },
  {
    id: Math.random(),
    name: "Iphone 12 Pro Max",
    description: "256GB of Storage",
    price: 15000000,
    image:
      "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-600x600.jpg",
  },
];

function Products(props) {
  return (
    <main>
      <Grid container justify="center" spacing={2}>
        {products.map((item) => (
          <Grid key={item.id} xs={12} md={6} sm={4} lg={3}>
            <Product product={item} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}

export default Products;
