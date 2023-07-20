import ExpenseList from "./components/ExpenseList.tsx";
import {useState} from "react";
import ExpenseFilter from "./components/ExpenseFilter.tsx";
import ExpenseForm from "./components/ExpenseForm.tsx";




function App() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [expenses, setExpenses] = useState([
        {id: 1, description: "aaa", amount: 2, category: "Utilities"},
        {id: 2, description: "bbb", amount: 5, category: "Utilities"},
        {id: 3, description: "ccc", amount: 10, category: "Utilities"},
        {id: 4, description: "ddd", amount: 8, category: "Utilities"}
    ])
    const handleDelete = (id: number) => {
        setExpenses(expenses.filter(expense => expense.id !== id))
    }

    const visibleExpenses = selectedCategory
        ? expenses.filter(expense => expense.category === selectedCategory)
        : expenses


    return (
        <>
            <div className="mb-5">
                <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])} />
            </div>
            {expenses.length > 0 && <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)}/>}
            <ExpenseList expenses={visibleExpenses} onDelete={handleDelete}/>
        </>
    )
}

export default App
