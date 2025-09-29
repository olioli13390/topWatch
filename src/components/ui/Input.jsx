import { CircleX } from "lucide-react";

const Input = ({ type, placeholder, value, onChange, onSearch, onClick }) => {


    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onSearch();
        }
    };

    return (
        <div className="flex items-center gap-5">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyDown={handleKeyDown}
                className="input"
            />
            <button
                className="cursor-pointer hover:text-white transition duration-300"
            >
                <CircleX
                    onClick={onClick}
                />
            </button>
        </div>

    );
};

export default Input
