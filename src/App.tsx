import ExpenseList from "./components/ExpenseList.tsx";
import {useState} from "react";
import ExpenseFilter from "./components/ExpenseFilter.tsx";

function App() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [expenses, setExpenses] = useState([
        {id: 1, description: "aaa", amount: 2, category: "Utelities"},
        {id: 2, description: "bbb", amount: 5, category: "Utelities"},
        {id: 3, description: "ccc", amount: 10, category: "g"},
        {id: 4, description: "ddd", amount: 8, category: "Utelities"}
    ])
    const handleDelete = (id: number) => {
        setExpenses(expenses.filter(expense => expense.id !== id))
    }

    const visibleExpenses = selectedCategory
        ? expenses.filter(expense => expense.category === selectedCategory)
        : expenses


    return (
        <>
            <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)}/>
            <ExpenseList expenses={visibleExpenses} onDelete={handleDelete}/>
        </>
    )
}

export default App
