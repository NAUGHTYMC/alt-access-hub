import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, ArrowDown, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <Badge variant="secondary" className="mb-6 px-6 py-3 text-sm font-medium animate-slide-up">
          <Sparkles className="w-4 h-4 mr-2" />
          Free Premium Accounts Platform
        </Badge>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Get <span className="bg-gradient-hero bg-clip-text text-transparent">Premium Accounts</span>
          <br />
          <span className="text-3xl md:text-5xl text-muted-foreground font-normal">
            for Free
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Watch a few ads and get instant access to premium accounts from Netflix, Spotify, Steam, and more. 
          Completely free and updated daily.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="gradient" 
            size="xl" 
            className="px-12 py-4 text-lg font-semibold shadow-glow hover:shadow-glow"
            onClick={() => {
              document.querySelector('#categories')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Gift className="w-6 h-6 mr-3" />
            Get Free Accounts Now
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8"
          >
            How It Works
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm font-medium">1000+ Daily Users</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm font-medium">99% Success Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm font-medium">Updated Every Hour</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};