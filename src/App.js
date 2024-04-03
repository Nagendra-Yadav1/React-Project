import React, { useState } from "react";
import Expenses from "./components/EXPENSES/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "School Fee",
    amount: 250,
    date: new Date(2023, 3, 28)
  },
  {
    id: "e2",
    title: "Books",
    amount: 400,
    date: new Date(2023, 5, 28)
  },
  {
    id: "e3",
    title: "Bike",
    amount: 500,
    date: new Date(2023, 6, 28)
  },
  {
    id: "e4",
    title: "Food",
    amount: 500,
    date: new Date(2023, 8, 28)
  }
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    const updatedExpenses = [expense, ...expenses];
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
