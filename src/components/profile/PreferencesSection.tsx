
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {profile.preferences.map((preference, index) => (
            <div key={index} className="text-center p-3 bg-muted rounded-lg">
              <div className="text-sm text-muted-foreground">{preference.label}</div>
              <div className="font-medium mt-1">{preference.value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
