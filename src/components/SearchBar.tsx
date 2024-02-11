import { Input } from "./ui/input";

interface SearchBarProps {
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchInput }) => {
  const handleInput = (query: string) => {
    setSearchInput(query);
  };

  return (
    <div className="my-4 p-4 w-1/3">
      <Input
        className="border-2 focus-visible:border-purple-500"
        onChange={(e) => handleInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
