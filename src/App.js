import React from 'react'
import Expense from "./components/Expenses/Expense"

const App = () => {

  const expense = [
    {
      id: 'e1',
      title: 'Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div >
      <h2>Lets get started</h2>
      <Expense item={expense} />

    </div>
  );
}

export default App;
