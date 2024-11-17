import { useState } from "react";
import "./ProductListPage.css";
import img1 from "../../assets/Images/Product-1.webp";
import img2 from "../../assets/Images/Product-2.webp";
import img3 from "../../assets/Images/Product-3.webp";
import CartPage from "../CartPage/CartPage";

const ProductListPage = () => {

  const [products] = useState([
    { id: 1, name: "Plant 1", price: 20, image: img1 },
    { id: 2, name: "Plant 2", price: 30, image: img2 },
    { id: 3, name: "Plant 3", price: 25, image: img3 },
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  });

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    let updatedCart;

    if (existingItem) {
      updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setIsCartOpen(true); 
  };

  const handleCloseCart = () => {
    setIsCartOpen(false); 
  };
 

  return (
    <div className="product-list">
    
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

      {isCartOpen && (
        <CartPage cartItems={cartItems} onClose={handleCloseCart}/>
      )}
    </div>
  );
};

export default ProductListPage;
