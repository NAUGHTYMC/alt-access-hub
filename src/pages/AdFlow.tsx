import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, Shield, ArrowRight, RefreshCw } from "lucide-react";
import { AdNetwork } from "@/components/AdNetwork";
import { TimerComponent } from "@/components/TimerComponent";

const AdFlow = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isWaiting, setIsWaiting] = useState(false);
  const [adCompleted, setAdCompleted] = useState(false);
  const [revenue, setRevenue] = useState(0);

  const totalSteps = 3;
  const progressPercentage = (currentStep / totalSteps) * 100;

  const adNetworks = [
    { name: "Cuty.io", delay: 10, revenue: 0.002 },
    { name: "AdFly", delay: 8, revenue: 0.0015 },
    { name: "ShrinkMe", delay: 12, revenue: 0.0025 }
  ];

  const currentAd = adNetworks[currentStep - 1];

  const handleAdComplete = () => {
    setRevenue(prev => prev + currentAd.revenue);
    
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      setAdCompleted(false);
    } else {
      // All ads completed, redirect to account page
      navigate(`/account/${category}`);
    }
  };

  const categoryData = {
    streaming: { name: "Streaming Services", icon: "🎬", companies: ["Netflix", "Disney+", "Hulu"] },
    gaming: { name: "Gaming Platforms", icon: "🎮", companies: ["Steam", "Epic Games", "Xbox"] },
    music: { name: "Music Streaming", icon: "🎵", companies: ["Spotify", "Apple Music", "YouTube"] },
    productivity: { name: "Productivity Tools", icon: "💼", companies: ["Office 365", "Adobe", "Canva"] }
  };

  const currentCategory = categoryData[category as keyof typeof categoryData];

  if (!currentCategory) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge variant="secondary" className="px-6 py-2">
            <Eye className="w-4 h-4 mr-2" />
            Ad Flow Active
          </Badge>
          
          <h1 className="text-4xl font-bold">
            Getting Your <span className="bg-gradient-hero bg-clip-text text-transparent">{currentCategory.name}</span> Account
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Watch {totalSteps} quick ads to support our platform and get your free account
          </p>
        </div>

        {/* Progress */}
        <Card className="p-6 bg-gradient-card border-0 shadow-card">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm text-muted-foreground">
                Step {currentStep} of {totalSteps}
              </span>
            </div>
            
            <Progress value={progressPercentage} className="h-3" />
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span>Revenue Generated: ${revenue.toFixed(4)}</span>
              </div>
              <span className="text-muted-foreground">
                {totalSteps - currentStep} ads remaining
              </span>
            </div>
          </div>
        </Card>

        {/* Current Ad */}
        <Card className="p-8 bg-gradient-card border-0 shadow-primary">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center text-4xl shadow-glow">
              {currentCategory.icon}
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">
                {currentAd.name} Advertisement
              </h2>
              <p className="text-muted-foreground">
                Please wait {currentAd.delay} seconds for the ad to complete
              </p>
            </div>

            {/* Ad Network Component */}
            <AdNetwork 
              network={currentAd.name}
              onComplete={() => setAdCompleted(true)}
            />

            {/* Timer */}
            <TimerComponent 
              duration={currentAd.delay}
              onComplete={() => setAdCompleted(true)}
            />

            {/* Action Button */}
            <div className="pt-4">
              {adCompleted ? (
                <Button 
                  variant="gradient" 
                  size="lg" 
                  onClick={handleAdComplete}
                  className="w-full animate-glow"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  {currentStep < totalSteps ? 'Continue to Next Ad' : 'Get My Account'}
                </Button>
              ) : (
                <Button variant="outline" size="lg" disabled className="w-full">
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                  Processing Advertisement...
                </Button>
              )}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-success" />
                Secure & Safe
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-primary" />
                Quick Process
              </div>
            </div>
          </div>
        </Card>

        {/* Back Button */}
        <div className="text-center">
          <Button variant="ghost" onClick={() => navigate('/')}>
            ← Back to Categories
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdFlow;