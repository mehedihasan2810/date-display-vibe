
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const DashboardHeader = () => {
  // Mock user data - in a real app, this would come from authentication context
  const user = {
    name: "Sophie Anderson",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
    accountCompleted: 85
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-4 border-b">
      <div className="flex items-center gap-4">
        <Avatar className="h-14 w-14 border">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>
            {user.name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">Welcome back, {user.name.split(" ")[0]}!</h1>
          <p className="text-muted-foreground">
            Your profile is {user.accountCompleted}% complete
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <Button variant="outline" size="sm" asChild>
          <Link to="/edit-profile">
            Edit Profile
          </Link>
        </Button>
        <Button size="sm" asChild>
          <Link to="/">
            View Public Profile
          </Link>
        </Button>
      </div>
    </div>
  );
};
