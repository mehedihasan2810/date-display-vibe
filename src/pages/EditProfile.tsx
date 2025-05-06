
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { Loader2, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProfileData, Photo, Interest, Preference } from "@/types/profile";
import { profileData as initialProfileData } from "@/data/profileData";
import { ProfilePreview } from "@/components/profile/ProfilePreview";
import { ProfileForm } from "@/components/profile/ProfileForm";
import { ProfileSidebar } from "@/components/profile/ProfileSidebar";
import { profileFormSchema } from "@/validations/profileSchema";

const EditProfile = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>(initialProfileData.photos);
  const [interests, setInterests] = useState<Interest[]>(initialProfileData.interests);
  const [preferences, setPreferences] = useState<Preference[]>(initialProfileData.preferences);
  const [formData, setFormData] = useState<Partial<ProfileData>>(initialProfileData);

  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: initialProfileData.name,
      age: initialProfileData.age,
      location: initialProfileData.location.split(",")[0],
      distance: initialProfileData.distance,
      bio: initialProfileData.bio,
      jobTitle: initialProfileData.jobTitle,
      education: initialProfileData.education,
      height: initialProfileData.height,
      lookingFor: initialProfileData.lookingFor,
    },
  });

  const onSubmit = async (values: z.infer<typeof profileFormSchema>) => {
    setIsLoading(true);
    
    try {
      // Combine all data into one profile object
      const updatedProfile: ProfileData = {
        ...initialProfileData,
        ...values,
        photos,
        interests,
        preferences,
      };
      
      // Here you would typically save to an API
      console.log("Saving profile:", updatedProfile);
      
      // For demo purposes, let's just show a success message and redirect
      setTimeout(() => {
        toast.success("Profile saved successfully!");
        navigate("/");
        setIsLoading(false);
      }, 1500);
      
    } catch (error) {
      toast.error("Failed to save profile. Please try again.");
      setIsLoading(false);
    }
  };

  const handlePreviewToggle = () => {
    // Update the form data with current values for preview
    const currentValues = form.getValues();
    setFormData({
      ...initialProfileData,
      ...currentValues,
      photos,
      interests,
      preferences,
    } as ProfileData);
    setShowPreview(!showPreview);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Edit Your Profile</h1>
            <p className="text-muted-foreground mt-1">
              Complete your profile to get better matches
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handlePreviewToggle}
            >
              {showPreview ? "Edit" : "Preview"}
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
            >
              <X className="mr-2 h-4 w-4" /> Cancel
            </Button>
          </div>
        </div>

        {showPreview ? (
          <ProfilePreview 
            profile={formData as ProfileData} 
            onEdit={handlePreviewToggle} 
            onSave={() => form.handleSubmit(onSubmit)()} 
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <ProfileForm 
                form={form} 
                onSubmit={onSubmit} 
                isLoading={isLoading} 
                navigate={navigate} 
              />
            </div>

            <ProfileSidebar
              photos={photos}
              interests={interests}
              preferences={preferences}
              onPhotosChange={setPhotos}
              onInterestsChange={setInterests}
              onPreferencesChange={setPreferences}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
