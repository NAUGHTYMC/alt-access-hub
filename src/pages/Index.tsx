import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Shield, Zap, Star, Users, Globe, Settings, Link2 } from "lucide-react";
import { CategoryCard } from "@/components/CategoryCard";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";

const Index = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const categories = [
    {
      id: "streaming",
      name: "Streaming Services",
      description: "Premium accounts for Netflix, Disney+, Hulu & more",
      icon: "🎬",
      color: "from-red-500 to-pink-500",
      accountCount: 150,
      companies: ["Netflix", "Disney+", "Hulu", "HBO Max"]
    },
    {
      id: "gaming",
      name: "Gaming Platforms",
      description: "Steam, Epic Games, Xbox Game Pass accounts",
      icon: "🎮",
      color: "from-blue-500 to-purple-500",
      accountCount: 200,
      companies: ["Steam", "Epic Games", "Xbox", "PlayStation"]
    },
    {
      id: "music",
      name: "Music Streaming",
      description: "Spotify, Apple Music, YouTube Premium",
      icon: "🎵",
      color: "from-green-500 to-emerald-500",
      accountCount: 120,
      companies: ["Spotify", "Apple Music", "YouTube Premium"]
    },
    {
      id: "productivity",
      name: "Productivity Tools",
      description: "Office 365, Adobe Creative, Canva Pro",
      icon: "💼",
      color: "from-orange-500 to-yellow-500",
      accountCount: 80,
      companies: ["Microsoft 365", "Adobe", "Canva", "Notion"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            TopAlts
          </h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigate('/generate')}>
              <Link2 className="w-4 h-4 mr-2" />
              Generate Link
            </Button>
            <Button variant="ghost" onClick={() => navigate('/admin')}>
              <Settings className="w-4 h-4 mr-2" />
              Admin
            </Button>
          </div>
        </div>
      </nav>

      <HeroSection />
      
      <StatsSection />

      {/* Categories Section */}
      <section id="categories" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Choose Your Category
            </Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Select Account Type
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our premium account categories. Each category contains verified, working accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isSelected={selectedCategory === category.id}
                onSelect={() => setSelectedCategory(category.id)}
              />
            ))}
          </div>

          {selectedCategory && (
            <div className="mt-12 text-center animate-slide-up">
              <Card className="max-w-md mx-auto p-8 bg-gradient-card shadow-card border-0">
                <div className="space-y-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                    <Gift className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Ready to Get Your Account?</h3>
                    <p className="text-muted-foreground mb-6">
                      Watch a few ads to support our platform, then receive your premium account!
                    </p>
                  </div>

                  <Button 
                    variant="gradient" 
                    size="xl" 
                    className="w-full"
                    onClick={() => {
                      navigate(`/ads/${selectedCategory}`);
                    }}
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Start Ad Flow
                  </Button>

                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Shield className="w-4 h-4 text-success" />
                      Verified Accounts
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-warning" />
                      High Success Rate
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose TopAlts?</h2>
            <p className="text-xl text-muted-foreground">The most reliable platform for premium account sharing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-0 shadow-card bg-gradient-card">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">100% Verified</h3>
              <p className="text-muted-foreground">All accounts are tested and verified before being added to our database.</p>
            </Card>

            <Card className="p-8 text-center border-0 shadow-card bg-gradient-card">
              <div className="w-16 h-16 mx-auto mb-6 bg-success/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Active Community</h3>
              <p className="text-muted-foreground">Join thousands of users who trust TopAlts for their premium needs.</p>
            </Card>

            <Card className="p-8 text-center border-0 shadow-card bg-gradient-card">
              <div className="w-16 h-16 mx-auto mb-6 bg-warning/10 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-warning" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Access</h3>
              <p className="text-muted-foreground">Works worldwide with accounts from all major platforms and services.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-card">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            TopAlts
          </h3>
          <p className="text-muted-foreground mb-6">
            Your trusted source for premium account sharing. Free, fast, and reliable.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span>© 2024 TopAlts. All rights reserved.</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;