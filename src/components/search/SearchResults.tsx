
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProfileData } from "@/types/profile";
import { ProfileCard } from "@/components/search/ProfileCard";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { Grid2x2, List, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface SearchResultsProps {
  profiles: ProfileData[];
  loading: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalResults: number;
}

export function SearchResults({
  profiles,
  loading,
  currentPage,
  totalPages,
  onPageChange,
  totalResults
}: SearchResultsProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">{totalResults} Results</h2>
          {totalResults > 0 && (
            <p className="text-sm text-muted-foreground">
              Showing {(currentPage - 1) * profiles.length + 1} - {Math.min(currentPage * profiles.length, totalResults)} of {totalResults}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setViewMode('grid')}
            className={viewMode === 'grid' ? 'bg-primary/10' : ''}
          >
            <Grid2x2 className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setViewMode('list')}
            className={viewMode === 'list' ? 'bg-primary/10' : ''}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="rounded-lg bg-muted animate-pulse h-72"
            />
          ))}
        </div>
      ) : profiles.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="font-medium text-lg mb-2">No matches found</h3>
          <p className="text-muted-foreground mb-6">Try adjusting your search filters</p>
          <Button variant="outline" onClick={() => onPageChange(1)}>Reset Filters</Button>
        </div>
      ) : (
        <div className={viewMode === 'grid' 
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" 
          : "flex flex-col gap-4"
        }>
          {profiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              viewMode={viewMode}
            />
          ))}
        </div>
      )}
      
      {profiles.length > 0 && totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={handlePreviousPage}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
            
            <PaginationItem className="flex items-center">
              <span className="text-sm">Page {currentPage} of {totalPages}</span>
            </PaginationItem>
            
            <PaginationItem>
              <PaginationNext 
                onClick={handleNextPage}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </Card>
  );
}
