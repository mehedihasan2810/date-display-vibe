
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ChevronDown } from "lucide-react";

interface SearchFiltersProps {
  onApplyFilters: (filters: {
    age: [number, number];
    distance: number;
    interests: string[];
    lookingFor: string;
    verified: boolean;
  }) => void;
}

const availableInterests = [
  "Hiking", "Photography", "Coffee", "Travel", "Reading", "Cooking", 
  "Yoga", "Music", "Movies", "Dancing", "Art", "Fitness", "Gaming"
];

export function SearchFilters({ onApplyFilters }: SearchFiltersProps) {
  const [age, setAge] = useState<[number, number]>([18, 45]);
  const [distance, setDistance] = useState<number>(25);
  const [interests, setInterests] = useState<string[]>([]);
  const [lookingFor, setLookingFor] = useState<string>("");
  const [verified, setVerified] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({
    age: true,
    distance: true,
    interests: true,
    lookingFor: true,
    advanced: false
  });

  const handleToggleInterest = (value: string) => {
    if (interests.includes(value)) {
      setInterests(interests.filter(interest => interest !== value));
    } else {
      setInterests([...interests, value]);
    }
  };

  const handleApplyFilters = () => {
    onApplyFilters({
      age,
      distance,
      interests,
      lookingFor,
      verified
    });
  };

  const handleResetFilters = () => {
    setAge([18, 45]);
    setDistance(25);
    setInterests([]);
    setLookingFor("");
    setVerified(false);
    
    onApplyFilters({
      age: [18, 45],
      distance: 25,
      interests: [],
      lookingFor: "",
      verified: false
    });
  };

  const toggleSection = (section: string) => {
    setIsOpen(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <Card className="sticky top-6">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl flex items-center justify-between">
          <span>Search Filters</span>
          <Button variant="outline" size="sm" onClick={handleResetFilters}>
            Reset
          </Button>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-5 pb-0">
        {/* Age Range */}
        <Collapsible open={isOpen.age} onOpenChange={() => toggleSection("age")}>
          <CollapsibleTrigger className="flex items-center justify-between w-full mb-2">
            <h3 className="font-medium">Age Range</h3>
            <ChevronDown 
              className={`h-5 w-5 transition-transform ${isOpen.age ? "transform rotate-180" : ""}`} 
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
            <div className="space-y-2">
              <Slider 
                value={age} 
                min={18} 
                max={80} 
                step={1} 
                onValueChange={(value) => setAge(value as [number, number])} 
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <div>{age[0]} years</div>
                <div>{age[1]} years</div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        
        {/* Distance */}
        <Collapsible open={isOpen.distance} onOpenChange={() => toggleSection("distance")}>
          <CollapsibleTrigger className="flex items-center justify-between w-full mb-2">
            <h3 className="font-medium">Distance</h3>
            <ChevronDown 
              className={`h-5 w-5 transition-transform ${isOpen.distance ? "transform rotate-180" : ""}`} 
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
            <div className="space-y-2">
              <Slider 
                value={[distance]} 
                min={1} 
                max={100} 
                step={1} 
                onValueChange={(value) => setDistance(value[0])} 
              />
              <div className="flex justify-between text-sm">
                <div className="text-muted-foreground">Distance</div>
                <div><span className="font-medium">{distance}</span> miles</div>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        
        {/* Interests */}
        <Collapsible open={isOpen.interests} onOpenChange={() => toggleSection("interests")}>
          <CollapsibleTrigger className="flex items-center justify-between w-full mb-2">
            <h3 className="font-medium">Interests</h3>
            <ChevronDown 
              className={`h-5 w-5 transition-transform ${isOpen.interests ? "transform rotate-180" : ""}`} 
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
            <div className="flex flex-wrap gap-2">
              {availableInterests.map((interest) => (
                <Button 
                  key={interest}
                  size="sm" 
                  variant={interests.includes(interest) ? "default" : "outline"}
                  onClick={() => handleToggleInterest(interest)}
                  className="mb-1"
                >
                  {interest}
                </Button>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
        
        {/* Looking For */}
        <Collapsible open={isOpen.lookingFor} onOpenChange={() => toggleSection("lookingFor")}>
          <CollapsibleTrigger className="flex items-center justify-between w-full mb-2">
            <h3 className="font-medium">Looking For</h3>
            <ChevronDown 
              className={`h-5 w-5 transition-transform ${isOpen.lookingFor ? "transform rotate-180" : ""}`} 
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
            <RadioGroup value={lookingFor} onValueChange={setLookingFor}>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="Relationship" id="relationship" />
                <Label htmlFor="relationship">Relationship</Label>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="Casual" id="casual" />
                <Label htmlFor="casual">Casual</Label>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="Friendship" id="friendship" />
                <Label htmlFor="friendship">Friendship</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="" id="any" />
                <Label htmlFor="any">Any</Label>
              </div>
            </RadioGroup>
          </CollapsibleContent>
        </Collapsible>
        
        {/* Advanced Options */}
        <Collapsible open={isOpen.advanced} onOpenChange={() => toggleSection("advanced")}>
          <CollapsibleTrigger className="flex items-center justify-between w-full mb-2">
            <h3 className="font-medium">Advanced Options</h3>
            <ChevronDown 
              className={`h-5 w-5 transition-transform ${isOpen.advanced ? "transform rotate-180" : ""}`} 
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="verified" className="cursor-pointer">Verified profiles only</Label>
              <Switch 
                id="verified" 
                checked={verified} 
                onCheckedChange={setVerified}
              />
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
      
      <CardFooter className="pt-5">
        <Button className="w-full" onClick={handleApplyFilters}>
          Apply Filters
        </Button>
      </CardFooter>
    </Card>
  );
}
