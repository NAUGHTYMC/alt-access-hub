import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, FileText, BarChart3, Users, DollarSign, Activity } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminPanel = () => {
  const { toast } = useToast();
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, category: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.txt')) {
      toast({
        title: "Invalid file type",
        description: "Please upload a .txt file",
        variant: "destructive"
      });
      return;
    }

    setUploading(true);
    
    // Simulate upload
    setTimeout(() => {
      toast({
        title: "File uploaded successfully!",
        description: `${file.name} has been uploaded to ${category} category.`,
      });
      setUploading(false);
    }, 2000);
  };

  const stats = [
    { title: "Total Users", value: "52,431", icon: Users, color: "text-blue-500" },
    { title: "Today's Revenue", value: "$247.83", icon: DollarSign, color: "text-green-500" },
    { title: "Active Links", value: "1,284", icon: Activity, color: "text-purple-500" },
    { title: "Accounts Delivered", value: "8,926", icon: FileText, color: "text-orange-500" }
  ];

  const recentActivity = [
    { action: "Account delivered", category: "Netflix", time: "2 min ago" },
    { action: "File uploaded", category: "Steam", time: "5 min ago" },
    { action: "New user registered", category: "-", time: "8 min ago" },
    { action: "Ad revenue earned", category: "Cuty.io", time: "12 min ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                TopAlts Admin Panel
              </h1>
              <p className="text-muted-foreground mt-2">
                Manage your account files and monitor platform performance
              </p>
            </div>
            <Badge variant="secondary" className="px-4 py-2">
              <Activity className="w-4 h-4 mr-2" />
              System Online
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 border-0 shadow-card bg-gradient-card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} bg-current/10 rounded-full flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="upload" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="upload">File Upload</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="accounts">Accounts</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* File Upload Tab */}
          <TabsContent value="upload" className="space-y-6">
            <Card className="p-6 border-0 shadow-card bg-gradient-card">
              <h3 className="text-xl font-semibold mb-4">Upload Account Files</h3>
              <p className="text-muted-foreground mb-6">
                Upload .txt files containing accounts in email:password format (one per line)
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Streaming */}
                <div className="space-y-4">
                  <Label className="text-lg font-medium flex items-center gap-2">
                    🎬 Streaming Services
                  </Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
                    <Input
                      type="file"
                      accept=".txt"
                      onChange={(e) => handleFileUpload(e, 'streaming')}
                      className="hidden"
                      id="streaming-upload"
                    />
                    <Label htmlFor="streaming-upload" className="cursor-pointer">
                      <Button variant="outline" disabled={uploading}>
                        {uploading ? "Uploading..." : "Choose File"}
                      </Button>
                    </Label>
                    <p className="text-sm text-muted-foreground mt-2">
                      netflixalts.txt, disneyalts.txt, etc.
                    </p>
                  </div>
                </div>

                {/* Gaming */}
                <div className="space-y-4">
                  <Label className="text-lg font-medium flex items-center gap-2">
                    🎮 Gaming Platforms
                  </Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
                    <Input
                      type="file"
                      accept=".txt"
                      onChange={(e) => handleFileUpload(e, 'gaming')}
                      className="hidden"
                      id="gaming-upload"
                    />
                    <Label htmlFor="gaming-upload" className="cursor-pointer">
                      <Button variant="outline" disabled={uploading}>
                        {uploading ? "Uploading..." : "Choose File"}
                      </Button>
                    </Label>
                    <p className="text-sm text-muted-foreground mt-2">
                      steamalts.txt, epicgamesalts.txt, etc.
                    </p>
                  </div>
                </div>

                {/* Music */}
                <div className="space-y-4">
                  <Label className="text-lg font-medium flex items-center gap-2">
                    🎵 Music Streaming
                  </Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
                    <Input
                      type="file"
                      accept=".txt"
                      onChange={(e) => handleFileUpload(e, 'music')}
                      className="hidden"
                      id="music-upload"
                    />
                    <Label htmlFor="music-upload" className="cursor-pointer">
                      <Button variant="outline" disabled={uploading}>
                        {uploading ? "Uploading..." : "Choose File"}
                      </Button>
                    </Label>
                    <p className="text-sm text-muted-foreground mt-2">
                      spotifyalts.txt, applemusicalt.txt, etc.
                    </p>
                  </div>
                </div>

                {/* Productivity */}
                <div className="space-y-4">
                  <Label className="text-lg font-medium flex items-center gap-2">
                    💼 Productivity Tools
                  </Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-4 text-muted-foreground" />
                    <Input
                      type="file"
                      accept=".txt"
                      onChange={(e) => handleFileUpload(e, 'productivity')}
                      className="hidden"
                      id="productivity-upload"
                    />
                    <Label htmlFor="productivity-upload" className="cursor-pointer">
                      <Button variant="outline" disabled={uploading}>
                        {uploading ? "Uploading..." : "Choose File"}
                      </Button>
                    </Label>
                    <p className="text-sm text-muted-foreground mt-2">
                      office365alts.txt, adobealts.txt, etc.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6 border-0 shadow-card bg-gradient-card">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Revenue Analytics
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Today</span>
                    <span className="font-semibold">$247.83</span>
                  </div>
                  <div className="flex justify-between">
                    <span>This Week</span>
                    <span className="font-semibold">$1,642.15</span>
                  </div>
                  <div className="flex justify-between">
                    <span>This Month</span>
                    <span className="font-semibold">$6,891.45</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span>Total Revenue</span>
                    <span className="font-bold text-success">$24,637.82</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-0 shadow-card bg-gradient-card">
                <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                      <div>
                        <p className="font-medium">{activity.action}</p>
                        {activity.category !== "-" && (
                          <p className="text-sm text-muted-foreground">{activity.category}</p>
                        )}
                      </div>
                      <span className="text-sm text-muted-foreground">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Accounts Tab */}
          <TabsContent value="accounts" className="space-y-6">
            <Card className="p-6 border-0 shadow-card bg-gradient-card">
              <h3 className="text-xl font-semibold mb-4">Account File Status</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { category: "Streaming", files: 8, accounts: 156, status: "Active" },
                  { category: "Gaming", files: 12, accounts: 234, status: "Active" },
                  { category: "Music", files: 6, accounts: 89, status: "Low Stock" },
                  { category: "Productivity", files: 4, accounts: 67, status: "Active" }
                ].map((item, index) => (
                  <Card key={index} className="p-4 bg-background border">
                    <h4 className="font-semibold mb-2">{item.category}</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Files:</span>
                        <span>{item.files}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Accounts:</span>
                        <span>{item.accounts}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Status:</span>
                        <Badge variant={item.status === "Active" ? "default" : "secondary"} className="text-xs">
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="p-6 border-0 shadow-card bg-gradient-card">
              <h3 className="text-xl font-semibold mb-4">Platform Settings</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="ad-networks">Ad Networks Configuration</Label>
                  <Textarea 
                    id="ad-networks"
                    placeholder="Enter ad network APIs and settings..."
                    className="min-h-[100px]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="min-ads">Minimum Ads Per User</Label>
                  <Input type="number" id="min-ads" defaultValue="3" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ad-delay">Ad Delay (seconds)</Label>
                  <Input type="number" id="ad-delay" defaultValue="10" />
                </div>

                <Button variant="gradient" className="w-full">
                  Save Settings
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;