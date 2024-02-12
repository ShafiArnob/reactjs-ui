import { getAllUsers } from "@/api/user";
import AddUserBtn from "@/components/AddUserBtn";
import Container from "@/components/Container";
import SearchBar from "@/components/SearchBar";
import { SortUsersSelect } from "@/components/SortUsersSelect";
import UserCard from "@/components/UserCard";
import { User } from "@/types/user";
import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [sortSelectInput, setSortSelectInput] = useState("name");

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getAllUsers();
      setUsers(users);
    };
    fetchUsers();
  }, []);
  // console.log(typeof sortSelectInput);

  return (
    <Container>
      <div className="flex justify-center my-4 p-4 space-x-3">
        <SearchBar setSearchInput={setSearchInput} />
        <SortUsersSelect setSortSelectInput={setSortSelectInput} />
        <AddUserBtn />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 ">
        {users
          .filter((user) => {
            if (searchInput) {
              return `${user.firstName} ${user.lastName}`
                .toLowerCase()
                .includes(searchInput);
            } else {
              return true;
            }
          })
          .sort((a, b) => {
            let fieldA, fieldB;
            if (sortSelectInput === "name") {
              fieldA = `${a.firstName} ${a.lastName}`.toLowerCase();
              fieldB = `${b.firstName} ${b.lastName}`.toLowerCase();
            } else if (sortSelectInput === "email") {
              fieldA = a.email.toLowerCase();
              fieldB = b.email.toLowerCase();
            } else if (sortSelectInput === "company") {
              fieldA = a.company.name.toLowerCase();
              fieldB = b.company.name.toLowerCase();
            } else {
              // Default
              fieldA = `${a.firstName} ${a.lastName}`.toLowerCase();
              fieldB = `${a.firstName} ${a.lastName}`.toLowerCase();
            }
            // Compare the two fields and return the result
            if (fieldA < fieldB) return -1;
            if (fieldA > fieldB) return 1;
            return 0;
          })
          .map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
      </div>
    </Container>
  );
};

export default Home;
