import { getAllUsers } from "@/api/user";
import Container from "@/components/Container";
import SearchBar from "@/components/SearchBar";
import UserCard from "@/components/UserCard";
import { User } from "@/types/user";
import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getAllUsers();
      setUsers(users);
    };
    fetchUsers();
  }, []);

  return (
    <Container>
      <SearchBar setSearchInput={setSearchInput} />
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
          .map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
      </div>
    </Container>
  );
};

export default Home;
