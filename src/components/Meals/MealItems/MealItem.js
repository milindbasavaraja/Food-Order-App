import "./css/mealItem.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/card-context";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtxt = useContext(CartContext);
  const addToCardHandler = (amount) => {
    cartCtxt.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCard={addToCardHandler} />
      </div>
    </li>
  );
};

export default MealItem;
