import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses({ expenses }) {
  return (
    <div className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} props={expense} />
      ))}
    </div>
  );
}
