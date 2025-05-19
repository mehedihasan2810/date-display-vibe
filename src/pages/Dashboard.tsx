
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { 
  EyeIcon, 
  HeartIcon, 
  MessageSquareIcon, 
  BarChart3Icon, 
  CalendarIcon,
  UsersIcon,
  TrendingUpIcon
} from "lucide-react";
import { DashboardMetricsGrid } from "@/components/dashboard/DashboardMetricsGrid";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { RecentVisitors } from "@/components/dashboard/RecentVisitors";
import { AnalyticsChart } from "@/components/dashboard/AnalyticsChart";

const Dashboard = () => {
  const [period, setPeriod] = useState<"daily" | "weekly" | "monthly">("weekly");

  return (
    <div className="container py-10 space-y-8">
      <DashboardHeader />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <DashboardMetricsGrid />
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Profile Analytics</CardTitle>
                <CardDescription>How your profile is performing</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant={period === "daily" ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setPeriod("daily")}
                >
                  Daily
                </Button>
                <Button 
                  variant={period === "weekly" ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setPeriod("weekly")}
                >
                  Weekly
                </Button>
                <Button 
                  variant={period === "monthly" ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setPeriod("monthly")}
                >
                  Monthly
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <AnalyticsChart period={period} />
            </CardContent>
          </Card>
        </div>
        
        <div className="space-y-6">
          <RecentVisitors />
          
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Your scheduled activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4 p-3 bg-muted/50 rounded-md">
                <CalendarIcon className="mt-0.5 text-primary" />
                <div>
                  <p className="font-medium">Coffee Meetup</p>
                  <p className="text-sm text-muted-foreground">Tomorrow at 3:00 PM</p>
                  <p className="text-sm">Blue Bottle Coffee, Downtown</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 bg-muted/50 rounded-md">
                <CalendarIcon className="mt-0.5 text-primary" />
                <div>
                  <p className="font-medium">Hiking Group</p>
                  <p className="text-sm text-muted-foreground">Saturday at 8:00 AM</p>
                  <p className="text-sm">Twin Peaks Trail</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View Calendar</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
