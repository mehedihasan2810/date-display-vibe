
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ProfileActions() {
  const { toast } = useToast();
  
  const handleLike = () => {
    toast({
      title: "Liked!",
      description: "You liked this profile",
    });
  };
  
  const handlePass = () => {
    toast({
      title: "Passed",
      description: "You passed on this profile",
      variant: "destructive",
    });
  };
  
  const handleMessage = () => {
    toast({
      title: "Message Sent",
      description: "Your message has been sent",
    });
  };
  
  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center gap-4 z-10">
      <div className="bg-background/80 backdrop-blur-md p-3 rounded-full shadow-lg flex items-center gap-3">
        <Button variant="outline" size="icon" className="rounded-full h-12 w-12" onClick={handlePass}>
          <X className="h-6 w-6 text-destructive" />
        </Button>
        
        <Button size="icon" className="rounded-full h-16 w-16 bg-primary hover:bg-primary/90" onClick={handleLike}>
          <Heart className="h-8 w-8" />
        </Button>
        
        <Button variant="outline" size="icon" className="rounded-full h-12 w-12" onClick={handleMessage}>
          <MessageCircle className="h-6 w-6 text-primary" />
        </Button>
      </div>
    </div>
  );
}
