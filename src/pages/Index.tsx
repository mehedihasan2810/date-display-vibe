
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AboutSection } from "@/components/profile/AboutSection";
import { PhotoGallery } from "@/components/profile/PhotoGallery";
import { InterestsSection } from "@/components/profile/InterestsSection";
import { PreferencesSection } from "@/components/profile/PreferencesSection";
import { ProfileActions } from "@/components/profile/ProfileActions";
import { profileData } from "@/data/profileData";

const Index = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12">
      <div className="mb-8">
        <Button asChild variant="outline" className="mb-4">
          <Link to="/landing">View Landing Page</Link>
        </Button>
      </div>
      
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

export default Index;
