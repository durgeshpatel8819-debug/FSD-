import React from 'react'

const Product = ({ products }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
      {products.map((product) => (
        <div key={product.id} style={{ border: "2px solid black", textAlign: "center" }}>
          <img src={product.thumbnail} alt={product.title} />
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <h2>Price: ${product.price}</h2>
          <h3>Rating: {product.rating}</h3>
        </div>
      ))}
    </div>
  )
}

export default Product