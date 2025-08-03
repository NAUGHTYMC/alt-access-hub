import { Card } from "@/components/ui/card";
import { TrendingUp, Users, CheckCircle, Clock } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Happy Users",
      color: "text-blue-500"
    },
    {
      icon: CheckCircle,
      value: "99.9%",
      label: "Success Rate",
      color: "text-green-500"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Updated",
      color: "text-purple-500"
    },
    {
      icon: TrendingUp,
      value: "500+",
      label: "Daily Accounts",
      color: "text-orange-500"
    }
  ];

  return (
    <section id="stats" className="py-20 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 text-center border-0 shadow-card bg-gradient-card hover:shadow-primary transition-all duration-300 hover:scale-105"
            >
              <div className={`w-12 h-12 mx-auto mb-4 ${stat.color} bg-current/10 rounded-full flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};