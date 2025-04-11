import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem.js";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card.js";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContnet = <p>No existing expense</p>;

  if (filteredExpenses.length > 0) {
    expensesContnet = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContnet}
    </Card>
  );
};

export default Expenses;
