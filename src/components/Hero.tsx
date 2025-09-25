import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Animated Background */}
      <AnimatedBackground />
      
      {/* Static Background Elements */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-hero-primary/10 to-hero-secondary/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-hero-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-hero-secondary/5 rounded-full blur-3xl animate-float" style={{animationDelay: "1s"}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up" style={{animationDelay: "0.2s"}}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Jishnu Sanyal
            </span>
          </h1>
        </div>

        <div className="animate-fade-in-up" style={{animationDelay: "0.4s"}}>
          <p className="text-xl sm:text-2xl text-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            I'm a developer passionate about{" "}
            <span className="text-hero-primary font-semibold">AI/ML</span>,{" "}
            <span className="text-hero-secondary font-semibold">data</span>, and{" "}
            <span className="text-hero-primary font-semibold">software engineering</span>
          </p>
        </div>

        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center" style={{animationDelay: "0.6s"}}>
          <Button
            asChild
            size="lg"
            className="bg-gradient-primary hover:opacity-90 text-white font-semibold px-8 py-3 text-lg group transition-all duration-300 shadow-glow hover:shadow-elevation"
          >
            <Link to="/work">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-hero-primary text-hero-primary hover:bg-hero-primary hover:text-white font-semibold px-8 py-3 text-lg transition-all duration-300"
          >
            <Link to="/contact">
              Contact Me
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-text-muted" />
      </div>
    </section>
  );
};

export default Hero;