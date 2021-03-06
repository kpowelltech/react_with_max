import React from "react";
import { useState } from "react/cjs/react.development";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import AddNewExpenseWindow from "./components/AddNewExpenseWindow/AddNewExpenseWindow";



function App() {

  
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: "e2", 
      title: "New TV", 
      amount: 799.49, 
      date: new Date(2021, 2, 12) },
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

  const [expenseWindowOpen, setExpenseWindow] = useState(false)

  const [allExpenses, setAllExpenses] = useState(expenses)

  const userSelectedDate = (dateInput) => {

    console.log(dateInput);

  }

  const onSavedExpenseHandler = (newExpense) => {
  
    setAllExpenses(prevState => {
      return [newExpense, ...prevState]
    })

    setExpenseWindow(false)
  }

  const onClickOpenNewExpenseWindow = () => {
    setExpenseWindow(true)
  }

  const onCancelHandler = () => {
    setExpenseWindow(false)
  }

  return (
    <div>
    {
      expenseWindowOpen ? <NewExpense savedExpenseData={onSavedExpenseHandler} onClickOpen={onClickOpenNewExpenseWindow} onCancel={onCancelHandler}/> 
      : <AddNewExpenseWindow onClickOpen={onClickOpenNewExpenseWindow}/>
      }
      
      
      <Expenses expenses={allExpenses} onUserSelectedDate = {userSelectedDate}/>
    </div>
  );
}

export default App;
