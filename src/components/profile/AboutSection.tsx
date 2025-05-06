
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import { ProfileData } from "@/types/profile";

interface AboutSectionProps {
  profile: ProfileData;
}

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="leading-relaxed">{profile.bio}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="flex items-center gap-2">
              <div className="bg-secondary h-8 w-8 rounded-full flex items-center justify-center">
                <Briefcase className="h-4 w-4 text-secondary-foreground" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Work</div>
                <div className="font-medium">{profile.jobTitle}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="bg-secondary h-8 w-8 rounded-full flex items-center justify-center">
                <GraduationCap className="h-4 w-4 text-secondary-foreground" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Education</div>
                <div className="font-medium">{profile.education}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="bg-secondary h-8 w-8 rounded-full flex items-center justify-center">
                <span className="text-secondary-foreground font-medium text-sm">ft</span>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Height</div>
                <div className="font-medium">{profile.height}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="bg-secondary h-8 w-8 rounded-full flex items-center justify-center">
                <span className="text-secondary-foreground font-medium text-sm">❤️</span>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Looking for</div>
                <div className="font-medium">{profile.lookingFor}</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
