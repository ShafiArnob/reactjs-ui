import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { FormEvent, useState } from "react";
import { User } from "@/types/user";

interface AddUserFormProps {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ setUsers }) => {
  // @ts-ignore
  const [newUser, setNewUser] = useState<User>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUsers((prev) => [...prev, { ...newUser, id: prev.length + 1 }]);
  };
  // console.log(newUser);

  return (
    <div className=" bg-purple-200 rounded-2xl mx-6">
      <div className="px-4 pt-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-purple-600 ">
          Add New User
        </h1>
      </div>
      <form className="p-4 space-y-2" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="First name"
          required
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, firstName: e.target.value }))
          }
        />
        <Input
          type="text"
          placeholder="Last name"
          required
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, lastName: e.target.value }))
          }
        />
        <Input
          type="email"
          placeholder="Email"
          required
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Address"
            required
            onChange={(e) =>
              setNewUser((prev) => ({
                ...prev,
                address: { address: e.target.value, city: prev?.address?.city },
              }))
            }
          />
          <Input
            type="text"
            placeholder="City"
            required
            onChange={(e) =>
              setNewUser((prev) => ({
                ...prev,
                address: {
                  city: e.target.value,
                  address: prev?.address?.address,
                },
              }))
            }
          />
        </div>
        <Input
          type="text"
          placeholder="Company name"
          required
          onChange={(e) =>
            setNewUser((prev) => ({
              ...prev,
              company: { name: e.target.value },
            }))
          }
        />
        <Input
          type="text"
          placeholder="Image link"
          required
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, image: e.target.value }))
          }
        />
        <div className="pt-2">
          <Button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 font-semibold h-[39px] w-1/12 max-w-[100px] min-w-[80px]"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
