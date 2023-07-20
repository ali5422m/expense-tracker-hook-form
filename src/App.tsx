import ExpenseList from "./components/ExpenseList.tsx";
import {useState} from "react";

function App() {
  const [expenses, setExpenses] = useState([
    {id: 1, description: "aaa", amount: 2, category: "Utelities"},
    {id: 2, description: "bbb", amount: 5, category: "mobile"},
    {id: 3, description: "ccc", amount: 10, category: "mobile"},
    {id: 4, description: "ddd", amount: 8, category: "mobile"}
  ])
  const handleDelete = (id: number) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  }


  return (
    <>
      <ExpenseList expenses={expenses} onDelete={handleDelete} />
    </>
  )
}

export default App
