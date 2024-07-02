import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (searchValue: string) => void;
  value: string;
}

function SearchBar({ onSearch, value }: SearchBarProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <div className="flex items-center w-full text-secondary bg-white/70 border border-gray-300 rounded-xl py-1.5 shadow overflow-hidden pl-4">
      <Search />
      <input
        type="text"
        placeholder="Search recipes..."
        className="flex-grow px-4 py-2 outline-none bg-white/70"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
