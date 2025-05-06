
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Interest } from "@/types/profile";
import { X } from "lucide-react";
import { toast } from "sonner";

// Common interest suggestions
const COMMON_INTERESTS = [
  "Hiking", "Photography", "Coffee", "Travel", "Reading", 
  "Cooking", "Yoga", "Music", "Art", "Movies", "Dancing", 
  "Fitness", "Gaming", "Sports", "Pets", "Wine", "Technology"
];

interface InterestsSelectorProps {
  interests: Interest[];
  onChange: (interests: Interest[]) => void;
}

export function InterestsSelector({ interests, onChange }: InterestsSelectorProps) {
  const [newInterest, setNewInterest] = useState("");

  const handleAddInterest = () => {
    if (!newInterest.trim()) return;
    
    // Check if interest already exists
    if (interests.some(interest => interest.name.toLowerCase() === newInterest.trim().toLowerCase())) {
      toast.error("This interest has already been added");
      return;
    }
    
    // Max 10 interests
    if (interests.length >= 10) {
      toast.error("You can add a maximum of 10 interests");
      return;
    }
    
    onChange([...interests, { name: newInterest.trim() }]);
    setNewInterest("");
    toast.success("Interest added");
  };

  const handleRemoveInterest = (name: string) => {
    onChange(interests.filter(interest => interest.name !== name));
    toast.success("Interest removed");
  };

  const handleAddSuggestedInterest = (name: string) => {
    // Check if interest already exists
    if (interests.some(interest => interest.name.toLowerCase() === name.toLowerCase())) {
      toast.error("This interest has already been added");
      return;
    }
    
    // Max 10 interests
    if (interests.length >= 10) {
      toast.error("You can add a maximum of 10 interests");
      return;
    }
    
    onChange([...interests, { name }]);
    toast.success("Interest added");
  };

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Interests</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {interests.map((interest, index) => (
            <div 
              key={index} 
              className="bg-muted/50 text-foreground rounded-full px-3 py-1 text-sm flex items-center gap-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span>{interest.name}</span>
              <button 
                onClick={() => handleRemoveInterest(interest.name)}
                className="text-muted-foreground hover:text-foreground rounded-full w-4 h-4 inline-flex items-center justify-center"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="flex gap-2">
          <Input
            placeholder="Add an interest"
            value={newInterest}
            onChange={(e) => setNewInterest(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddInterest()}
            className="flex-1"
          />
          <Button onClick={handleAddInterest} disabled={!newInterest.trim()}>
            Add
          </Button>
        </div>
        
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">Suggestions:</p>
          <div className="flex flex-wrap gap-2">
            {COMMON_INTERESTS.filter(
              name => !interests.some(interest => interest.name.toLowerCase() === name.toLowerCase())
            ).slice(0, 10).map((name, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => handleAddSuggestedInterest(name)}
                className="text-xs"
              >
                {name}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="text-xs text-muted-foreground mt-2">
          <p>• Add up to 10 interests to help find better matches</p>
          <p>• Your interests will be displayed on your profile</p>
        </div>
      </CardContent>
    </Card>
  );
}
