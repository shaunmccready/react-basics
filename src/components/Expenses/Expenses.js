import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
    const [filterYear, setFilterYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => {
        setFilterYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter(
        (expense) => filterYear === expense.date.getFullYear().toString()
    )

    return (
        <Card className='expenses'>
            <ExpensesFilter
                onChangeFilter={filterChangeHandler}
                selected={filterYear}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    )
}

export default Expenses
