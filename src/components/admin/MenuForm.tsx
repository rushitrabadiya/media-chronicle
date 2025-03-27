
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Menu } from "@/utils/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// List of available Lucide icons
const availableIcons = [
  "LayoutDashboard",
  "Users",
  "FileText",
  "BarChart3",
  "Settings",
  "Shield",
  "FolderTree",
  "Menu",
  "Home",
  "BookOpen",
  "Newspaper",
  "MessageSquare",
];

interface MenuFormProps {
  menu?: Menu;
  onSubmit: (menu: Menu) => void;
}

export const MenuForm: React.FC<MenuFormProps> = ({ menu, onSubmit }) => {
  const [name, setName] = useState(menu?.name || "");
  const [path, setPath] = useState(menu?.path || "");
  const [icon, setIcon] = useState(menu?.icon || "");
  const [order, setOrder] = useState(menu?.order || 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newMenu: Menu = {
      id: menu?.id || `menu-${Date.now()}`,
      name,
      path,
      icon,
      order: order || 999, // Default to end of list
      permissions: menu?.permissions || [],
    };

    onSubmit(newMenu);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Menu Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter menu name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="path">Path</Label>
          <Input
            id="path"
            value={path}
            onChange={(e) => setPath(e.target.value)}
            placeholder="Enter menu path (e.g., /admin/users)"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="icon">Icon</Label>
          <Select value={icon} onValueChange={setIcon}>
            <SelectTrigger id="icon">
              <SelectValue placeholder="Select an icon" />
            </SelectTrigger>
            <SelectContent>
              {availableIcons.map((iconName) => (
                <SelectItem key={iconName} value={iconName}>
                  {iconName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="order">Order</Label>
          <Input
            id="order"
            type="number"
            min="1"
            value={order || ""}
            onChange={(e) => setOrder(parseInt(e.target.value, 10))}
            placeholder="Display order (lower numbers first)"
          />
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit">Save Menu</Button>
      </div>
    </form>
  );
};
