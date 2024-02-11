import { getAllUsers } from "@/api/user";
import Container from "@/components/Container";
import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getAllUsers();
      setUsers(users);
    };
    fetchUsers();
  }, []);
  console.log(users);

  return <Container>Home</Container>;
};

export default Home;
