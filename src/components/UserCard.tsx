import { User } from "@/types/user";
import { Link } from "react-router-dom";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div>
      <div className="rounded-2xl h-[440px] flex flex-col items-start p-4 overflow-hidden shadow-md border border-gray-50  hover:scale-[101%] transition-all gap-1">
        <Link to={`/${user.id}`} className="w-full">
          <img src={user?.image} alt="user" className="mb-1" />
          <h1 className="text-xl font-semibold">
            {user?.firstName} {user.lastName}
          </h1>
        </Link>
        <p>Email: {user.email}</p>
        <p className="text-sm">
          Address: {user.address.address}, {user.address.city}
        </p>
        <p className="text-sm">Company name: {user.company.name}</p>
      </div>
    </div>
  );
};

export default UserCard;
