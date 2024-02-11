import { User } from "@/types/user";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "./ui/card";

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Card className="h-[440px] max-w-[340px] border-gray-50 hover:scale-[101%] transition-all shadow-sm">
      <CardHeader className="mb-1 pb-0">
        <Link to={`/${user?.id}`} className="w-full">
          <img src={user?.image} alt="user" className="mb-1" />
          <h1 className="text-xl font-semibold">
            {user?.firstName} {user?.lastName}
          </h1>
        </Link>
      </CardHeader>
      <CardContent className="text-zinc-800">
        <p>Email: {user?.email}</p>
        <p className="text-sm">
          Address: {user.address.address}, {user?.address?.city}
        </p>
        <p className="text-sm">Company name: {user?.company?.name}</p>
      </CardContent>
    </Card>
  );
};

export default UserCard;
