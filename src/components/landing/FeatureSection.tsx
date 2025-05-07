
import { ReactNode } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface FeatureSectionProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  children?: ReactNode;
  reversed?: boolean;
  bgColor?: string;
  textColor?: string;
  imageRatio?: number;
}

export const FeatureSection = ({
  title,
  description,
  image,
  imageAlt = "Feature image",
  children,
  reversed = false,
  bgColor = "bg-background",
  textColor = "text-foreground",
  imageRatio = 1,
}: FeatureSectionProps) => {
  return (
    <section className={cn("py-16 md:py-24", bgColor, textColor)}>
      <div className="container grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className={cn("space-y-6", reversed ? "order-2 md:order-2" : "order-2 md:order-1")}>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            {title}
          </h2>
          <p className="text-lg">
            {description}
          </p>
          {children}
        </div>
        <div className={reversed ? "order-1 md:order-1" : "order-1 md:order-2"}>
          <AspectRatio ratio={imageRatio} className="bg-muted rounded-lg overflow-hidden">
            <img 
              src={image} 
              alt={imageAlt} 
              className="object-cover h-full w-full"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};
