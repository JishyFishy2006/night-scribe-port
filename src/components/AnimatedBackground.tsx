import { useRef } from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero-primary/5 via-background to-hero-secondary/5"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {/* Large floating circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-hero-primary/8 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-hero-secondary/8 rounded-full blur-3xl animate-float opacity-60" style={{animationDelay: "1s"}}></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-hero-primary/6 rounded-full blur-2xl animate-float opacity-40" style={{animationDelay: "2s"}}></div>
        
        {/* Moving gradient orbs */}
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-gradient-to-r from-hero-primary/20 to-hero-secondary/20 rounded-full blur-xl animate-pulse-glow"></div>
        <div className="absolute top-1/3 right-0 w-24 h-24 bg-gradient-to-l from-hero-secondary/20 to-hero-primary/20 rounded-full blur-xl animate-pulse-glow" style={{animationDelay: "1.5s"}}></div>
        
        {/* Subtle geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 left-10 w-2 h-2 bg-hero-primary rounded-full animate-float" style={{animationDelay: "0.5s"}}></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-hero-secondary rounded-full animate-float" style={{animationDelay: "1.2s"}}></div>
          <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-hero-primary rounded-full animate-float" style={{animationDelay: "2.1s"}}></div>
          <div className="absolute bottom-20 right-40 w-1 h-1 bg-hero-secondary rounded-full animate-float" style={{animationDelay: "0.8s"}}></div>
        </div>
        
        {/* Animated lines/connections */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--hero-primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--hero-secondary))" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse">
            <animate attributeName="stroke-dasharray" values="0,1000;1000,0;0,1000" dur="8s" repeatCount="indefinite" />
          </line>
          <line x1="80%" y1="10%" x2="20%" y2="90%" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" style={{animationDelay: "2s"}}>
            <animate attributeName="stroke-dasharray" values="0,1000;1000,0;0,1000" dur="10s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>
      
      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/30"></div>
    </div>
  );
};

export default AnimatedBackground;