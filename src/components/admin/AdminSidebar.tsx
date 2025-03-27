
import {
  BarChart3,
  FileText,
  Home,
  Users,
  Settings,
  LayoutDashboard,
  Shield,
  FolderTree,
  Menu,
  FileCode,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AdminSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const menuItems = [
    {
      title: "Dashboard",
      path: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Users",
      path: "/admin/users",
      icon: Users,
    },
    {
      title: "Posts",
      path: "/admin/posts",
      icon: FileText,
    },
    {
      title: "Content",
      path: "/admin/content",
      icon: FileCode,
    },
    {
      title: "Categories",
      path: "/admin/categories",
      icon: FolderTree,
    },
    {
      title: "Roles",
      path: "/admin/roles",
      icon: Shield,
    },
    {
      title: "Menus",
      path: "/admin/menus",
      icon: Menu,
    },
    {
      title: "Analytics",
      path: "/admin/analytics",
      icon: BarChart3,
    },
    {
      title: "Settings",
      path: "/admin/settings",
      icon: Settings,
    },
    {
      title: "Website",
      path: "/",
      icon: Home,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center p-4">
        <div className="flex items-center space-x-2">
          <LayoutDashboard className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Admin Portal</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton
                    asChild
                    isActive={
                      item.path === "/admin"
                        ? currentPath === "/admin"
                        : currentPath.startsWith(item.path)
                    }
                    tooltip={item.title}
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
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="text-xs text-muted-foreground text-center">
          Admin Portal v1.0.0
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
