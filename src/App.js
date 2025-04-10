import Expenses from "./components/Expenses/Expenses.js";
import NewExpenses from "./components/NewExpenses/NewExpenses.js";
import React, { useState } from "react";

let expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expensesStatic, setExpensesStatic] = useState(expenses);

  const setExpenseDataHandler = (newExpense) => {

    setExpensesStatic((prevExpenses) => {
      const updatedExpenses = [newExpense, ...prevExpenses];

      return updatedExpenses;
    });

  };

  return (
    <div>
      <NewExpenses expenseDataPassed={setExpenseDataHandler} />
      <Expenses items={expensesStatic}></Expenses>
    </div>
  );
};

export default App;
