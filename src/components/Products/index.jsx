import React from "react";
import { Grid } from "@material-ui/core";

import Product from "../Product";

const Products = ({ products, onAddToCart }) => {
  return (
    <main>
      <Grid container justify="center" spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item={true} xs={12} md={6} sm={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
