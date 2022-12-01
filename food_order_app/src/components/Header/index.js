import HeaderCart from "./HeaderCart";

import mealsImg from "assets/meals.jpg";
import styles from "./header.module.css";

const Header = ({ onClick }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCart onClick={onClick} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="meals" />
      </div>
    </>
  );
};

export default Header;
