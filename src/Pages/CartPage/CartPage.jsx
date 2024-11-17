import { useState, useEffect } from 'react'
import './CartPage.css'

const CartPage = () => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(cart);
    }, []);
  
    const updateQuantity = (id, quantity) => {
      const updatedCart = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity + quantity, 1) } : item
      );
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
  
    const handleRemove = (id) => {
      const updatedCart = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <div>
              <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1} className='button'> 
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)} className='button'>+</button>
            </div>
            <button onClick={() => handleRemove(item.id)} className='button'>Remove</button>
          </div>
        ))
      )}
    </div>
  )
}

export default CartPage
