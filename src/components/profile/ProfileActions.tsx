
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, LogIn, UserPlus } from "lucide-react";

export const ProfileActions = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t p-3 flex items-center justify-center gap-3 z-50">
      <Button size="lg" className="flex-1 max-w-40">
        <Heart className="mr-2" />
        Like
      </Button>
      
      <Button size="lg" variant="secondary" className="flex-1 max-w-40">
        <MessageCircle className="mr-2" />
        Message
      </Button>

      <div className="fixed bottom-20 right-6 flex flex-col gap-2">
        <Button variant="outline" size="sm" className="rounded-full" asChild>
          <Link to="/signin">
            <LogIn className="mr-2" size={16} />
            Sign In
          </Link>
        </Button>
        <Button variant="outline" size="sm" className="rounded-full" asChild>
          <Link to="/signup">
            <UserPlus className="mr-2" size={16} />
            Sign Up
          </Link>
        </Button>
      </div>
    </div>
  );
};
