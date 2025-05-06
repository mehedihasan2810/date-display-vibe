
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { Loader2, Save, X } from "lucide-react";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PhotoUploadSection } from "@/components/profile/PhotoUploadSection";
import { InterestsSelector } from "@/components/profile/InterestsSelector";
import { PreferencesEditor } from "@/components/profile/PreferencesEditor";
import { ProfilePreview } from "@/components/profile/ProfilePreview";
import { ProfileData } from "@/types/profile";
import { profileData as initialProfileData } from "@/data/profileData";

// Define our form validation schema
const profileFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  age: z.number().int().min(18, { message: "You must be at least 18 years old." }).max(120),
  location: z.string().min(3, { message: "Please provide your location." }),
  distance: z.string().optional(),
  bio: z.string().min(20, { message: "Bio should be at least 20 characters." }).max(500, {
    message: "Bio should not exceed 500 characters.",
  }),
  jobTitle: z.string().min(2, { message: "Please provide your job title." }),
  education: z.string().min(2, { message: "Please provide your education." }),
  height: z.string().min(2, { message: "Please provide your height." }),
  lookingFor: z.string().min(2, { message: "Please specify what you're looking for." }),
});

const EditProfile = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>(initialProfileData.photos);
  const [interests, setInterests] = useState<Interest[]>(initialProfileData.interests);
  const [preferences, setPreferences] = useState<Preference[]>(initialProfileData.preferences);
  const [formData, setFormData] = useState<Partial<ProfileData>>(initialProfileData);

  // 1. Define your form with useForm hook
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Basic Information Section */}
                  <div className="p-6 bg-card rounded-lg border shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Age</FormLabel>
                            <FormControl>
                              <Input 
                                type="number" 
                                placeholder="Your age" 
                                {...field} 
                                onChange={(e) => field.onChange(parseInt(e.target.value))} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input placeholder="Your city" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="height"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Height</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. 5'7" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="jobTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Job Title</FormLabel>
                            <FormControl>
                              <Input placeholder="Your job title" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="education"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Education</FormLabel>
                            <FormControl>
                              <Input placeholder="Your education" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="col-span-2">
                        <FormField
                          control={form.control}
                          name="lookingFor"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Looking For</FormLabel>
                              <FormControl>
                                <Input placeholder="What are you looking for?" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="col-span-2">
                        <FormField
                          control={form.control}
                          name="bio"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>About Me</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Tell others about yourself" 
                                  {...field} 
                                  className="min-h-[120px]" 
                                />
                              </FormControl>
                              <FormMessage />
                              <div className="text-xs text-muted-foreground text-right mt-1">
                                {field.value?.length || 0}/500
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-4 mt-8">
                    <Button 
                      variant="outline" 
                      onClick={() => navigate("/")}
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" />
                          Save Profile
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>

            <div className="space-y-8">
              <PhotoUploadSection photos={photos} onChange={setPhotos} />
              <InterestsSelector interests={interests} onChange={setInterests} />
              <PreferencesEditor preferences={preferences} onChange={setPreferences} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
