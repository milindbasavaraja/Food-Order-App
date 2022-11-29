import { useContext } from "react";
import CartContext from "../../store/card-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import "./css/cart.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  console.log("The total amount is ", cartContext.totalAmount.toFixed(2));
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = (id) => {};
  const cartItemAddHandler = (item) => {};

  const cartItems = (
    <ul className="cart-items">
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className="button-1">Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
