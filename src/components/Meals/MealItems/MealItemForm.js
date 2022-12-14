import Input from "../../UI/Input";
import "./css/mealItemForm.css";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(amountInputRef.current.value);
    const enteredAmount = amountInputRef.current.value;
    const enteredAMountNumber = +enteredAmount;
    if (
      enteredAmount.trim().lenght === 0 ||
      enteredAMountNumber < 1 ||
      enteredAMountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCard(enteredAMountNumber);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
