import { getSingleUser } from "@/api/user";
import Container from "@/components/Container";
import { User } from "@/types/user";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

const UserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User>({});

  useEffect(() => {
    const fetchUsers = async () => {
      const user = await getSingleUser(id as string);
      setUser(user);
    };
    if (id) {
      fetchUsers();
    }
  }, [id]);

  if (Object.keys(user).length === 0) {
    return <h1>Loading..</h1>;
  }

  return (
    <Container>
      <div className="flex flex-col h-screen w-full items-center mt-8">
        <div className="p-2 w-2/3">
          <div className="w-[70px]">
            <Link
              to="/"
              className="flex items-center gap-2 text-lg font-medium text-zinc-400 transition duration-300  hover:text-purple-600 transform hover:-translate-x-2"
            >
              <IoArrowBackOutline className="" />
              <p className="">back</p>
            </Link>
          </div>
        </div>
        <div className="flex border-2 rounded-2xl p-2 w-2/3 gap-4 border-purple-300">
          <div className="bg-purple-100 rounded-2xl p-2">
            <img src={user?.image} alt="user" className="mb-1" />
          </div>
          <div className="space-y-1 p-2 my-2">
            {/* <h1 className="text-xl font-semibold">
              {user?.firstName} {user?.lastName}
            </h1> */}
            <h2 className="text-xl text-zinc-600">
              First name:{" "}
              <span className="text-zinc-700 font-semibold">
                {user?.firstName}
              </span>
            </h2>
            <h2 className="text-xl text-zinc-600">
              Last name:{" "}
              <span className="text-zinc-700 font-semibold">
                {user?.lastName}
              </span>
            </h2>
            <h3 className="text-xl text-zinc-600">
              Email:{" "}
              <span className="text-zinc-700 font-semibold">{user?.email}</span>
            </h3>
            <h3 className="text-xl text-zinc-600">
              Address:{" "}
              <span className="text-zinc-700 font-semibold">
                {user?.address?.address}, {user?.address?.city}
              </span>
            </h3>
            <h3 className="text-xl text-zinc-600">
              Company name:{" "}
              <span className="text-zinc-700 font-semibold">
                {user?.company?.name}
              </span>
            </h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserPage;
