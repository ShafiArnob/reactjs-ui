import { getAllUsers } from "@/api/user";
import AddUserBtn from "@/components/AddUserBtn";
import AddUserForm from "@/components/AddUserForm";
import Container from "@/components/Container";
import Loading from "@/components/Loading";
import SearchBar from "@/components/SearchBar";
import { SortUsersSelect } from "@/components/SortUsersSelect";
import UserCard from "@/components/UserCard";
import { User } from "@/types/user";
import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [sortSelectInput, setSortSelectInput] = useState("name");
  const [showUserForm, setShowUserForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      const users = await getAllUsers();
      if (users == null) {
        setIsError(true);
        setLoading(false);
      }
      setUsers(users);
      setLoading(false);
    };
    fetchUsers();
  }, []);
  console.log(users);

  return (
    <Container>
      <div className="flex md:space-x-4 flex-col md:flex-row justify-center items-center px-6 md:px-0 my-6 mt-8 ">
        <div className="min-w-[320px] sm:2/4 md:w-1/3">
          <SearchBar setSearchInput={setSearchInput} />
        </div>
        <div className="flex justify-between mt-2 md:justify-center min-w-[320px] space-x-4 ">
          <SortUsersSelect setSortSelectInput={setSortSelectInput} />
          <AddUserBtn setShowUserForm={setShowUserForm} />
        </div>
      </div>
      <div className="transition-all duration-500 ease-in-out mb-6">
        {showUserForm && <AddUserForm setUsers={setUsers} />}
      </div>
      {!loading && !isError && (
        <div className="grid place-content-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div key={user.id} className="mx-auto">
                <UserCard user={user} />
              </div>
            ))}
        </div>
      )}
      {loading && (
        <div className="flex justify-center items-center h-[400px]">
          <Loading />
        </div>
      )}
      {isError && <div>Users not found</div>}
    </Container>
  );
};

export default Home;
