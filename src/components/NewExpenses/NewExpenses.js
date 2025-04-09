import ExpensesForm from "./ExpensesForm.js";
import "./NewExpenses.css";

const NewExpenses = () => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log("Expense data: ", expenseData);
  };
  return (
    <div className="new-expense">
      <ExpensesForm onSaveExpenseData={saveExpenseDataHandler}></ExpensesForm>
    </div>
  );
};

export default NewExpenses;
