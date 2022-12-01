import { useContext } from "react";
import CartContext from "store/cart-context";
import MealItemForm from "./MealItemForm";
import styles from "./mealItem.module.css";

const MealItem = ({ meal }) => {
  const { addItem } = useContext(CartContext);

  const { price, name, description } = meal;
  const handledPrice = `${price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    addItem({
      ...meal,
      amount,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{handledPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
