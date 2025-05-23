
import { useState } from "react";
import { Search, PlusCircle, Archive, Star, Trash2, MoreHorizontal, Send } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

// Mock data for conversations
const mockConversations = [
  {
    id: 1,
    name: "Emily Johnson",
    avatar: "/placeholder.svg",
    lastMessage: "Hey, are you free to meet up this weekend?",
    timestamp: "2 min ago",
    unread: true,
  },
  {
    id: 2,
    name: "Michael Thompson",
    avatar: "/placeholder.svg",
    lastMessage: "I liked your profile! Let's connect.",
    timestamp: "35 min ago",
    unread: true,
  },
  {
    id: 3,
    name: "Sophia Martinez",
    avatar: "/placeholder.svg",
    lastMessage: "Thanks for the chat, it was nice talking to you.",
    timestamp: "2 hours ago",
    unread: false,
  },
  {
    id: 4,
    name: "Daniel Wilson",
    avatar: "/placeholder.svg",
    lastMessage: "What are your interests?",
    timestamp: "5 hours ago",
    unread: false,
  },
  {
    id: 5,
    name: "Olivia Anderson",
    avatar: "/placeholder.svg",
    lastMessage: "I'm looking forward to our date tomorrow!",
    timestamp: "Yesterday",
    unread: false,
  },
  {
    id: 6,
    name: "James Taylor",
    avatar: "/placeholder.svg",
    lastMessage: "Do you like hiking?",
    timestamp: "Yesterday",
    unread: false,
  },
];

// Mock data for messages in a conversation
const mockMessages = [
  {
    id: 1,
    senderId: 2,
    text: "Hi there! I saw your profile and thought we might have a lot in common.",
    timestamp: "10:30 AM",
  },
  {
    id: 2,
    senderId: 1,
    text: "Hey! Thanks for reaching out. What interests do we share?",
    timestamp: "10:32 AM",
  },
  {
    id: 3,
    senderId: 2,
    text: "I noticed you're into photography and hiking. I love those too! What kind of photography do you do?",
    timestamp: "10:35 AM",
  },
  {
    id: 4,
    senderId: 1,
    text: "Mostly landscape and street photography. I've been hiking a lot recently too. Do you have any favorite trails?",
    timestamp: "10:38 AM",
  },
  {
    id: 5,
    senderId: 2,
    text: "That's awesome! I'm more into portrait photography myself. For hiking, I love the trails at Redwood National Park. Have you been there?",
    timestamp: "10:42 AM",
  },
];

const Messages = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedConversation, setSelectedConversation] = useState<number | null>(1);
  const [newMessage, setNewMessage] = useState("");
  const [showNewChat, setShowNewChat] = useState(false);
  const [newChatSearch, setNewChatSearch] = useState("");

  // Filter conversations based on search and active tab
  const filteredConversations = mockConversations.filter(
    (conversation) =>
      conversation.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (activeTab === "all" ||
        (activeTab === "unread" && conversation.unread) ||
        (activeTab === "starred" && conversation.starred))
  );

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    // In a real app, this would send the message to the backend
    console.log("Sending message:", newMessage);
    setNewMessage("");
  };

  return (
    <DashboardLayout>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b px-6 py-3">
          <h1 className="text-2xl font-semibold">Messages</h1>
          <Button onClick={() => setShowNewChat(true)} variant="outline" size="sm">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Chat
          </Button>
        </div>

        <div className="grid flex-1 md:grid-cols-[320px_1fr]">
          {/* Conversations sidebar */}
          <div className="flex flex-col border-r">
            <div className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search conversations..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <Tabs defaultValue="all" className="px-4" onValueChange={setActiveTab}>
              <TabsList className="w-full">
                <TabsTrigger value="all" className="flex-1">
                  All
                </TabsTrigger>
                <TabsTrigger value="unread" className="flex-1">
                  Unread
                </TabsTrigger>
                <TabsTrigger value="starred" className="flex-1">
                  Starred
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <Separator />

            <ScrollArea className="flex-1">
              {filteredConversations.length > 0 ? (
                filteredConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`flex cursor-pointer items-center gap-3 p-4 hover:bg-muted ${
                      selectedConversation === conversation.id ? "bg-muted" : ""
                    }`}
                    onClick={() => setSelectedConversation(conversation.id)}
                  >
                    <Avatar className="h-10 w-10">
                      <img src={conversation.avatar} alt={conversation.name} />
                    </Avatar>
                    <div className="flex-1 overflow-hidden">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{conversation.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {conversation.timestamp}
                        </span>
                      </div>
                      <p className="truncate text-sm text-muted-foreground">
                        {conversation.lastMessage}
                      </p>
                    </div>
                    {conversation.unread && (
                      <Badge variant="default" className="ml-auto h-2 w-2 rounded-full p-0" />
                    )}
                  </div>
                ))
              ) : (
                <div className="flex h-full flex-col items-center justify-center p-4">
                  <p className="text-center text-muted-foreground">No conversations found</p>
                </div>
              )}
            </ScrollArea>
          </div>

          {/* Conversation content */}
          <div className="flex flex-1 flex-col">
            {selectedConversation ? (
              <>
                {/* Chat header */}
                <div className="flex items-center justify-between border-b p-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <img
                        src={
                          mockConversations.find((c) => c.id === selectedConversation)?.avatar ||
                          "/placeholder.svg"
                        }
                        alt={
                          mockConversations.find((c) => c.id === selectedConversation)?.name ||
                          "User"
                        }
                      />
                    </Avatar>
                    <div>
                      <h2 className="font-medium">
                        {
                          mockConversations.find((c) => c.id === selectedConversation)?.name ||
                          "User"
                        }
                      </h2>
                      <p className="text-xs text-muted-foreground">Last active 5 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Archive className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Star className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Message area */}
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {mockMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${
                          message.senderId === 1 ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[70%] rounded-lg p-3 ${
                            message.senderId === 1
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted"
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <span className="block text-right text-xs opacity-70">
                            {message.timestamp}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                {/* Message input */}
                <div className="border-t p-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage}>
                      <Send className="mr-2 h-4 w-4" />
                      Send
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex h-full flex-col items-center justify-center p-4">
                <div className="text-center">
                  <h2 className="mb-2 text-xl font-medium">No conversation selected</h2>
                  <p className="text-muted-foreground">
                    Select a conversation from the sidebar or start a new chat
                  </p>
                  <Button
                    className="mt-4"
                    onClick={() => setShowNewChat(true)}
                    variant="outline"
                  >
                    <PlusCircle className="mr-2 h-4 w-4" />
                    New Chat
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* New chat modal */}
          {showNewChat && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
              <div className="w-full max-w-md rounded-lg bg-background p-6">
                <h2 className="mb-4 text-xl font-semibold">New Conversation</h2>
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search for people..."
                    className="pl-9"
                    value={newChatSearch}
                    onChange={(e) => setNewChatSearch(e.target.value)}
                  />
                </div>
                <div className="max-h-[300px] overflow-y-auto py-2">
                  {/* Mock search results */}
                  {mockConversations.map((user) => (
                    <div
                      key={user.id}
                      className="flex cursor-pointer items-center gap-3 rounded-md p-2 hover:bg-muted"
                      onClick={() => {
                        setSelectedConversation(user.id);
                        setShowNewChat(false);
                      }}
                    >
                      <Avatar className="h-10 w-10">
                        <img src={user.avatar} alt={user.name} />
                      </Avatar>
                      <span>{user.name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-end gap-3">
                  <Button variant="outline" onClick={() => setShowNewChat(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Messages;
