import { Button } from "./ui/button";
import { FaPlus } from "react-icons/fa";
const AddUserBtn = () => {
  return (
    <Button
      className="bg-purple-500 hover:bg-purple-600 font-semibold h-[39px] space-x-0.5"
      size="sm"
    >
      <FaPlus />
      <span>Add user</span>
    </Button>
  );
};

export default AddUserBtn;
