
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { AboutSection } from "@/components/profile/AboutSection";
import { InterestsSection } from "@/components/profile/InterestsSection";
import { PreferencesSection } from "@/components/profile/PreferencesSection";
import { PhotoGallery } from "@/components/profile/PhotoGallery";
import { ProfileActions } from "@/components/profile/ProfileActions";
import { profileData } from "@/data/profileData";
import { useIsMobile } from "@/hooks/use-mobile";

const Profile = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen profile-gradient pb-24">
      <ProfileHeader profile={profileData} />
      
      <div className="container py-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <AboutSection profile={profileData} />
            <PhotoGallery profile={profileData} />
          </div>
          
          <div className="space-y-6">
            <InterestsSection profile={profileData} />
            <PreferencesSection profile={profileData} />
          </div>
        </div>
      </div>
      
      <ProfileActions />
    </div>
  );
};

export default Profile;
