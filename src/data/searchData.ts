
import { ProfileData } from "@/types/profile";

const names = [
  "Emma Wilson", "James Taylor", "Olivia Martinez", "Noah Johnson", 
  "Sophia Anderson", "Liam Thompson", "Ava Rodriguez", "William Clark",
  "Isabella Lopez", "Benjamin Wright", "Mia Scott", "Elijah Davis",
  "Charlotte Lee", "Lucas Adams", "Amelia Turner", "Alexander Hill",
  "Harper Young", "Daniel King", "Evelyn Reed", "Matthew Evans",
  "Abigail Allen", "Michael Collins", "Elizabeth Nelson", "Ethan Carter"
];

const locations = [
  "San Francisco, CA", "New York, NY", "Chicago, IL", "Los Angeles, CA",
  "Seattle, WA", "Austin, TX", "Boston, MA", "Denver, CO",
  "Miami, FL", "Portland, OR", "Atlanta, GA", "Philadelphia, PA",
  "San Diego, CA", "Nashville, TN", "Washington, DC", "Dallas, TX"
];

const distances = [
  "2 miles away", "5 miles away", "8 miles away", "10 miles away",
  "12 miles away", "15 miles away", "20 miles away", "25 miles away",
  "30 miles away", "35 miles away", "40 miles away", "50 miles away"
];

const bios = [
  "Adventure seeker and coffee enthusiast. I love hiking on weekends and exploring new cafes in the city.",
  "Passionate about music and art. Looking for someone to share concerts and museum visits with.",
  "Foodie and travel addict. Always planning my next trip or trying out new restaurants.",
  "Fitness instructor by day, bookworm by night. I enjoy finding balance in life.",
  "Tech professional who loves the outdoors. Looking for someone to share adventures with.",
  "Creative soul with a love for photography. Let's capture some memories together!",
  "Film buff and amateur chef. My pasta carbonara will blow your mind!",
  "Dog lover and hiking enthusiast. My golden retriever is my best friend.",
  "Yoga instructor with a passion for sustainable living. Looking for like-minded connections.",
  "Engineer by profession, musician by passion. I play guitar in a local band.",
  "Avid traveler who's been to 30 countries. Ask me about my favorite destinations!",
  "Coffee shop owner with a love for literature. Let's discuss our favorite books."
];

const interests = [
  "Hiking", "Photography", "Coffee", "Travel", "Reading", "Cooking", 
  "Yoga", "Music", "Movies", "Dancing", "Art", "Fitness", "Gaming",
  "Cycling", "Swimming", "Climbing", "Painting", "Writing", "Gardening",
  "Baking", "Wine Tasting", "Volunteering", "Languages", "Meditation",
  "Tennis", "Basketball", "Soccer", "Guitar", "Piano", "Singing"
];

const photos = [
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  "https://images.unsplash.com/photo-1488161628813-04466f872be2",
  "https://images.unsplash.com/photo-1502323777036-f29e3972d82f",
  "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  "https://images.unsplash.com/photo-1492288991661-058aa541ff43",
  "https://images.unsplash.com/photo-1527736947477-2790e28f3443"
];

const jobTitles = [
  "Software Engineer", "Marketing Manager", "Teacher", "Graphic Designer",
  "Nurse", "Financial Analyst", "Chef", "Architect", "Photographer",
  "Writer", "Entrepreneur", "Doctor", "Lawyer", "Artist", "Consultant"
];

const educations = [
  "Stanford University", "UCLA", "NYU", "University of Michigan",
  "Columbia University", "Boston University", "UC Berkeley", "University of Texas",
  "Northwestern University", "University of Chicago", "Harvard University", "Yale University"
];

const preferences = [
  { label: "Drinking", values: ["Social Drinker", "Occasionally", "Never"] },
  { label: "Smoking", values: ["Non-smoker", "Occasionally", "Regular smoker"] },
  { label: "Kids", values: ["Want someday", "Don't want", "Have and want more", "Have and don't want more"] },
  { label: "Religion", values: ["Spiritual", "Christian", "Jewish", "Muslim", "Hindu", "Buddhist", "Atheist", "Agnostic"] }
];

const relationshipTypes = ["Relationship", "Casual", "Friendship"];

const getRandomItem = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

const getRandomItems = <T>(array: T[], min: number, max: number): T[] => {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const generateProfiles = (count: number): ProfileData[] => {
  return Array.from({ length: count }, (_, i) => {
    const name = getRandomItem(names);
    const location = getRandomItem(locations);
    const age = Math.floor(Math.random() * 30) + 22; // Ages 22-52
    
    const userInterests = getRandomItems(interests, 3, 8).map(name => ({ name }));
    const userPhotos = getRandomItems(photos, 3, 5).map((url, idx) => ({
      id: `photo-${i}-${idx}`,
      url,
      alt: `Photo of ${name}`,
      featured: idx === 0
    }));
    
    const userPreferences = preferences.map(p => ({
      label: p.label,
      value: getRandomItem(p.values)
    }));
    
    return {
      id: `profile-${i}`,
      name,
      age,
      location,
      distance: getRandomItem(distances),
      bio: getRandomItem(bios),
      photos: userPhotos,
      interests: userInterests,
      height: `${Math.floor(Math.random() * 15) + 5}'${Math.floor(Math.random() * 12)}"`,
      jobTitle: getRandomItem(jobTitles),
      education: getRandomItem(educations),
      preferences: userPreferences,
      compatibilityScore: Math.floor(Math.random() * 31) + 70, // 70-100
      lastActive: Math.random() > 0.3 ? "Just now" : `${Math.floor(Math.random() * 24) + 1} hours ago`,
      lookingFor: getRandomItem(relationshipTypes),
      verified: Math.random() > 0.3 // 70% chance of being verified
    };
  });
};
