import "./CartPage.css";

const CartPage = ({ cartItems, onClose }) => {
  return (
    <div className="cart-drawer">
      <button onClick={onClose} className="close-btn">
        X
      </button>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <span>Quantity: {item.quantity}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
