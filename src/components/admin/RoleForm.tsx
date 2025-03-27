
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Role, Permission } from "@/utils/types";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock permissions list
const mockModules = [
  {
    name: "Users",
    permissions: [
      { id: "1", name: "Create Users", description: "Can create new users", module: "users", action: "create" },
      { id: "2", name: "View Users", description: "Can view users", module: "users", action: "read" },
      { id: "3", name: "Edit Users", description: "Can edit users", module: "users", action: "update" },
      { id: "4", name: "Delete Users", description: "Can delete users", module: "users", action: "delete" },
    ]
  },
  {
    name: "Content",
    permissions: [
      { id: "5", name: "Create Content", description: "Can create new content", module: "content", action: "create" },
      { id: "6", name: "View Content", description: "Can view content", module: "content", action: "read" },
      { id: "7", name: "Edit Content", description: "Can edit content", module: "content", action: "update" },
      { id: "8", name: "Delete Content", description: "Can delete content", module: "content", action: "delete" },
    ]
  },
  {
    name: "Categories",
    permissions: [
      { id: "9", name: "Manage Categories", description: "Can manage categories", module: "categories", action: "all" },
    ]
  },
  {
    name: "Menus",
    permissions: [
      { id: "10", name: "Manage Menus", description: "Can manage menus", module: "menus", action: "all" },
    ]
  }
];

interface RoleFormProps {
  role?: Role;
  onSubmit: (role: Role) => void;
}

export const RoleForm: React.FC<RoleFormProps> = ({ role, onSubmit }) => {
  const [name, setName] = useState(role?.name || "");
  const [description, setDescription] = useState(role?.description || "");
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>(
    role?.permissions.map(p => p.id) || []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get all permissions based on selected IDs
    const permissions = mockModules.flatMap(m => 
      m.permissions.filter(p => selectedPermissions.includes(p.id))
    );
    
    const newRole: Role = {
      id: role?.id || `role-${Date.now()}`,
      name,
      description,
      permissions,
      createdAt: role?.createdAt || new Date(),
      updatedAt: new Date(),
    };
    
    onSubmit(newRole);
  };

  const handlePermissionToggle = (permissionId: string) => {
    setSelectedPermissions(prevSelected => {
      if (prevSelected.includes(permissionId)) {
        return prevSelected.filter(id => id !== permissionId);
      } else {
        return [...prevSelected, permissionId];
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Role Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter role name"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter role description"
            rows={3}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label>Permissions</Label>
        <Tabs defaultValue={mockModules[0].name.toLowerCase()}>
          <TabsList className="w-full flex overflow-x-auto">
            {mockModules.map((module) => (
              <TabsTrigger 
                key={module.name} 
                value={module.name.toLowerCase()} 
                className="flex-1"
              >
                {module.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {mockModules.map((module) => (
            <TabsContent 
              key={module.name} 
              value={module.name.toLowerCase()}
              className="border rounded-md p-4 mt-2"
            >
              <div className="space-y-4">
                {module.permissions.map((permission) => (
                  <div key={permission.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`permission-${permission.id}`}
                      checked={selectedPermissions.includes(permission.id)}
                      onCheckedChange={() => handlePermissionToggle(permission.id)}
                    />
                    <Label htmlFor={`permission-${permission.id}`} className="flex-1">
                      <div className="font-medium">{permission.name}</div>
                      <div className="text-sm text-muted-foreground">{permission.description}</div>
                    </Label>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline">Cancel</Button>
        <Button type="submit">Save Role</Button>
      </div>
    </form>
  );
};
