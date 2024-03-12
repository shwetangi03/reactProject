import React from 'react';

import Expenses from "./components/Expenses/Expenses"

const App=() =>{
  const expenses=  [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 56.23,
      date: new Date(2020, 3, 23),
      // location: "Nal Bazaar",
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 56.23,
      date: new Date(2020, 3, 23),
      // location: "CSMT",
    },
    {
      id: "e3",
      title: "Bike Insurance",
      amount: 56.23,
      date: new Date(2020, 3, 23),
      // location: "Andheri",
    },
    {
      id: "e4",
      title: "grocery Expense",
      amount: 56.23,
      date: new Date(2020, 3, 23),
      // location: "Nerul",
    }
  ]
  return (
    <>
      <h2>Let's get started</h2>
      {/* {expenses.map((expenses) => (
        <ExpenseItem title={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
          location={expenses.location} />
      ))} */}
      <Expenses items={expenses}/>
    </>
  )
}

export default App
