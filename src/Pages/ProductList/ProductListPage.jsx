import React, { useEffect, useState } from 'react'
import './ProductListPage.css'
import { useNavigate } from 'react-router-dom';

const ProductListPage = () => {

    const navigate = useNavigate();

    const [products] = useState([
        { id: 1, name: "Plant 1", price: 20, image: "https://via.placeholder.com/150" },
        { id: 2, name: "Plant 2", price: 30, image: "https://via.placeholder.com/150" },
        { id: 3, name: "Plant 3", price: 25, image: "https://via.placeholder.com/150" },
      ]);
    
      const handleAddToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        localStorage.setItem("cart", JSON.stringify([...cart, { ...product, quantity: 1 }]));
        alert(`${product.name} added to cart!`);
      };

  return (
    <div className='product-list'>
         <button onClick={() => navigate('/cart')}>Go to Cart</button>
      {products.map((product) => (
        <div key={product.id} className='product-card'>
           <img src={product.image} alt={product.name} />
           <h3>{product.name}</h3>
           <p>${product.price}</p>
           <button onClick={() => handleAddToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default ProductListPage
