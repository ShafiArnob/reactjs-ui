import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface SortUsersSelectProps {
  setSortSelectInput: React.Dispatch<React.SetStateAction<string>>;
}

export const SortUsersSelect: React.FC<SortUsersSelectProps> = ({
  setSortSelectInput,
}) => {
  return (
    <Select onValueChange={(e) => setSortSelectInput(e)}>
      <SelectTrigger className="w-[200px] border-2 focus:border-purple-500">
        <p className="text-sm text-zinc-400">Sort by:</p>
        <SelectValue placeholder="Name" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem className="hover:bg-purple-50" value="name">
          Name
        </SelectItem>
        <SelectItem className="hover:bg-purple-50" value="email">
          Email
        </SelectItem>
        <SelectItem className="hover:bg-purple-50" value="company">
          Company Name
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
