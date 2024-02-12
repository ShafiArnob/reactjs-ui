import { Button } from "./ui/button";
import { FaPlus } from "react-icons/fa";

interface AddUserBtnProps {
  setShowUserForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddUserBtn: React.FC<AddUserBtnProps> = ({ setShowUserForm }) => {
  return (
    <Button
      className="bg-purple-500 hover:bg-purple-600 font-semibold h-[39px] space-x-0.5"
      size="sm"
      onClick={() => setShowUserForm((prev) => !prev)}
    >
      <FaPlus />
      <span>Add user</span>
    </Button>
  );
};

export default AddUserBtn;
