
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProfileData } from "@/types/profile";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface PhotoGalleryProps {
  profile: ProfileData;
}

export function PhotoGallery({ profile }: PhotoGalleryProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  
  return (
    <>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Photos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="gallery-grid">
            {profile.photos.map((photo, index) => (
              <div 
                key={photo.id} 
                className={`rounded-lg overflow-hidden cursor-pointer ${index === 0 ? "col-span-2 row-span-2" : ""}`}
                onClick={() => setSelectedPhotoIndex(index)}
              >
                <img 
                  src={photo.url} 
                  alt={photo.alt} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Dialog open={selectedPhotoIndex !== null} onOpenChange={() => setSelectedPhotoIndex(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-background/95 backdrop-blur-sm">
          {selectedPhotoIndex !== null && (
            <div className="relative">
              <img 
                src={profile.photos[selectedPhotoIndex].url} 
                alt={profile.photos[selectedPhotoIndex].alt} 
                className="w-full object-contain max-h-[80vh]" 
              />
              <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
                {selectedPhotoIndex + 1} of {profile.photos.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
