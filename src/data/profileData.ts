
import { ProfileData } from "../types/profile";

export const profileData: ProfileData = {
  id: "profile-123",
  name: "Sophie Anderson",
  age: 28,
  location: "San Francisco, CA",
  distance: "5 miles away",
  bio: "Adventure seeker and coffee enthusiast. I love hiking on weekends and exploring new cafes in the city. Looking for someone who enjoys meaningful conversations and spontaneous road trips.",
  photos: [
    {
      id: "photo-1",
      url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
      alt: "Profile picture of Sophie smiling",
      featured: true
    },
    {
      id: "photo-2",
      url: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b",
      alt: "Sophie hiking at sunset",
    },
    {
      id: "photo-3",
      url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      alt: "Sophie at a coffee shop",
    },
    {
      id: "photo-4",
      url: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f",
      alt: "Sophie on the beach",
    },
    {
      id: "photo-5",
      url: "https://images.unsplash.com/photo-1600618528240-fb9fc964b853",
      alt: "Sophie at a concert",
    }
  ],
  interests: [
    { name: "Hiking" },
    { name: "Photography" },
    { name: "Coffee" },
    { name: "Travel" },
    { name: "Reading" },
    { name: "Cooking" },
    { name: "Yoga" },
    { name: "Music" }
  ],
  height: "5'7\"",
  jobTitle: "UX Designer",
  education: "Stanford University",
  preferences: [
    { label: "Drinking", value: "Socially" },
    { label: "Smoking", value: "Never" },
    { label: "Kids", value: "Want someday" },
    { label: "Religion", value: "Spiritual" }
  ],
  compatibilityScore: 87,
  lastActive: "Just now",
  lookingFor: "Relationship",
  verified: true
};
