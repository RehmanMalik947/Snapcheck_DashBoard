"use client";
import { 
  LayoutDashboard, 
  Users, 
  MessageSquare, 
  Calendar, 
  Camera, 
  FolderKanban, 
  Activity, 
  Video, 
  Clock, 
  Smartphone, 
  PieChart, 
  Settings, 
  HelpCircle, 
  MessageCircle,
  ChevronDown,
  Plus
} from "lucide-react";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard, badge: null, active: true, section: "general" },
  { name: "My Team", icon: Users, badge: null, active: false, section: "general" },
  { name: "Message", icon: MessageSquare, badge: 2, active: false, section: "general" },
  { name: "Schedule", icon: Calendar, badge: 3, active: false, section: "general" },
  { name: "Screenshots", icon: Camera, badge: null, active: false, section: "general" },
  { name: "Project", icon: FolderKanban, badge: null, active: false, section: "general" },
  { name: "Activity", icon: Activity, badge: null, active: false, section: "proof" },
  { name: "Time-lapse Video", icon: Video, badge: null, active: false, section: "proof" },
  { name: "Time Sheet", icon: Clock, badge: null, active: false, section: "proof" },
  { name: "Apps History", icon: Smartphone, badge: null, active: false, section: "usage" },
  { name: "App Summary", icon: PieChart, badge: null, active: false, section: "usage" },
  { name: "Setting", icon: Settings, badge: null, active: false, section: "support" },
  { name: "Help!", icon: HelpCircle, badge: null, active: false, section: "support" },
  { name: "Chat", icon: MessageCircle, badge: 5, active: false, section: "support" },
];

const sections = [
  { id: "general", label: "General" },
  { id: "proof", label: "Proof of Work" },
  { id: "usage", label: "App Usage" },
  { id: "support", label: "Support" },
];

export default function DashboardSidebar() {
  return (
    <div className="w-56 bg-sidebar border-r border-sidebar-border flex flex-col h-screen">
      {/* Logo */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <Smartphone className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg text-foreground">SNAPCHECK</span>
        </div>
      </div>

      {/* Mode Selector */}
      <div className="p-4 border-b border-sidebar-border">
        <Button variant="ghost" className="w-full justify-between text-sm font-medium">
          Mode
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>

      {/* Device Selector */}
      <div className="px-3 py-4 border-b border-sidebar-border">
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start text-xs text-sidebar-foreground hover:bg-transparent">
            <Smartphone className="w-3 h-3 mr-2" />
            SnapCheck
          </Button>
          <div className="bg-sidebar-accent border border-sidebar-accent-foreground/20 rounded-lg p-2 flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-sidebar-accent-foreground" />
            <span className="text-xs font-medium text-sidebar-accent-foreground flex-1">Andrew's Android</span>
            <div className="w-4 h-4 rounded-full bg-success flex items-center justify-center">
              <div className="w-2 h-1.5 border-l-2 border-b-2 border-white transform -rotate-45 -translate-y-0.5" />
            </div>
          </div>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-xs text-sidebar-foreground hover:bg-muted"
          >
            <Plus className="w-3 h-3 mr-2" />
            Add More Device
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        {sections.map((section) => (
          <div key={section.id} className="mb-4">
            <div className="px-4 mb-2">
              <span className="text-xs font-medium text-muted-foreground uppercase">
                {section.label}
              </span>
            </div>
            <nav className="space-y-1 px-2">
              {navigation
                .filter((item) => item.section === section.id)
                .map((item) => (
                  <button
                    key={item.name}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors relative",
                      item.active
                        ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="flex-1 text-left">{item.name}</span>
                    {item.badge && (
                      <span className="bg-accent text-accent-foreground text-xs font-medium px-1.5 py-0.5 rounded">
                        {item.badge}
                      </span>
                    )}
                  </button>
                ))}
            </nav>
          </div>
        ))}
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-medium">
            A
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Admin</p>
          </div>
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <Activity className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
