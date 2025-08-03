import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, CheckCircle, RotateCcw, Gift, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AccountResult = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [account, setAccount] = useState<{email: string, password: string, company: string} | null>(null);

  const categoryData = {
    streaming: { 
      name: "Streaming Services", 
      icon: "🎬", 
      accounts: [
        { email: "premium.user1@netflix.com", password: "SecurePass123!", company: "Netflix" },
        { email: "disney.fan2024@gmail.com", password: "Mickey2024$", company: "Disney+" },
        { email: "hulu.viewer99@yahoo.com", password: "StreamLife88#", company: "Hulu" },
        { email: "max.watcher@hotmail.com", password: "MaxStream456!", company: "HBO Max" }
      ]
    },
    gaming: { 
      name: "Gaming Platforms", 
      icon: "🎮",
      accounts: [
        { email: "steam.gamer2024@gmail.com", password: "GameOn123$", company: "Steam" },
        { email: "epic.player77@outlook.com", password: "EpicWin2024!", company: "Epic Games" },
        { email: "xbox.live.pro@gmail.com", password: "XboxLife99#", company: "Xbox Game Pass" },
        { email: "playstation.plus@yahoo.com", password: "PSPlus2024$", company: "PlayStation Plus" }
      ]
    },
    music: { 
      name: "Music Streaming", 
      icon: "🎵",
      accounts: [
        { email: "spotify.premium@gmail.com", password: "MusicLover123!", company: "Spotify Premium" },
        { email: "apple.music.fan@icloud.com", password: "AppleBeats2024$", company: "Apple Music" },
        { email: "youtube.premium99@gmail.com", password: "YTMusic456#", company: "YouTube Premium" },
        { email: "amazon.music@outlook.com", password: "AmazonTunes88!", company: "Amazon Music" }
      ]
    },
    productivity: { 
      name: "Productivity Tools", 
      icon: "💼",
      accounts: [
        { email: "office365.user@outlook.com", password: "Office2024!", company: "Microsoft 365" },
        { email: "adobe.creative@gmail.com", password: "Creative123$", company: "Adobe Creative Cloud" },
        { email: "canva.pro.user@yahoo.com", password: "CanvaPro456#", company: "Canva Pro" },
        { email: "notion.premium@gmail.com", password: "NotionPro2024!", company: "Notion Pro" }
      ]
    }
  };

  const currentCategory = categoryData[category as keyof typeof categoryData];

  useEffect(() => {
    if (currentCategory) {
      // Simulate getting a random account
      const randomAccount = currentCategory.accounts[Math.floor(Math.random() * currentCategory.accounts.length)];
      setAccount(randomAccount);
    }
  }, [category]);

  const copyToClipboard = () => {
    if (account) {
      const accountText = `${account.email}:${account.password}`;
      navigator.clipboard.writeText(accountText);
      setCopied(true);
      toast({
        title: "Copied to clipboard!",
        description: "Account credentials have been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getAnother = () => {
    navigate(`/ads/${category}`);
  };

  if (!currentCategory || !account) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading your account...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl w-full space-y-8">
        {/* Success Header */}
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto bg-success rounded-full flex items-center justify-center mb-6 animate-scale-in">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          
          <Badge variant="secondary" className="px-6 py-2 bg-success/10 text-success border-success/20">
            <Gift className="w-4 h-4 mr-2" />
            Account Delivered Successfully!
          </Badge>
          
          <h1 className="text-4xl font-bold">
            Your <span className="bg-gradient-hero bg-clip-text text-transparent">{currentCategory.name}</span> Account
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Thank you for supporting our platform! Here's your free premium account.
          </p>
        </div>

        {/* Account Details */}
        <Card className="p-8 bg-gradient-card border-0 shadow-primary animate-slide-up">
          <div className="space-y-6">
            {/* Company Badge */}
            <div className="text-center">
              <Badge variant="outline" className="px-4 py-2 text-lg bg-primary/5 border-primary/20">
                <span className="text-2xl mr-2">{currentCategory.icon}</span>
                {account.company}
              </Badge>
            </div>

            {/* Account Credentials */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Email / Username</label>
                <div className="p-4 bg-muted/50 rounded-lg border font-mono text-lg">
                  {account.email}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Password</label>
                <div className="p-4 bg-muted/50 rounded-lg border font-mono text-lg">
                  {account.password}
                </div>
              </div>
            </div>

            {/* Copy Button */}
            <Button 
              variant={copied ? "success" : "gradient"}
              size="lg" 
              onClick={copyToClipboard}
              className="w-full"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Copied to Clipboard!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 mr-2" />
                  Copy Account Details
                </>
              )}
            </Button>

            {/* Important Notes */}
            <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
              <h4 className="font-semibold text-warning mb-2">Important Notes:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• This account is shared - please don't change the password</li>
                <li>• Use the account responsibly and follow platform terms</li>
                <li>• Account may be refreshed periodically for security</li>
                <li>• Support our platform by sharing with friends!</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={getAnother}
            className="flex-1"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Get Another Account
          </Button>
          
          <Button 
            variant="default" 
            size="lg" 
            onClick={() => navigate('/')}
            className="flex-1"
          >
            Back to Categories
          </Button>
        </div>

        {/* Rating Section */}
        <Card className="p-6 text-center bg-gradient-card border-0">
          <h3 className="font-semibold mb-3">Rate Your Experience</h3>
          <div className="flex justify-center gap-2 mb-4">
            {[1,2,3,4,5].map((star) => (
              <Star 
                key={star} 
                className="w-6 h-6 text-warning cursor-pointer hover:scale-110 transition-transform" 
                fill="currentColor"
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Help us improve by rating your experience
          </p>
        </Card>
      </div>
    </div>
  );
};

export default AccountResult;