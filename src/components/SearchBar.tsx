import { Input } from "./ui/input";

interface SearchBarProps {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchInput }) => {
  const handleInput = (query: string) => {
    setSearchInput(query);
  };

  return (
    <div className=" w-1/3">
      <Input
        className="border-2 border-purple-300 focus-visible:border-purple-500"
        placeholder="Search"
        onChange={(e) => handleInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
