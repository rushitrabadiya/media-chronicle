
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Menu } from "@/utils/types";
import { Checkbox } from "@/components/ui/checkbox";

// Mock roles with permissions
const mockRoles = [
  { id: "1", name: "Admin", permissions: ["admin.*"] },
  { id: "2", name: "Editor", permissions: ["admin.content.*", "admin.categories.*"] },
  { id: "3", name: "User Manager", permissions: ["admin.users.*"] },
  { id: "4", name: "Viewer", permissions: ["admin.*.view"] },
];

interface MenuPermissionsFormProps {
  menu: Menu;
  onSubmit: (permissions: string[]) => void;
}

export const MenuPermissionsForm: React.FC<MenuPermissionsFormProps> = ({ 
  menu, 
  onSubmit 
}) => {
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>(
    menu.permissions || []
  );
  
  // Generate available permissions based on menu path
  const generateAvailablePermissions = () => {
    const path = menu.path.replace('/admin/', '').split('/')[0] || 'dashboard';
    return [
      `admin.${path}.view`,
      `admin.${path}.create`,
      `admin.${path}.edit`,
      `admin.${path}.delete`,
      `admin.${path}.*`,
    ];
  };

  const availablePermissions = generateAvailablePermissions();

  const handlePermissionToggle = (permission: string) => {
    setSelectedPermissions(prev => 
      prev.includes(permission)
        ? prev.filter(p => p !== permission)
        : [...prev, permission]
    );
  };

  const handleRolePermissionToggle = (rolePermissions: string[]) => {
    // Check if all role permissions are already selected
    const allSelected = rolePermissions.every(p => 
      selectedPermissions.includes(p) || 
      // Handle wildcards
      (p.endsWith('*') && selectedPermissions.some(sp => sp.startsWith(p.replace('*', ''))))
    );
    
    if (allSelected) {
      // Remove all role permissions
      setSelectedPermissions(prev => 
        prev.filter(p => !rolePermissions.some(rp => 
          p === rp || (rp.endsWith('*') && p.startsWith(rp.replace('*', '')))
        ))
      );
    } else {
      // Add all role permissions
      const newPermissions = [...selectedPermissions];
      rolePermissions.forEach(p => {
        if (!newPermissions.includes(p)) {
          newPermissions.push(p);
        }
      });
      setSelectedPermissions(newPermissions);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(selectedPermissions);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Individual Permissions</Label>
          <div className="border rounded-md p-4 space-y-3">
            {availablePermissions.map((permission) => (
              <div key={permission} className="flex items-center space-x-2">
                <Checkbox
                  id={permission}
                  checked={selectedPermissions.includes(permission)}
                  onCheckedChange={() => handlePermissionToggle(permission)}
                />
                <Label htmlFor={permission} className="cursor-pointer">
                  {permission}
                </Label>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Quick Select by Role</Label>
          <div className="border rounded-md p-4 space-y-3">
            {mockRoles.map((role) => (
              <div key={role.id} className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`role-${role.id}`}
                    checked={role.permissions.every(p => 
                      selectedPermissions.includes(p) || 
                      (p.endsWith('*') && availablePermissions.some(ap => 
                        ap.startsWith(p.replace('*', '')) && selectedPermissions.includes(ap)
                      ))
                    )}
                    onCheckedChange={() => handleRolePermissionToggle(role.permissions)}
                  />
                  <Label htmlFor={`role-${role.id}`} className="font-medium cursor-pointer">
                    {role.name}
                  </Label>
                </div>
                <div className="text-xs text-muted-foreground pl-6">
                  Permissions: {role.permissions.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline">Cancel</Button>
        <Button type="submit">Save Permissions</Button>
      </div>
    </form>
  );
};
