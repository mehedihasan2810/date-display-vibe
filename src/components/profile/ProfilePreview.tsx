
import { Button } from "@/components/ui/button";
import { ProfileData } from "@/types/profile";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { AboutSection } from "@/components/profile/AboutSection";
import { InterestsSection } from "@/components/profile/InterestsSection";
import { PreferencesSection } from "@/components/profile/PreferencesSection";
import { PhotoGallery } from "@/components/profile/PhotoGallery";
import { Edit, Save } from "lucide-react";

interface ProfilePreviewProps {
  profile: ProfileData;
  onEdit: () => void;
  onSave: () => void;
}

export function ProfilePreview({ profile, onEdit, onSave }: ProfilePreviewProps) {
  return (
    <div className="min-h-screen profile-gradient pb-24 -mx-6 -mt-6">
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm p-3 border-b flex justify-between items-center">
        <h2 className="font-semibold">Profile Preview</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onEdit}>
            <Edit className="mr-2 h-4 w-4" /> Edit
          </Button>
          <Button onClick={onSave}>
            <Save className="mr-2 h-4 w-4" /> Save Profile
          </Button>
        </div>
      </div>
      
      <ProfileHeader profile={profile} />
      
      <div className="container py-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <AboutSection profile={profile} />
            <PhotoGallery profile={profile} />
          </div>
          
          <div className="space-y-6">
            <InterestsSection profile={profile} />
            <PreferencesSection profile={profile} />
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-4 border-t">
        <div className="container flex justify-end gap-4">
          <Button variant="outline" onClick={onEdit}>
            <Edit className="mr-2 h-4 w-4" /> Edit
          </Button>
          <Button onClick={onSave}>
            <Save className="mr-2 h-4 w-4" /> Save Profile
          </Button>
        </div>
      </div>
    </div>
  );
}
