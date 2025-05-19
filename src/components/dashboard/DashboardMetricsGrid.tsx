
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EyeIcon, HeartIcon, MessageSquareIcon, UsersIcon } from "lucide-react";

export const DashboardMetricsGrid = () => {
  // Mock data - in a real app, this would come from an API
  const metrics = [
    {
      title: "Profile Views",
      value: "3,427",
      change: "+12% from last week",
      icon: <EyeIcon className="h-4 w-4 text-muted-foreground" />,
      trend: "up"
    },
    {
      title: "Likes Received",
      value: "842",
      change: "+24% from last week",
      icon: <HeartIcon className="h-4 w-4 text-muted-foreground" />,
      trend: "up"
    },
    {
      title: "Messages",
      value: "32",
      change: "+5% from last week",
      icon: <MessageSquareIcon className="h-4 w-4 text-muted-foreground" />,
      trend: "up"
    },
    {
      title: "Match Rate",
      value: "64%",
      change: "No change from last week",
      icon: <UsersIcon className="h-4 w-4 text-muted-foreground" />,
      trend: "neutral"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            {metric.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className={`text-xs ${
              metric.trend === "up" 
                ? "text-green-500" 
                : metric.trend === "down" 
                  ? "text-red-500" 
                  : "text-muted-foreground"
            }`}>
              {metric.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
