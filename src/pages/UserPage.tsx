import { getSingleUser } from "@/api/user";
import { User } from "@/types/user";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | object>({});

  useEffect(() => {
    const fetchUsers = async () => {
      const user = await getSingleUser(id as string);
      setUser(user);
    };
    if (id) {
      fetchUsers();
    }
  }, [id]);
  console.log(user);

  return <div>User: {id}</div>;
};

export default UserPage;
