
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, MessageSquare, Search, Settings, User } from "lucide-react";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarTrigger,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarFooter,
  SidebarSeparator
} from "@/components/ui/sidebar";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();
  const [isClient, setIsClient] = useState(false);

  // This prevents hydration errors when using SidebarProvider
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Navigation items
  const navItems = [
    {
      title: "Home",
      icon: Home,
      path: "/",
    },
    {
      title: "Messages",
      icon: MessageSquare,
      path: "/messages",
    },
    {
      title: "Search",
      icon: Search,
      path: "/search",
    },
    {
      title: "Profile",
      icon: User,
      path: "/edit-profile",
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/settings",
    },
  ];

  if (!isClient) {
    return null;
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-2">
              <Avatar className="h-8 w-8">
                <img src="/placeholder.svg" alt="Logo" />
              </Avatar>
              <div className="text-lg font-semibold">Dating App</div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        tooltip={item.title}
                        asChild
                        isActive={location.pathname === item.path}
                      >
                        <Link to={item.path}>
                          <item.icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            <SidebarSeparator />
            
            <SidebarGroup>
              <SidebarGroupLabel>Quick Actions</SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="px-3 py-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/signin">
                      <span>Sign In</span>
                    </Link>
                  </Button>
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <img src="/placeholder.svg" alt="User" />
                </Avatar>
                <div>
                  <div className="text-sm font-medium">Guest User</div>
                  <div className="text-xs text-muted-foreground">guest@example.com</div>
                </div>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset className="overflow-y-auto">
          <div className="relative h-full w-full">
            <div className="absolute left-4 top-4">
              <SidebarTrigger />
            </div>
            <main className="h-full">{children}</main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
