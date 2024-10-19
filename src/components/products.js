import React from 'react';
import Product from './product';

const Products = ({ products, addToCart }) => {
  return (
    <section>
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export default Products;
