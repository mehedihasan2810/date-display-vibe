
import { useState } from "react";
import { ArrowLeft, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Conversation } from "@/data/messageData";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface ConversationPanelProps {
  conversation: Conversation;
  onBack?: () => void;
}

export const ConversationPanel = ({
  conversation,
  onBack,
}: ConversationPanelProps) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      toast("Message sent!");
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Conversation header */}
      <div className="flex items-center gap-3 p-4 border-b">
        {onBack && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="md:hidden"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
        )}

        <Avatar className="h-10 w-10">
          <AvatarImage src={conversation.avatar} alt={conversation.userName} />
          <AvatarFallback>
            {conversation.userName.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div>
          <h2 className="font-semibold">{conversation.userName}</h2>
        </div>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {conversation.messages.map((message) => {
          const isCurrentUser = message.senderId === "user1";
          
          return (
            <div
              key={message.id}
              className={cn(
                "flex",
                isCurrentUser ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] rounded-lg p-3",
                  isCurrentUser
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                )}
              >
                <p>{message.text}</p>
                <p className={cn(
                  "text-xs mt-1",
                  isCurrentUser
                    ? "text-primary-foreground/80"
                    : "text-secondary-foreground/80"
                )}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Message input */}
      <form
        onSubmit={handleSendMessage}
        className="border-t p-4 flex items-center gap-2"
      >
        <Input
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" size="icon" disabled={!newMessage.trim()}>
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
};
