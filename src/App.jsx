import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 56.23,
    date: new Date(2022, 6, 23),
    // location: "Nal Bazaar",
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 56.23,
    date: new Date(2021, 3, 23),
    // location: "CSMT",
  },
  {
    id: "e3",
    title: "Bike Insurance",
    amount: 56.23,
    date: new Date(2023, 4, 23),
    // location: "Andheri",
  },
  {
    id: "e4",
    title: "grocery Expense",
    amount: 56.23,
    date: new Date(2021, 3, 23),
    // location: "Nerul",
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </>
  );
};

export default App;
