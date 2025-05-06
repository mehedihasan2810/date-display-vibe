
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Preference } from "@/types/profile";
import { X } from "lucide-react";
import { toast } from "sonner";

interface PreferencesEditorProps {
  preferences: Preference[];
  onChange: (preferences: Preference[]) => void;
}

// Default preference options users can select from
const DEFAULT_PREFERENCES = [
  { label: "Drinking", value: "" },
  { label: "Smoking", value: "" },
  { label: "Kids", value: "" },
  { label: "Religion", value: "" },
  { label: "Politics", value: "" },
  { label: "Exercise", value: "" },
  { label: "Diet", value: "" },
  { label: "Pets", value: "" }
];

// Common values for each preference
const COMMON_VALUES: Record<string, string[]> = {
  "Drinking": ["Never", "Socially", "Regularly", "Prefer not to say"],
  "Smoking": ["Never", "Socially", "Regularly", "Prefer not to say"],
  "Kids": ["Want someday", "Don't want", "Have kids", "Prefer not to say"],
  "Religion": ["Spiritual", "Christian", "Catholic", "Jewish", "Muslim", "Buddhist", "Hindu", "Atheist", "Agnostic", "Other", "Prefer not to say"],
  "Politics": ["Liberal", "Moderate", "Conservative", "Not political", "Prefer not to say"],
  "Exercise": ["Active", "Sometimes", "Almost never", "Prefer not to say"],
  "Diet": ["Omnivore", "Vegetarian", "Vegan", "Pescatarian", "Keto", "Other", "Prefer not to say"],
  "Pets": ["Dog lover", "Cat lover", "Have pets", "No pets", "Allergic", "Prefer not to say"]
};

export function PreferencesEditor({ preferences, onChange }: PreferencesEditorProps) {
  const handleAddPreference = (label: string) => {
    if (preferences.some(p => p.label === label)) {
      toast.error(`${label} has already been added`);
      return;
    }
    
    onChange([...preferences, { label, value: "" }]);
    toast.success(`${label} added to preferences`);
  };
  
  const handleRemovePreference = (label: string) => {
    onChange(preferences.filter(p => p.label !== label));
    toast.success(`${label} removed from preferences`);
  };
  
  const handleUpdatePreference = (label: string, value: string) => {
    onChange(preferences.map(p => 
      p.label === label ? { ...p, value } : p
    ));
  };
  
  // Find preferences that haven't been added yet
  const availablePreferences = DEFAULT_PREFERENCES.filter(
    item => !preferences.some(p => p.label === item.label)
  );

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Life Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {preferences.map((preference, index) => (
          <div key={index} className="space-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">{preference.label}</label>
              <Button 
                variant="ghost"
                size="sm"
                onClick={() => handleRemovePreference(preference.label)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            {COMMON_VALUES[preference.label] ? (
              <div className="flex flex-wrap gap-2">
                {COMMON_VALUES[preference.label].map((value, i) => (
                  <Button
                    key={i}
                    variant={preference.value === value ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleUpdatePreference(preference.label, value)}
                    className="text-xs"
                  >
                    {value}
                  </Button>
                ))}
              </div>
            ) : (
              <Input
                value={preference.value}
                onChange={(e) => handleUpdatePreference(preference.label, e.target.value)}
                placeholder={`Your ${preference.label.toLowerCase()}`}
              />
            )}
          </div>
        ))}
        
        {availablePreferences.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-muted-foreground mb-2">Add more details:</p>
            <div className="flex flex-wrap gap-2">
              {availablePreferences.map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleAddPreference(item.label)}
                  className="text-xs"
                >
                  + {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
        
        <div className="text-xs text-muted-foreground mt-2">
          <p>• Add details about your lifestyle to find compatible matches</p>
          <p>• You can add up to 8 details to your profile</p>
        </div>
      </CardContent>
    </Card>
  );
}
