import React, {useState} from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Commode',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'Sink', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Private Jet',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Chair',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];




function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

 
  return (
    <div>
      <h2>Lets get started!</h2>
      <p>This is also Visible?</p>
      <NewExpense onAddExpense = {addExpenseHandler}/>
     <Expenses items = {expenses} />
    </div>
  );
}

export default App;
