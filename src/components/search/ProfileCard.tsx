
import { ProfileData } from "@/types/profile";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface ProfileCardProps {
  profile: ProfileData;
  viewMode: 'grid' | 'list';
}

export function ProfileCard({ profile, viewMode }: ProfileCardProps) {
  const featuredPhoto = profile.photos.find(photo => photo.featured) || profile.photos[0];
  const initials = profile.name.split(' ').map(n => n[0]).join('');
  
  if (viewMode === 'list') {
    return (
      <Card className="overflow-hidden transition-all hover:shadow-md">
        <div className="flex flex-col sm:flex-row">
          <div 
            className="w-full sm:w-48 h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${featuredPhoto.url})` }}
          />
          <CardContent className="flex-1 p-4">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-lg">{profile.name}, {profile.age}</h3>
                {profile.verified && (
                  <CheckCircle className="h-4 w-4 text-primary" />
                )}
              </div>
              <Badge variant="outline">{profile.compatibilityScore}% Match</Badge>
            </div>
            
            <div className="mb-3 text-sm">
              <span className="text-muted-foreground">{profile.location} • {profile.distance}</span>
            </div>
            
            <p className="text-sm line-clamp-2 mb-3">{profile.bio}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {profile.interests.slice(0, 3).map((interest, idx) => (
                <Badge key={idx} variant="secondary">{interest.name}</Badge>
              ))}
              {profile.interests.length > 3 && (
                <Badge variant="outline">+{profile.interests.length - 3} more</Badge>
              )}
            </div>
            
            <div className="flex gap-2 mt-auto">
              <Button asChild className="flex-1" size="sm">
                <Link to={`/profile/${profile.id}`}>View Profile</Link>
              </Button>
              <Button variant="outline" size="sm" className="flex-1">Message</Button>
            </div>
          </CardContent>
        </div>
      </Card>
    );
  }
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div 
        className="h-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${featuredPhoto.url})` }}
      >
        <div className="absolute top-2 right-2">
          <Badge className="bg-black/60 hover:bg-black/70">{profile.compatibilityScore}% Match</Badge>
        </div>
        {profile.verified && (
          <div className="absolute top-2 left-2">
            <Badge variant="secondary" className="bg-white/80 hover:bg-white/90">
              <CheckCircle className="h-3 w-3 mr-1" /> Verified
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-semibold">{profile.name}, {profile.age}</h3>
          <span className="text-xs text-muted-foreground">{profile.distance}</span>
        </div>
        <div className="mb-3 text-xs text-muted-foreground">
          {profile.location}
        </div>
        <div className="flex flex-wrap gap-1 mb-4">
          {profile.interests.slice(0, 2).map((interest, idx) => (
            <Badge key={idx} variant="outline" className="text-xs">{interest.name}</Badge>
          ))}
          {profile.interests.length > 2 && (
            <Badge variant="outline" className="text-xs">+{profile.interests.length - 2}</Badge>
          )}
        </div>
        <Button asChild className="w-full">
          <Link to={`/profile/${profile.id}`}>View Profile</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
