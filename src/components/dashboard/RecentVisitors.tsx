
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const RecentVisitors = () => {
  // Mock data - in a real app, this would come from an API
  const visitors = [
    {
      id: "v1",
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      time: "10 minutes ago",
      mutualInterests: 3
    },
    {
      id: "v2",
      name: "Taylor Reed",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      time: "2 hours ago",
      mutualInterests: 4
    },
    {
      id: "v3",
      name: "Jordan Casey",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      time: "Yesterday",
      mutualInterests: 2
    },
    {
      id: "v4",
      name: "Jamie Wilson",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
      time: "2 days ago",
      mutualInterests: 5
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Profile Visitors</CardTitle>
        <CardDescription>People who viewed your profile</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {visitors.map((visitor) => (
          <div key={visitor.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={visitor.avatar} alt={visitor.name} />
                <AvatarFallback>
                  {visitor.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{visitor.name}</p>
                <p className="text-xs text-muted-foreground">{visitor.time}</p>
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              {visitor.mutualInterests} mutual interests
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">View All Visitors</Button>
      </CardFooter>
    </Card>
  );
};
