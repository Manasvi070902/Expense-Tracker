import React, { useState } from 'react'
import './Expense.css'
import ExpenseList from "./ExpenseList"
import ExpenseFilter from './ExpenseFilter'
import ExpensesChart from './ExpensesChart'
import Card from '../UI/Card'

const Expense = (props) => {

    const [filteredYear, setFilterYear] = useState('2020')
    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear)

    }

    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

   
    return (
        <Card className="expenses">
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
           <ExpensesChart expenses={filteredExpenses} />
            <ExpenseList item={filteredExpenses} />
            {/* 
            conditional statements - ternary operator (method-1)
            {filteredExpenses.length === 0 ?
                <p>No expense found</p>
                : (filteredExpenses.map(expense =>
                    <ExpenseItem 
                    key={expense.id} 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} />
                ))
            } */}

            {/* 
            conditional statements - and operator(&&) (method-2)
            {filteredExpenses.length === 0 && <p>No expense found</p>}
            {filteredExpenses.length > 0 && 
            filteredExpenses.map(expense =>
                    <ExpenseItem 
                    key={expense.id} 
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} />
                )} */}
           

        </Card>
    );
};

export default Expense;