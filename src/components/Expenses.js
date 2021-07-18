
import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";


function Expenses(props){

  const [filteredYear, setFilteredYear] = useState('2021');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

    return <div>
    <Card className = 'expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter = {filterChangeHandler}/>
        {filteredExpenses.length === 0 ? <p>No Expenses Found</p> : filteredExpenses.map(expense => 
        <ExpenseItem 
        key = {expense.id}
        title = {expense.title} 
        amount = {expense.amount} 
        date ={expense.date}/>)}
        

    </Card>
    </div>
}

export default Expenses;