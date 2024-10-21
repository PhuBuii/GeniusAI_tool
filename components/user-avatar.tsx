import { useUser } from "@clerk/nextjs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const UserAvatar = () => {
  const { user } = useUser();

  // Type assertion to include the expected property
  const userWithProfileImage = user as {
    profileImageUrl?: string;
    firstName?: string;
  };

  return (
    <Avatar className="h-8 w-8">
      <AvatarImage src={userWithProfileImage.profileImageUrl} />
      <AvatarFallback>
        {userWithProfileImage.firstName?.charAt(0)}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
