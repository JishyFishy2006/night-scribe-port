import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  categories: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

const ProjectCard = ({ title, description, tags, categories, githubUrl, liveUrl, imageUrl }: ProjectCardProps) => {
  return (
    <Card className="group bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg overflow-hidden">
      {imageUrl && (
        <div className="aspect-video overflow-hidden bg-muted/20">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardHeader>
        <div className="flex flex-wrap gap-1 mb-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="text-xs border-primary/30 text-primary"
            >
              {category}
            </Badge>
          ))}
        </div>
        
        <CardTitle className="text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs bg-muted/40">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        {githubUrl && (
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex-1 border-border hover:border-primary/50"
          >
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
        )}
        
        {liveUrl && (
          <Button
            size="sm"
            asChild
            className="flex-1 bg-primary text-primary-foreground hover:opacity-90"
          >
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;