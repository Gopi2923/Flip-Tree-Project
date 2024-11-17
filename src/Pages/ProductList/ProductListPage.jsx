import { useState } from "react";
import "./ProductListPage.css";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/Images/Product-1.webp";
import img2 from "../../assets/Images/Product-2.webp";
import img3 from "../../assets/Images/Product-3.webp";

const ProductListPage = () => {
  const navigate = useNavigate();

  const [products] = useState([
    { id: 1, name: "Plant 1", price: 20, image: img1 },
    { id: 2, name: "Plant 2", price: 30, image: img2 },
    { id: 3, name: "Plant 3", price: 25, image: img3 },
  ]);

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    localStorage.setItem(
      "cart",
      JSON.stringify([...cart, { ...product, quantity: 1 }])
    );
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-list">
      <button onClick={() => navigate("/cart")}>Go to Cart</button>
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)} className="button">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductListPage;
