"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Calendar } from "lucide-react";
import { Button } from "../components/ui/button";

const data = [
  { name: "2020-01", textMessages: 10, gpsLocation: 8, whatsapp: 5, browserHistory: 12 },
  { name: "2020-01", textMessages: 15, gpsLocation: 12, whatsapp: 18, browserHistory: 15 },
  { name: "2020-01", textMessages: 12, gpsLocation: 15, whatsapp: 20, browserHistory: 18 },
  { name: "2020-01", textMessages: 18, gpsLocation: 10, whatsapp: 22, browserHistory: 20 },
  { name: "2020-01", textMessages: 22, gpsLocation: 25, whatsapp: 28, browserHistory: 25 },
  { name: "2020-01", textMessages: 28, gpsLocation: 22, whatsapp: 25, browserHistory: 28 },
  { name: "2020-01", textMessages: 25, gpsLocation: 28, whatsapp: 30, browserHistory: 30 },
];

export default function DeviceActivityChart() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Target Device Activity</CardTitle>
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="w-4 h-4" />
            2023-01 - 2023-08
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-chart-3" />
            <span className="text-xs text-muted-foreground">Text Messages</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-chart-1" />
            <span className="text-xs text-muted-foreground">GPS Location</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-chart-2" />
            <span className="text-xs text-muted-foreground">WhatsApp</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-chart-4" />
            <span className="text-xs text-muted-foreground">Browser History</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "0.5rem",
              }}
            />
            <Line 
              type="monotone" 
              dataKey="textMessages" 
              stroke="hsl(var(--chart-3))" 
              strokeWidth={2}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="gpsLocation" 
              stroke="hsl(var(--chart-1))" 
              strokeWidth={2}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="whatsapp" 
              stroke="hsl(var(--chart-2))" 
              strokeWidth={2}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="browserHistory" 
              stroke="hsl(var(--chart-4))" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
