
import { useState } from "react";
import { Camera, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Photo } from "@/types/profile";
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { toast } from "sonner";

interface PhotoUploadSectionProps {
  photos: Photo[];
  onChange: (photos: Photo[]) => void;
}

export function PhotoUploadSection({ photos, onChange }: PhotoUploadSectionProps) {
  const [draggedPhoto, setDraggedPhoto] = useState<Photo | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      if (photos.length >= 9) {
        toast.error("You can upload a maximum of 9 photos");
        return;
      }
      
      // For demo purposes, we'll create URLs from the files
      // In a real app, you'd upload these to a server and get URLs back
      const newPhotos: Photo[] = Array.from(e.target.files).map((file, index) => ({
        id: `new-photo-${Date.now()}-${index}`,
        url: URL.createObjectURL(file),
        alt: `Uploaded photo ${photos.length + index + 1}`,
        featured: photos.length === 0 && index === 0 // Set as featured if it's the first photo
      }));
      
      onChange([...photos, ...newPhotos]);
      toast.success("Photo(s) uploaded successfully");
    }
  };

  const handleRemovePhoto = (id: string) => {
    onChange(photos.filter(photo => photo.id !== id));
    toast.success("Photo removed");
  };

  const handleSetFeatured = (id: string) => {
    onChange(
      photos.map(photo => ({
        ...photo,
        featured: photo.id === id
      }))
    );
    toast.success("Featured photo updated");
  };

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(photos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    onChange(items);
  };

  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle>My Photos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="photos" direction="horizontal">
            {(provided) => (
              <div 
                className="grid grid-cols-3 gap-2" 
                {...provided.droppableProps} 
                ref={provided.innerRef}
              >
                {photos.map((photo, index) => (
                  <Draggable key={photo.id} draggableId={photo.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`relative rounded-md overflow-hidden border ${photo.featured ? 'border-primary border-2' : 'border-muted'} aspect-square`}
                      >
                        <img
                          src={photo.url}
                          alt={photo.alt}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/50 transition-opacity group">
                          <div className="flex flex-col gap-1">
                            <Button
                              size="sm"
                              variant={photo.featured ? "secondary" : "default"}
                              onClick={() => handleSetFeatured(photo.id)}
                              className="text-xs"
                              disabled={photo.featured}
                            >
                              {photo.featured ? 'Featured' : 'Set as Featured'}
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleRemovePhoto(photo.id)}
                              className="text-xs"
                            >
                              Remove
                            </Button>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="absolute top-1 right-1 h-6 w-6 p-0 text-white"
                            onClick={() => handleRemovePhoto(photo.id)}
                          >
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
                
                {photos.length < 9 && (
                  <label className="relative border-2 border-dashed border-muted rounded-md flex items-center justify-center aspect-square cursor-pointer hover:bg-muted/50 transition-colors">
                    <div className="flex flex-col items-center p-2 text-center">
                      <Camera className="h-8 w-8 text-muted-foreground mb-2" />
                      <span className="text-sm text-muted-foreground">Upload Photo</span>
                      <span className="text-xs text-muted-foreground mt-1">
                        {photos.length}/9
                      </span>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handlePhotoUpload}
                      max={9 - photos.length}
                    />
                  </label>
                )}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <div className="text-xs text-muted-foreground mt-2">
          <p>• Drag photos to reorder them</p>
          <p>• Your first photo will be your main profile picture</p>
          <p>• You can upload up to 9 photos</p>
        </div>
      </CardContent>
    </Card>
  );
}
