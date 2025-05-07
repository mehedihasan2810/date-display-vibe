
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface TestimonialCardProps {
  name: string;
  testimonial: string;
  detail: string;
  image: string;
}

export const TestimonialCard = ({
  name,
  testimonial,
  detail,
  image,
}: TestimonialCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div>
          <AspectRatio ratio={1/1} className="h-full">
            <img 
              src={image}
              alt={`${name} testimonial`} 
              className="object-cover h-full w-full"
            />
          </AspectRatio>
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-3">{name}</h3>
          <p className="mb-4 italic">
            "{testimonial}"
          </p>
          <p className="text-sm text-muted-foreground">
            {detail}
          </p>
        </div>
      </div>
    </Card>
  );
};
