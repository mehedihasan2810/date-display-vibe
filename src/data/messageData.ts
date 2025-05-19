
export interface Conversation {
  id: string;
  userName: string;
  avatar?: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  messages: Message[];
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  read: boolean;
}

export const mockConversations: Conversation[] = [
  {
    id: "conv1",
    userName: "Jessica Thompson",
    avatar: "/placeholder.svg",
    lastMessage: "Would you like to meet for coffee sometime?",
    timestamp: "2 min ago",
    unread: true,
    messages: [
      {
        id: "m1",
        senderId: "user1",
        text: "Hi Jessica, I saw your profile and we have a lot in common!",
        timestamp: "Yesterday at 2:30 PM",
        read: true
      },
      {
        id: "m2",
        senderId: "jessica",
        text: "Hi there! I noticed that too. What do you enjoy doing on weekends?",
        timestamp: "Yesterday at 3:45 PM",
        read: true
      },
      {
        id: "m3",
        senderId: "user1",
        text: "I love hiking and trying out new restaurants. How about you?",
        timestamp: "Yesterday at 4:12 PM",
        read: true
      },
      {
        id: "m4",
        senderId: "jessica",
        text: "That's wonderful! I'm a big foodie too and enjoy outdoor activities.",
        timestamp: "Yesterday at 5:00 PM",
        read: true
      },
      {
        id: "m5",
        senderId: "jessica",
        text: "Would you like to meet for coffee sometime?",
        timestamp: "Today at 9:30 AM",
        read: false
      }
    ]
  },
  {
    id: "conv2",
    userName: "Michael Johnson",
    avatar: "/placeholder.svg",
    lastMessage: "Just sent you the details for the event",
    timestamp: "1 hr ago",
    unread: false,
    messages: [
      {
        id: "m1",
        senderId: "michael",
        text: "Hey, are you going to the concert next weekend?",
        timestamp: "Monday at 1:15 PM",
        read: true
      },
      {
        id: "m2",
        senderId: "user1",
        text: "I was thinking about it! Are you going?",
        timestamp: "Monday at 2:30 PM",
        read: true
      },
      {
        id: "m3",
        senderId: "michael",
        text: "Yes, I have two tickets. Would you like to join me?",
        timestamp: "Monday at 2:45 PM",
        read: true
      },
      {
        id: "m4",
        senderId: "user1",
        text: "That sounds great! What time does it start?",
        timestamp: "Yesterday at 10:20 AM",
        read: true
      },
      {
        id: "m5",
        senderId: "michael",
        text: "Just sent you the details for the event",
        timestamp: "Today at 11:32 AM",
        read: true
      }
    ]
  },
  {
    id: "conv3",
    userName: "Sophia Garcia",
    avatar: "/placeholder.svg",
    lastMessage: "I'll be there around 7:30 PM",
    timestamp: "3 hrs ago",
    unread: true,
    messages: [
      {
        id: "m1",
        senderId: "sophia",
        text: "Hey, I saw you're into photography too!",
        timestamp: "Sunday at 3:45 PM",
        read: true
      },
      {
        id: "m2",
        senderId: "user1",
        text: "Yes! I've been shooting for about 3 years now. How about you?",
        timestamp: "Sunday at 4:20 PM",
        read: true
      },
      {
        id: "m3",
        senderId: "sophia",
        text: "About 4 years. There's a photography meetup this weekend, are you interested?",
        timestamp: "Yesterday at 9:15 AM",
        read: true
      },
      {
        id: "m4",
        senderId: "user1",
        text: "That sounds interesting! Where and when is it?",
        timestamp: "Yesterday at 11:30 AM",
        read: true
      },
      {
        id: "m5",
        senderId: "sophia",
        text: "I'll be there around 7:30 PM",
        timestamp: "Today at 2:15 PM",
        read: false
      }
    ]
  },
  {
    id: "conv4",
    userName: "David Wilson",
    avatar: "/placeholder.svg",
    lastMessage: "Looking forward to seeing you at the party",
    timestamp: "Yesterday",
    unread: false,
    messages: [
      {
        id: "m1",
        senderId: "david",
        text: "Hi there, we matched! How's your day going?",
        timestamp: "Tuesday at 5:30 PM",
        read: true
      },
      {
        id: "m2",
        senderId: "user1",
        text: "Hey David! It's going well, thanks for asking. How about yours?",
        timestamp: "Tuesday at 6:45 PM",
        read: true
      },
      {
        id: "m3",
        senderId: "david",
        text: "Pretty good! I'm planning to go to my friend's party this weekend. Would you like to join?",
        timestamp: "Tuesday at 7:20 PM",
        read: true
      },
      {
        id: "m4",
        senderId: "user1",
        text: "That sounds like fun! When and where?",
        timestamp: "Wednesday at 8:15 AM",
        read: true
      },
      {
        id: "m5",
        senderId: "david",
        text: "Looking forward to seeing you at the party",
        timestamp: "Yesterday at 7:30 PM",
        read: true
      }
    ]
  },
  {
    id: "conv5",
    userName: "Emma Roberts",
    avatar: "/placeholder.svg",
    lastMessage: "That bookstore you recommended was amazing!",
    timestamp: "2 days ago",
    unread: false,
    messages: [
      {
        id: "m1",
        senderId: "emma",
        text: "I see we both love reading! What's your favorite book?",
        timestamp: "Monday at 12:45 PM",
        read: true
      },
      {
        id: "m2",
        senderId: "user1",
        text: "I love 'The Great Gatsby'! But I also enjoy mystery novels. How about you?",
        timestamp: "Monday at 1:30 PM",
        read: true
      },
      {
        id: "m3",
        senderId: "emma",
        text: "I'm a big fan of Jane Austen's works. Do you know any good bookstores in the area?",
        timestamp: "Monday at 2:15 PM",
        read: true
      },
      {
        id: "m4",
        senderId: "user1",
        text: "There's a lovely one downtown called 'Page Turner'. They have a great collection!",
        timestamp: "Tuesday at 10:20 AM",
        read: true
      },
      {
        id: "m5",
        senderId: "emma",
        text: "That bookstore you recommended was amazing!",
        timestamp: "Tuesday at 5:45 PM",
        read: true
      }
    ]
  }
];
