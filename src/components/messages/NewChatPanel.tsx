
import { useState } from "react";
import { Search, Send, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";

interface NewChatPanelProps {
  onClose: () => void;
}

const mockUsers = [
  { id: "user1", name: "Jessica Thompson", avatar: "/placeholder.svg" },
  { id: "user2", name: "Michael Johnson", avatar: "/placeholder.svg" },
  { id: "user3", name: "Sophia Garcia", avatar: "/placeholder.svg" },
  { id: "user4", name: "David Wilson", avatar: "/placeholder.svg" },
  { id: "user5", name: "Emma Roberts", avatar: "/placeholder.svg" },
  { id: "user6", name: "Daniel Brown", avatar: "/placeholder.svg" },
  { id: "user7", name: "Olivia Martinez", avatar: "/placeholder.svg" },
  { id: "user8", name: "William Taylor", avatar: "/placeholder.svg" },
];

export const NewChatPanel = ({ onClose }: NewChatPanelProps) => {
  const [step, setStep] = useState<"select" | "compose">("select");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState<typeof mockUsers[0] | null>(null);
  const [message, setMessage] = useState("");

  const filteredUsers = searchQuery
    ? mockUsers.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockUsers;

  const handleSelectUser = (user: typeof mockUsers[0]) => {
    setSelectedUser(user);
    setStep("compose");
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onClose();
    }
  };

  const handleBack = () => {
    if (step === "compose") {
      setStep("select");
      setSelectedUser(null);
    } else {
      onClose();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 p-4 border-b">
        <Button variant="ghost" size="icon" onClick={handleBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h2 className="font-semibold">
          {step === "select" ? "New Message" : `Message to ${selectedUser?.name}`}
        </h2>
      </div>

      {step === "select" ? (
        <>
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                className="pl-10"
                placeholder="Search for a person..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredUsers.length === 0 ? (
              <div className="text-center p-4">
                <p className="text-muted-foreground">No users found</p>
              </div>
            ) : (
              <div className="space-y-2 p-2">
                {filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    className="p-3 rounded-lg hover:bg-secondary/20 cursor-pointer transition-colors"
                    onClick={() => handleSelectUser(user)}
                  >
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>
                          {user.name.substring(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-medium">{user.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex-1 p-4">
            <div className="flex items-center gap-3 mb-4">
              <Avatar>
                <AvatarImage src={selectedUser?.avatar} alt={selectedUser?.name} />
                <AvatarFallback>
                  {selectedUser?.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-medium">{selectedUser?.name}</h3>
            </div>
            
            <form onSubmit={handleSendMessage} className="space-y-4">
              <Textarea
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[150px]"
                required
              />
              
              <div className="flex justify-end">
                <Button type="submit" disabled={!message.trim()}>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};
