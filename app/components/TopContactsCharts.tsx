"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { Button } from "../components/ui/button";

const messagingData = [
  { name: "Iqra", value: 130, color: "hsl(var(--chart-3))" },
  { name: "Asim", value: 200, color: "hsl(var(--chart-2))" },
  { name: "Azka", value: 130, color: "hsl(var(--chart-6))" },
  { name: "Atif", value: 130, color: "hsl(var(--chart-3))" },
  { name: "Ali", value: 130, color: "hsl(var(--chart-6))" },
  { name: "Zoha", value: 130, color: "hsl(var(--chart-2))" },
  { name: "Mirha", value: 130, color: "hsl(var(--chart-1))" },
  { name: "Adan", value: 130, color: "hsl(var(--chart-4))" },
];

const callingData = [
  { name: "Iqra", value: 6, color: "hsl(var(--chart-5))" },
  { name: "Minhal", value: 6, color: "hsl(var(--chart-4))" },
  { name: "daniyal", value: 5, color: "hsl(var(--chart-1))" },
  { name: "Ayesha", value: 2, color: "hsl(var(--chart-6))" },
  { name: "anum", value: 3, color: "hsl(var(--chart-1))" },
];

export default function TopContactsCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Top Messaging Contacts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Top Messaging Contacts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {messagingData.map((item, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-muted-foreground">{item.value} time</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all" 
                    style={{ 
                      width: `${(item.value / 200) * 100}%`,
                      backgroundColor: item.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
            <div>
              <p className="text-muted-foreground mb-1">Aba. W</p>
              <p className="font-medium">@abasassar</p>
              <p className="text-muted-foreground">Baylee</p>
              <p className="font-medium">98232900</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Juliana. H</p>
              <p className="font-medium">@abdsasa14</p>
              <p className="text-muted-foreground">Jodie</p>
              <p className="font-medium">98989057726</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Button variant="link" className="text-primary font-medium">
              All Messages
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Top Calling Contacts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Top Calling Contacts</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={callingData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}\n${value} times`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {callingData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
            <div>
              <p className="text-muted-foreground mb-1">Iqra</p>
              <p className="font-medium">@sadasdasda</p>
              <p className="text-muted-foreground">Minhal</p>
              <p className="font-medium">97132378</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Daniyal</p>
              <p className="font-medium">@asdsdsadads</p>
              <p className="text-muted-foreground">Ayesha</p>
              <p className="font-medium">97132316747</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Button variant="link" className="text-primary font-medium">
              All Calls
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
