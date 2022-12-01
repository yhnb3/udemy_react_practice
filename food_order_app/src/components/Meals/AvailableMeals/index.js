import { Card } from "components/shared";

import { DUMMY_MEALS } from "constant";
import styles from "./availableMeals.module.css";
import MealItem from "./MealItem";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} meal={meal} />
  ));
  return (
    <section className={styles.m}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
