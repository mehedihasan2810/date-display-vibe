
import { Badge } from "@/components/ui/badge";
import { Check, MapPin } from "lucide-react";
import { ProfileData } from "@/types/profile";

interface ProfileHeaderProps {
  profile: ProfileData;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  const featuredPhoto = profile.photos.find(photo => photo.featured) || profile.photos[0];
  
  return (
    <div className="relative">
      <div className="h-40 md:h-60 w-full bg-gradient-to-r from-primary/30 to-secondary/30 rounded-t-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
      </div>
      
      <div className="container relative -mt-20 md:-mt-24 pb-4">
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-end">
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-xl overflow-hidden border-4 border-background shadow-lg">
            <img 
              src={featuredPhoto.url} 
              alt={featuredPhoto.alt}
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h1 className="text-2xl md:text-3xl font-bold">{profile.name}, {profile.age}</h1>
              {profile.verified && (
                <Badge className="bg-primary hover:bg-primary">
                  <Check className="h-3 w-3 mr-1" /> Verified
                </Badge>
              )}
            </div>
            
            <div className="flex items-center text-muted-foreground mb-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{profile.location}</span>
              <span className="mx-2">•</span>
              <span>{profile.distance}</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              Active {profile.lastActive}
            </div>
          </div>
          
          <div className="flex flex-col items-end mt-2 md:mt-0">
            <div className="flex items-center gap-2">
              <div className="text-sm text-muted-foreground">Compatibility</div>
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-muted"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 28}
                    strokeDashoffset={2 * Math.PI * 28 * (1 - profile.compatibilityScore / 100)}
                    className="text-primary"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-lg">
                  {profile.compatibilityScore}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
