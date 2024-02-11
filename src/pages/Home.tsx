import { getAllUsers } from "@/api/user";
import Container from "@/components/Container";
import UserCard from "@/components/UserCard";
import { User } from "@/types/user";
import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getAllUsers();
      setUsers(users);
    };
    fetchUsers();
  }, []);
  console.log(users);

  return (
    <Container>
      <div className="flex flex-wrap justify-center  w-full gap-4 p-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </Container>
  );
};

export default Home;
