import { useContext } from "react";

import { Modal } from "components/shared";
import CartContext from "store/cart-context";
import styles from "./cart.module.css";
import CartItem from "./CartItem";

const Cart = ({ onClick }) => {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);
  const fixedTotalAmount = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          meal={item}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={onClick}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{fixedTotalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onClick}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
