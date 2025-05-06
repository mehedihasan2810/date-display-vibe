
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProfileData } from "@/types/profile";

interface PreferencesSectionProps {
  profile: ProfileData;
}

export function PreferencesSection({ profile }: PreferencesSectionProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>Life Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {profile.preferences.map((preference, index) => (
            <div 
              key={index} 
              className="text-left p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-sm text-muted-foreground">{preference.label}</div>
              <div className="font-medium mt-1">{preference.value || "Not specified"}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
