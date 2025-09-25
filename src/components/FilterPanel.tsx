import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface FilterPanelProps {
  filters: string[];
  selectedFilters: string[];
  onFilterChange: (filter: string, checked: boolean) => void;
}

const FilterPanel = ({ filters, selectedFilters, onFilterChange }: FilterPanelProps) => {
  return (
    <div className="bg-card rounded-lg p-6 border border-border">
      <h3 className="text-lg font-semibold text-foreground mb-4">Filter by Role</h3>
      
      <div className="space-y-3">
        {filters.map((filter) => (
          <div key={filter} className="flex items-center space-x-3">
            <Checkbox
              id={filter}
              checked={selectedFilters.includes(filter)}
              onCheckedChange={(checked) => onFilterChange(filter, checked as boolean)}
              className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <Label
              htmlFor={filter}
              className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
            >
              {filter}
            </Label>
          </div>
        ))}
      </div>
      
      {selectedFilters.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border">
          <button
            onClick={() => filters.forEach(filter => onFilterChange(filter, false))}
            className="text-sm text-primary hover:text-primary/80 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterPanel;