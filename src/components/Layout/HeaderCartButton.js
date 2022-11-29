import { useContext } from "react";
import CartContext from "../../store/card-context";
import CartIcon from "../Cart/CartIcon";
import "./css/headerCardButton.css";

const HeaderCardButton = (props) => {
  const cartCtxt = useContext(CartContext);
  const countOfCartItems = cartCtxt.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  return (
    <button className="button" onClick={props.onShowCartClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge"> {countOfCartItems} </span>
    </button>
  );
};

export default HeaderCardButton;
