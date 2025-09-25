import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import headshotImage from "@/assets/headshot.png";

const ContactCard = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/jishnusanyal",
      description: "Check out my code"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/jishnusanyal",
      description: "Let's connect professionally"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:jishnu@example.com",
      description: "Send me a message"
    }
  ];

  return (
    <Card className="bg-surface-elevated border-border shadow-card">
      <CardContent className="p-8 text-center">
        {/* Profile Picture */}
        <div className="mb-6">
          <div className="relative inline-block">
            <img
              src={headshotImage}
              alt="Jishnu Sanyal"
              className="w-32 h-32 rounded-full object-cover border-4 border-hero-primary/20 shadow-glow"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Name */}
        <h2 className="text-2xl font-bold text-text-primary mb-2">Jishnu Sanyal</h2>
        <p className="text-text-secondary mb-8">Developer passionate about AI/ML, data, and software engineering</p>

        {/* Social Links */}
        <div className="space-y-4">
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Button
                key={link.name}
                variant="outline"
                asChild
                className="w-full justify-start border-border hover:border-hero-primary/50 hover:bg-surface-glass group transition-all duration-300"
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <IconComponent className="w-5 h-5 mr-3 text-hero-primary group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="font-medium text-text-primary">{link.name}</div>
                    <div className="text-sm text-text-muted">{link.description}</div>
                  </div>
                </a>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactCard;