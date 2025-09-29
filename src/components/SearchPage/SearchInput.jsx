import Input from "../../components/ui/Input"

const SearchInput = ({ onChange, onSearch, onClick }) => {
    return (
        <div className="mb-10">
            <Input onChange={onChange}
                onSearch={onSearch}
                onClick={onClick}
            />
        </div>
    )
}

export default SearchInput