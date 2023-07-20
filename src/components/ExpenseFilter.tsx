import {categories} from "../categories.ts";

interface Props {
    onSelectCategory : (category: string) => void;
}
const ExpenseFilter = ({onSelectCategory}: Props) => {
    return (
        <select className="form-select mb-3" onChange={(e) => onSelectCategory(e.target.value)}>
            <option value="">AllCategories</option>
            {categories.map(category=> (
                <option value={category} key={category}>{category}</option>
            ))}
        </select>
    );
};

export default ExpenseFilter;