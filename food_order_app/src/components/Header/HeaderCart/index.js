import { useContext, useEffect, useState } from "react";
import CartContext from "store/cart-context";

import { CartIcon } from "assets/icons";
import styles from "./headerCart.module.css";

const HeaderCart = ({ onClick }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const { items } = useContext(CartContext);
  const numberOfItems = items.reduce(
    (accNumber, item) => accNumber + item.amount,
    0
  );

  const buttonStyles = `${styles.button} ${
    btnIsHighlighted ? styles.bump : ""
  }`;
  useEffect(() => {
    if (numberOfItems > 0) {
      setBtnIsHighlighted(true);
    }
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [numberOfItems]);

  return (
    <button className={buttonStyles} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCart;
