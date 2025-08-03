import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Copy, Link2, Zap, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LinkGenerator = () => {
  const { toast } = useToast();
  const [category, setCategory] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const categories = [
    { id: "streaming", name: "Streaming Services", icon: "🎬" },
    { id: "gaming", name: "Gaming Platforms", icon: "🎮" },
    { id: "music", name: "Music Streaming", icon: "🎵" },
    { id: "productivity", name: "Productivity Tools", icon: "💼" }
  ];

  const generateLink = () => {
    if (!category) {
      toast({
        title: "Please select a category",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate link generation
    setTimeout(() => {
      const shortCode = Math.random().toString(36).substr(2, 8);
      const link = `${window.location.origin}/ads/${category}?ref=${shortCode}`;
      setGeneratedLink(link);
      setIsGenerating(false);
      
      toast({
        title: "Link generated successfully!",
        description: "Share this link to let users get free accounts.",
      });
    }, 2000);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(generatedLink);
    setCopied(true);
    toast({
      title: "Link copied to clipboard!",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-2xl p-8 bg-gradient-card border-0 shadow-primary">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
            <Link2 className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-3xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
            Generate TopAlts Link
          </h1>
          <p className="text-muted-foreground">
            Create monetized links that reward users with premium accounts
          </p>
        </div>

        <div className="space-y-6">
          {/* Category Selection */}
          <div className="space-y-4">
            <Label className="text-lg font-medium">Select Account Category</Label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={category === cat.id ? "default" : "outline"}
                  className="h-16 text-left justify-start"
                  onClick={() => setCategory(cat.id)}
                >
                  <span className="text-2xl mr-3">{cat.icon}</span>
                  <div>
                    <div className="font-medium">{cat.name}</div>
                    <div className="text-xs opacity-70">{cat.id}</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <Button 
            variant="gradient" 
            size="lg" 
            onClick={generateLink}
            disabled={isGenerating || !category}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                Generating Link...
              </>
            ) : (
              <>
                <Zap className="w-5 h-5 mr-2" />
                Generate Monetized Link
              </>
            )}
          </Button>

          {/* Generated Link */}
          {generatedLink && (
            <div className="space-y-4 animate-slide-up">
              <Label className="text-lg font-medium">Your Monetized Link</Label>
              <div className="flex gap-2">
                <Input 
                  value={generatedLink} 
                  readOnly 
                  className="font-mono text-sm"
                />
                <Button 
                  variant={copied ? "success" : "outline"}
                  onClick={copyLink}
                >
                  {copied ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
              
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">How it works:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Users click your link and select {categories.find(c => c.id === category)?.name}</li>
                  <li>• They watch 3 short ads (10 seconds each)</li>
                  <li>• You earn revenue from ad networks</li>
                  <li>• Users get a free premium account</li>
                </ul>
              </div>
              
              <div className="flex gap-4 text-sm">
                <Badge variant="secondary">
                  Estimated Revenue: $0.003-0.008 per click
                </Badge>
                <Badge variant="outline">
                  Category: {categories.find(c => c.id === category)?.name}
                </Badge>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default LinkGenerator;