
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Conversation } from "@/data/messageData";
import { cn } from "@/lib/utils";

interface MessagesListProps {
  conversations: Conversation[];
  activeId: string | null;
  onSelectConversation: (id: string) => void;
  preview?: boolean;
}

export const MessagesList = ({
  conversations,
  activeId,
  onSelectConversation,
  preview = false
}: MessagesListProps) => {
  if (conversations.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">No conversations found</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {conversations.map((conversation) => (
        <div
          key={conversation.id}
          className={cn(
            "p-3 rounded-lg cursor-pointer transition-colors",
            activeId === conversation.id
              ? "bg-secondary/50"
              : "hover:bg-secondary/20",
            preview && "max-h-24 overflow-hidden"
          )}
          onClick={() => onSelectConversation(conversation.id)}
        >
          <div className="flex items-start gap-3">
            <Avatar className="h-10 w-10 border">
              <AvatarImage src={conversation.avatar} alt={conversation.userName} />
              <AvatarFallback>
                {conversation.userName.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-medium truncate">{conversation.userName}</h3>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                  {conversation.timestamp}
                </span>
              </div>
              
              <div className="flex items-start">
                <p className={cn(
                  "text-sm truncate",
                  conversation.unread ? "font-medium text-foreground" : "text-muted-foreground"
                )}>
                  {conversation.lastMessage}
                </p>
                
                {conversation.unread && (
                  <span className="ml-2 flex-shrink-0 rounded-full bg-primary w-2 h-2" />
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
