
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface AnalyticsChartProps {
  period: "daily" | "weekly" | "monthly";
}

export const AnalyticsChart = ({ period }: AnalyticsChartProps) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Generate mock data based on the selected period
    if (period === "daily") {
      setData([
        { name: "12 AM", views: 40, likes: 20, messages: 5 },
        { name: "4 AM", views: 30, likes: 18, messages: 4 },
        { name: "8 AM", views: 60, likes: 30, messages: 8 },
        { name: "12 PM", views: 120, likes: 70, messages: 25 },
        { name: "4 PM", views: 160, likes: 90, messages: 32 },
        { name: "8 PM", views: 180, likes: 100, messages: 38 },
      ]);
    } else if (period === "weekly") {
      setData([
        { name: "Mon", views: 400, likes: 240, messages: 40 },
        { name: "Tue", views: 380, likes: 230, messages: 35 },
        { name: "Wed", views: 500, likes: 330, messages: 52 },
        { name: "Thu", views: 620, likes: 410, messages: 75 },
        { name: "Fri", views: 750, likes: 510, messages: 95 },
        { name: "Sat", views: 800, likes: 570, messages: 120 },
        { name: "Sun", views: 760, likes: 490, messages: 88 },
      ]);
    } else {
      setData([
        { name: "Jan", views: 2400, likes: 1200, messages: 300 },
        { name: "Feb", views: 2000, likes: 980, messages: 280 },
        { name: "Mar", views: 2800, likes: 1400, messages: 350 },
        { name: "Apr", views: 3200, likes: 1600, messages: 420 },
        { name: "May", views: 3600, likes: 1900, messages: 490 },
        { name: "Jun", views: 3400, likes: 1700, messages: 450 },
      ]);
    }
  }, [period]);

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="views" stroke="#9b87f5" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="likes" stroke="#ff7e67" />
          <Line type="monotone" dataKey="messages" stroke="#7ec8e3" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
