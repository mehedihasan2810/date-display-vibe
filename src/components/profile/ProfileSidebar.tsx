
import { Photo, Interest, Preference } from "@/types/profile";
import { PhotoUploadSection } from "@/components/profile/PhotoUploadSection";
import { InterestsSelector } from "@/components/profile/InterestsSelector";
import { PreferencesEditor } from "@/components/profile/PreferencesEditor";

interface ProfileSidebarProps {
  photos: Photo[];
  interests: Interest[];
  preferences: Preference[];
  onPhotosChange: (photos: Photo[]) => void;
  onInterestsChange: (interests: Interest[]) => void;
  onPreferencesChange: (preferences: Preference[]) => void;
}

export function ProfileSidebar({
  photos,
  interests,
  preferences,
  onPhotosChange,
  onInterestsChange,
  onPreferencesChange
}: ProfileSidebarProps) {
  return (
    <div className="space-y-8">
      <PhotoUploadSection photos={photos} onChange={onPhotosChange} />
      <InterestsSelector interests={interests} onChange={onInterestsChange} />
      <PreferencesEditor preferences={preferences} onChange={onPreferencesChange} />
    </div>
  );
}
