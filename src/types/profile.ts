
export interface Interest {
  name: string;
  icon?: string;
}

export interface Photo {
  id: string;
  url: string;
  alt: string;
  featured?: boolean;
}

export interface Preference {
  label: string;
  value: string;
}

export interface ProfileData {
  id: string;
  name: string;
  age: number;
  location: string;
  distance: string;
  bio: string;
  photos: Photo[];
  interests: Interest[];
  height: string;
  jobTitle: string;
  education: string;
  preferences: Preference[];
  compatibilityScore: number;
  lastActive: string;
  lookingFor: string;
  verified: boolean;
}
