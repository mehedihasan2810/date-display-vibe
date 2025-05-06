
import { useState, useEffect } from "react";
import { ProfileData } from "@/types/profile";
import { SearchFilters } from "@/components/search/SearchFilters";
import { SearchResults } from "@/components/search/SearchResults";
import { generateProfiles } from "@/data/searchData";

const Search = () => {
  const [profiles, setProfiles] = useState<ProfileData[]>([]);
  const [filteredProfiles, setFilteredProfiles] = useState<ProfileData[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = 8;

  // Load sample profiles
  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      const generatedProfiles = generateProfiles(24);
      setProfiles(generatedProfiles);
      setFilteredProfiles(generatedProfiles);
      setLoading(false);
    }, 600);
  }, []);

  const handleFilters = (filters: {
    age: [number, number];
    distance: number;
    interests: string[];
    lookingFor: string;
    verified: boolean;
  }) => {
    setLoading(true);
    
    // Apply filters
    const filtered = profiles.filter(profile => {
      const ageMatch = profile.age >= filters.age[0] && profile.age <= filters.age[1];
      
      // Distance is stored as "X miles away" format in our data, extract the number
      const distanceValue = parseInt(profile.distance.split(" ")[0]);
      const distanceMatch = distanceValue <= filters.distance;
      
      // Check if profile has at least one of the selected interests
      const interestMatch = filters.interests.length === 0 || 
        profile.interests.some(interest => 
          filters.interests.includes(interest.name)
        );
      
      // Match looking for preference
      const lookingForMatch = filters.lookingFor === "" || 
        profile.lookingFor === filters.lookingFor;
      
      // Verification match
      const verifiedMatch = !filters.verified || profile.verified;
      
      return ageMatch && distanceMatch && interestMatch && lookingForMatch && verifiedMatch;
    });
    
    setFilteredProfiles(filtered);
    setCurrentPage(1);
    setTimeout(() => setLoading(false), 300); // For UX, show loading briefly
  };

  // Calculate current profiles to display for pagination
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = filteredProfiles.slice(indexOfFirstProfile, indexOfLastProfile);
  const totalPages = Math.ceil(filteredProfiles.length / profilesPerPage);

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Find Your Match</h1>
          <p className="text-muted-foreground">
            Discover people who match your preferences and interests
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters sidebar */}
          <div className="lg:col-span-1">
            <SearchFilters onApplyFilters={handleFilters} />
          </div>
          
          {/* Search results */}
          <div className="lg:col-span-3">
            <SearchResults 
              profiles={currentProfiles} 
              loading={loading}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalResults={filteredProfiles.length}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
