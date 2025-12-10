"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Lock, Unlock, Clock } from "lucide-react";

export default function ParentalControlCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold">Parental control</CardTitle>
        <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
          Add New Device
        </Button>
      </CardHeader>
      <CardContent>
        <div className="bg-gradient-to-br from-card to-muted border border-border rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border-2 border-primary/20">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Aima</h3>
                  <p className="text-sm text-muted-foreground">Target Device</p>
                </div>
                <Button size="sm" className="bg-primary gap-2">
                  <Clock className="w-4 h-4" />
                  Set Time
                </Button>
              </div>
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg px-4 py-2 inline-block mb-4">
                <span className="text-2xl font-bold text-primary">2 hrs</span>
                <span className="text-sm text-muted-foreground ml-1">left</span>
              </div>
              <div className="flex gap-3">
                <Button variant="secondary" className="flex-1 gap-2">
                  <Lock className="w-4 h-4" />
                  Lock Screen
                </Button>
                <Button variant="secondary" className="flex-1 gap-2">
                  <Unlock className="w-4 h-4" />
                  Unlock Screen
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <Button variant="link" className="text-primary font-medium">
            See All Devices
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
