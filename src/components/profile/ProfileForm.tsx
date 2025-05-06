
import { UseFormReturn } from "react-hook-form";
import { NavigateFunction } from "react-router-dom";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import { Loader2, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BasicInformationSection } from "./form-sections/BasicInformationSection";
import { profileFormSchema } from "@/validations/profileSchema";

interface ProfileFormProps {
  form: UseFormReturn<z.infer<typeof profileFormSchema>>;
  onSubmit: (values: z.infer<typeof profileFormSchema>) => Promise<void>;
  isLoading: boolean;
  navigate: NavigateFunction;
}

export function ProfileForm({ 
  form, 
  onSubmit, 
  isLoading, 
  navigate 
}: ProfileFormProps) {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <BasicInformationSection form={form} />

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
  );
}
