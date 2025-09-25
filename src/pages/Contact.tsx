import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactCard from "@/components/ContactCard";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's connect and discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in" style={{animationDelay: "0.2s"}}>
            <ContactCard />
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{animationDelay: "0.4s"}}>
            <Card className="bg-surface-elevated border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-text-primary">Send a Message</CardTitle>
                <CardDescription className="text-text-secondary">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-text-primary">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-surface-glass border-border focus:border-hero-primary"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-text-primary">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-surface-glass border-border focus:border-hero-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-text-primary">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="bg-surface-glass border-border focus:border-hero-primary resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:opacity-90 text-white font-semibold py-3 transition-all duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-border text-center animate-fade-in" style={{animationDelay: "0.6s"}}>
          <p className="text-text-muted">
            © {new Date().getFullYear()} Jishnu Sanyal. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Contact;