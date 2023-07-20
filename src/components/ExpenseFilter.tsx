
interface Props {
    onSelectCategory : (category: string) => void;
}
const ExpenseFilter = ({onSelectCategory}: Props) => {
    return (
        <select className="form-select mb-3" onChange={(e) => onSelectCategory(e.target.value)}>
            <option value="">AllCategories</option>
            <option value="Utelities">Utelities</option>
            <option value="g">g</option>
            <option value="f">f</option>
        </select>
    );
};

export default ExpenseFilter;