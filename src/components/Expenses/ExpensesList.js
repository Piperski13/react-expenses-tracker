import React from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./ExpnesesList.css";

const ExpensesList = (props) => {
  let expensesContnet = <p>No existing expense</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">{expensesContnet}</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
