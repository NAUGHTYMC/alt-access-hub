import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users } from "lucide-react";

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  accountCount: number;
  companies: string[];
}

interface CategoryCardProps {
  category: Category;
  isSelected: boolean;
  onSelect: () => void;
}

export const CategoryCard = ({ category, isSelected, onSelect }: CategoryCardProps) => {
  return (
    <Card 
      className={`relative p-6 cursor-pointer transition-all duration-300 border-2 hover:shadow-primary hover:scale-105 ${
        isSelected 
          ? 'border-primary shadow-glow bg-primary/5' 
          : 'border-transparent shadow-card bg-gradient-card hover:border-primary/30'
      }`}
      onClick={onSelect}
    >
      {isSelected && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center">
          <CheckCircle className="w-4 h-4 text-white" />
        </div>
      )}

      <div className="text-center space-y-4">
        {/* Icon */}
        <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl bg-gradient-to-r ${category.color} shadow-lg`}>
          {category.icon}
        </div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Stats */}
        <div className="space-y-3">
          <Badge variant="secondary" className="w-full justify-center py-2">
            <Users className="w-4 h-4 mr-2" />
            {category.accountCount}+ Accounts
          </Badge>

          {/* Companies */}
          <div className="flex flex-wrap gap-1 justify-center">
            {category.companies.slice(0, 3).map((company, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs px-2 py-1 bg-background/50"
              >
                {company}
              </Badge>
            ))}
            {category.companies.length > 3 && (
              <Badge variant="outline" className="text-xs px-2 py-1 bg-background/50">
                +{category.companies.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {/* Hover effect */}
        <div className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${
          isSelected ? 'opacity-100' : 'opacity-0'
        } bg-gradient-to-r from-primary/5 to-transparent`} />
      </div>
    </Card>
  );
};