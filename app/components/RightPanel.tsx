"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Smartphone, Shield, ChevronDown } from "lucide-react";

const screenTimeData = [
  { name: "App1", value: 35, color: "hsl(var(--chart-2))" },
  { name: "App2", value: 40, color: "hsl(var(--chart-1))" },
  { name: "App3", value: 25, color: "hsl(var(--chart-6))" },
];

const appsUsed = [
  { name: "Whatsapp", hours: "2 Hours" },
  { name: "Instagram", hours: "35 min" },
  { name: "SnapChat", hours: "2 Hours" },
  { name: "Google Chrome", hours: "2 Hours" },
  { name: "Facebook", hours: "2 Hours" },
];

export default function RightPanel() {
  return (
    <div className="w-80 bg-background border-l border-border p-6 space-y-6 overflow-y-auto h-screen">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Parental Control System</h2>
        <div className="flex items-center gap-2">
          <Button className="bg-primary">Try Now</Button>
          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">
            M
          </div>
        </div>
      </div>

      {/* Device Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold">Device Information</CardTitle>
          <p className="text-xs text-muted-foreground mt-1">
            Your Family's Devices, Secure and Transparent
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-destructive" />
              <span className="text-sm">Samsung Galaxy</span>
            </div>
            <Badge variant="secondary" className="bg-warning/10 text-warning hover:bg-warning/10">
              Premium - 12 Months
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-destructive" />
              <span className="text-sm">#1120xxxx</span>
            </div>
            <Badge variant="secondary" className="bg-destructive/10 text-destructive hover:bg-destructive/10">
              83 Days Left
            </Badge>
          </div>
          <div className="pt-4 space-y-2 text-sm">
            <p className="flex justify-between">
              <span className="text-muted-foreground">IMEI:</span>
              <span className="font-medium">XXYYZZYY-English.</span>
            </p>
            <p className="flex justify-between">
              <span className="text-muted-foreground">Battery:</span>
              <span className="font-medium">91%</span>
            </p>
            <p className="flex justify-between">
              <span className="text-muted-foreground">Wifi:</span>
              <span className="font-medium">ON</span>
            </p>
            <p className="flex justify-between">
              <span className="text-muted-foreground">Location Tracker:</span>
              <span className="font-medium">GPS</span>
            </p>
            <p className="flex justify-between">
              <span className="text-muted-foreground">Last Update:</span>
              <span className="font-medium">2015-10-19 09:59:33</span>
            </p>
          </div>
          <div className="flex justify-center pt-4">
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-accent to-destructive flex items-center justify-center shadow-lg">
              <Shield className="w-16 h-16 text-white" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Activity */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-semibold">Activity</CardTitle>
            <Button variant="outline" size="sm" className="gap-2">
              Devices
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Most Used Apps</p>
              <p className="text-2xl font-bold text-success">3</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Total Screen Time</p>
              <p className="text-2xl font-bold text-success">4hr 30 min</p>
            </div>
          </div>
          <div className="flex justify-center">
            <ResponsiveContainer width="100%" height={120}>
              <PieChart>
                <Pie
                  data={screenTimeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                >
                  {screenTimeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 text-sm">
            <p className="flex justify-between">
              <span className="text-muted-foreground">Last online</span>
              <span className="font-medium text-destructive">10:15AM</span>
            </p>
            <p className="flex justify-between">
              <span className="text-muted-foreground">Last Chat</span>
              <span className="font-medium text-destructive">10:30AM</span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Account */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold">Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2 text-sm">
            <p className="flex justify-between">
              <span className="text-muted-foreground">Account Type:</span>
              <span className="font-medium">Premium</span>
            </p>
            <p className="flex justify-between">
              <span className="text-muted-foreground">Auto-Renewal:</span>
              <Button variant="ghost" size="sm" className="h-6 px-2">
                <div className="w-8 h-4 bg-muted rounded-full relative">
                  <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 right-0.5 shadow" />
                </div>
              </Button>
            </p>
            <p className="flex justify-between">
              <span className="text-muted-foreground">Expiry Date:</span>
              <span className="font-medium">2022-05-20 02:28</span>
            </p>
          </div>
          <Button className="w-full bg-primary">Renew</Button>
        </CardContent>
      </Card>

      {/* Top Apps Used */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold">Top Apps Used</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-medium text-muted-foreground pb-2 border-b">
              <span>Apps</span>
              <span>Usage Hours</span>
            </div>
            {appsUsed.map((app, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="font-medium">{app.name}</span>
                <span className="text-muted-foreground">{app.hours}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
