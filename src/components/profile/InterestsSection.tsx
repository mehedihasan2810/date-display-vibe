
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProfileData } from "@/types/profile";
import { Book, Camera, Coffee, Globe, Headphones, Heart, Music } from "lucide-react";

interface InterestsSectionProps {
  profile: ProfileData;
}

// Map interest names to their corresponding icons
const interestIcons: Record<string, React.ReactNode> = {
  Hiking: <Heart className="h-3 w-3" />,
  Photography: <Camera className="h-3 w-3" />,
  Coffee: <Coffee className="h-3 w-3" />,
  Travel: <Globe className="h-3 w-3" />,
  Reading: <Book className="h-3 w-3" />,
  Music: <Music className="h-3 w-3" />,
  Yoga: <Heart className="h-3 w-3" />,
  Cooking: <Coffee className="h-3 w-3" />,
  Headphones: <Headphones className="h-3 w-3" />
};

export function InterestsSection({ profile }: InterestsSectionProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Interests</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {profile.interests.map((interest, index) => (
            <div key={index} className="interest-tag animate-float" style={{ animationDelay: `${index * 0.1}s` }}>
              {interestIcons[interest.name] || <Heart className="h-3 w-3" />}
              <span>{interest.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
