
import { useState } from "react";
import { Plus, Search, MoreHorizontal, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { toast } from "sonner";
import { MessagesList } from "@/components/messages/MessagesList";
import { ConversationPanel } from "@/components/messages/ConversationPanel";
import { NewChatPanel } from "@/components/messages/NewChatPanel";
import { mockConversations } from "@/data/messageData";

const Messages = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
  const [showNewChat, setShowNewChat] = useState(false);
  
  const filteredConversations = searchQuery 
    ? mockConversations.filter(conv => 
        conv.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase()))
    : mockConversations;

  const handleSelectConversation = (id: string) => {
    setActiveConversationId(id);
    setShowNewChat(false);
    
    // For mobile, automatically open the conversation panel
    if (window.innerWidth < 768) {
      document.getElementById('conversation-panel-trigger')?.click();
    }
  };

  const handleNewChat = () => {
    setActiveConversationId(null);
    setShowNewChat(true);
    
    // For mobile, automatically open the new chat panel
    if (window.innerWidth < 768) {
      document.getElementById('conversation-panel-trigger')?.click();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-6 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Sidebar - Conversation List */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Messages</h1>
              <Button size="sm" onClick={handleNewChat}>
                <Plus className="h-4 w-4 mr-1" />
                New Chat
              </Button>
            </div>
            
            <div className="relative mb-4">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                className="pl-10"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="hidden md:block">
              <MessagesList 
                conversations={filteredConversations}
                activeId={activeConversationId}
                onSelectConversation={handleSelectConversation}
              />
            </div>
            
            {/* Mobile View - Show Conversation List */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild id="conversation-panel-trigger">
                  <Button variant="outline" className="w-full">
                    {activeConversationId ? 
                      mockConversations.find(c => c.id === activeConversationId)?.userName || 'View Conversation' 
                      : showNewChat ? 'New Chat' : 'Select Conversation'}
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[90vh]">
                  {showNewChat ? (
                    <NewChatPanel onClose={() => toast("Message sent!")} />
                  ) : activeConversationId ? (
                    <ConversationPanel
                      conversation={mockConversations.find(c => c.id === activeConversationId)!}
                      onBack={() => setActiveConversationId(null)}
                    />
                  ) : (
                    <>
                      <h2 className="text-xl font-semibold mb-4">Conversations</h2>
                      <MessagesList 
                        conversations={filteredConversations}
                        activeId={activeConversationId}
                        onSelectConversation={handleSelectConversation}
                      />
                    </>
                  )}
                </SheetContent>
              </Sheet>
              
              {/* Show conversation previews for mobile */}
              <MessagesList 
                conversations={filteredConversations}
                activeId={activeConversationId}
                onSelectConversation={handleSelectConversation}
                preview={true}
              />
            </div>
          </div>
          
          {/* Conversation Panel - Desktop */}
          <div className="hidden md:block md:col-span-2 lg:col-span-3">
            {showNewChat ? (
              <Card className="h-[calc(100vh-8rem)] p-6">
                <NewChatPanel onClose={() => {
                  setShowNewChat(false);
                  toast("Message sent!");
                }} />
              </Card>
            ) : activeConversationId ? (
              <Card className="h-[calc(100vh-8rem)]">
                <ConversationPanel 
                  conversation={mockConversations.find(c => c.id === activeConversationId)!}
                  onBack={() => setActiveConversationId(null)}
                />
              </Card>
            ) : (
              <Card className="h-[calc(100vh-8rem)] flex flex-col items-center justify-center p-6 text-center">
                <div className="max-w-sm">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Your Messages</h2>
                  <p className="text-muted-foreground mb-6">
                    Select a conversation or start a new chat to begin messaging
                  </p>
                  <Button onClick={handleNewChat}>
                    <Plus className="h-4 w-4 mr-2" />
                    Start a New Chat
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
