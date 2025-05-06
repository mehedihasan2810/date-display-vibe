
import * as z from "zod";

export const profileFormSchema = z.object({
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
